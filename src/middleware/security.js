// Security headers middleware
export const securityHeaders = (req, res, next) => {
res.set({
'X-Content-Type-Options': 'nosniff',
'X-Frame-Options': 'DENY',
'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
});
next();
};
// Add to server.js:
// import { securityHeaders } from './src/middleware/security.js';
// app.use(securityHeaders);
