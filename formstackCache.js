// Lightweight Formstack ID cache with TTL and SSM fallback.
// - Reads from env FORMSTACK_ID if present.
// - Otherwise reads SSM parameter named by FORMSTACK_ID_SSM_PARAM.
// - Caches value in-memory for FORMSTACK_CACHE_TTL_SECONDS.


import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';


const ssm = new SSMClient({});


let cachedId = null;
let cachedAt = 0;


const ttlMs = () => {
const sec = Number(process.env.FORMSTACK_CACHE_TTL_SECONDS || 600);
return Math.max(1, sec) * 1000;
};


async function fetchFromSSM() {
const name = process.env.FORMSTACK_ID_SSM_PARAM;
if (!name) return null;
const res = await ssm.send(new GetParameterCommand({ Name: name, WithDecryption: true }));
return res?.Parameter?.Value || null;
}


export async function getFormstackId() {
const now = Date.now();
if (cachedId && now - cachedAt < ttlMs()) return cachedId;


let id = process.env.FORMSTACK_ID || null;
if (!id) {
id = await fetchFromSSM();
}


if (!id) throw new Error('Formstack ID not configured');


cachedId = id;
cachedAt = now;
return id;
}
