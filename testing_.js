// app.js — Node.js 20.x on AWS Lambda
// Env vars required: FORMSTACK_TOKEN=fs_pat_xxx  (and optionally FORMSTACK_BASE_URL)
const BASE_URL = process.env.FORMSTACK_BASE_URL ?? 'https://www.formstack.com/api/v2025';
const TOKEN = process.env.FORMSTACK_TOKEN; // Personal Access Token: fs_pat_...

const DEFAULT_TIMEOUT_MS = 10000;
const MAX_RETRIES = 3;

exports.handler = async (event) => {
  if (!TOKEN) return resp(500, { error: 'FORMSTACK_TOKEN env var not set' });

  try {
    const method = event.httpMethod || 'GET';

    if (method === 'GET') {
      // Example: List forms
      const data = await fsFetch('/forms');
      return resp(200, data);
    }

    if (method === 'POST') {
      // Example: Create a submission
      // Body supports either:
      // { formId: 123, fields: { "11111": "Alice", "22222": "alice@example.com" } }
      // OR
      // { formId: 123, fields: [ { field: "11111", value: "Alice" }, { field: "22222", value: "alice@example.com" } ] }
      const body = event.body ? JSON.parse(event.body) : {};
      const { formId, fields } = body || {};
      if (!formId) return resp(400, { error: 'Missing formId' });

      const payload = Array.isArray(fields)
        ? { fields }
        : {
            fields: Object.entries(fields ?? {}).map(([field, value]) => ({
              field: String(field),
              value
            }))
          };

      const data = await fsFetch(`/forms/${formId}/submissions`, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      return resp(201, data);
    }

    return resp(405, { error: 'Method Not Allowed' });
  } catch (err) {
    return resp(500, { error: err.message });
  }
};

async function fsFetch(path, options = {}, attempt = 1) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      ...options,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers
      },
      signal: controller.signal
    });

    if ((res.status === 429 || res.status >= 500) && attempt < MAX_RETRIES) {
      const retryAfter = Number(res.headers.get('retry-after'));
      const delayMs = !Number.isNaN(retryAfter) ? retryAfter * 1000 : Math.min(2 ** attempt * 300, 4000);
      await new Promise((r) => setTimeout(r, delayMs));
      return fsFetch(path, options, attempt + 1);
    }

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status} ${res.statusText}: ${text}`);
    }
    return res.json();
  } finally {
    clearTimeout(t);
  }
}

function resp(statusCode, body) {
  return { statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
}
