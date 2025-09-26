// Minimal TOKEN authorizer supporting either:
// 1) Static bearer token (AUTH_TOKEN), or
// 2) HS256 JWT verification with AUTH_JWT_SECRET


import jwt from 'jsonwebtoken';


const allowPolicy = (principalId, methodArn, context = {}) => ({
principalId,
policyDocument: {
Version: '2012-10-17',
Statement: [
{
Action: 'execute-api:Invoke',
Effect: 'Allow',
Resource: methodArn,
},
],
},
context,
});


const denyPolicy = (principalId, methodArn, reason = 'Unauthorized') => ({
principalId,
policyDocument: {
Version: '2012-10-17',
Statement: [
{
Action: 'execute-api:Invoke',
Effect: 'Deny',
Resource: methodArn,
},
],
},
context: { reason },
});


export const authorize = async (event) => {
try {
const token = (event.authorizationToken || '').replace(/^Bearer\s+/i, '');
const methodArn = event.methodArn;


if (!token) return denyPolicy('anonymous', methodArn);


// Option 1: Static token check (quickest)
if (process.env.AUTH_TOKEN && token === process.env.AUTH_TOKEN) {
return allowPolicy('static-user', methodArn, { authType: 'static' });
}


// Option 2: Verify HS256 JWT
if (process.env.AUTH_JWT_SECRET) {
const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET, { algorithms: ['HS256'] });
const sub = decoded.sub || decoded.user || 'jwt-user';
return allowPolicy(String(sub), methodArn, { authType: 'jwt', scope: decoded.scope || '' });
}


// If neither method is configured, deny.
return denyPolicy('anonymous', methodArn, 'No auth method configured');
} catch (err) {
console.error('Auth error:', err);
return denyPolicy('anonymous', event.methodArn, 'Bad token');
}
};
