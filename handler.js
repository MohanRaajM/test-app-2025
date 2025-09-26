// Simple router that exposes GET /forms and POST /forms
// Demonstrates using the cached Formstack ID.


import { getFormstackId } from './formstackCache.js';


function response(statusCode, body, headers = {}) {
return {
statusCode,
headers: { 'Content-Type': 'application/json', ...headers },
body: JSON.stringify(body),
};
}


export const router = async (event) => {
try {
const method = event.httpMethod;


if (method === 'GET') {
const id = await getFormstackId();
// Example: return the ID and maybe some health/meta info
return response(200, { ok: true, formstackId: id });
}


if (method === 'POST') {
const id = await getFormstackId();
const payload = event.body ? JSON.parse(event.body) : {};


// TODO: forward to Formstack API if needed.
// Example passthrough echo for now
return response(201, { ok: true, formstackId: id, received: payload });
}


return response(405, { ok: false, message: 'Method Not Allowed' }, { 'Allow': 'GET, POST' });
} catch (err) {
console.error('Handler error:', err);
return response(500, { ok: false, message: err.message || 'Internal Error' });
}
};
