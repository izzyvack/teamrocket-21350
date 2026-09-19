// Serves only public/. No dependencies, credentials, or database needed.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }); return res.end();
  }
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    if (!extname(pathname)) pathname += '.html';
    const target = resolve(root, '.' + pathname);
    if (!target.startsWith(root + sep)) { res.writeHead(403); return res.end('Forbidden'); }
    const info = await stat(target);
    if (!info.isFile()) throw Object.assign(new Error('Missing'), { code: 'ENOENT' });
    const content = await readFile(target);
    res.writeHead(200, {
      'Content-Type': types[extname(target)] || 'application/octet-stream',
      'Content-Length': content.length,
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': extname(target) === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const status = error instanceof URIError ? 400 : (error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 404 : 500);
    res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
    if (req.method === 'HEAD') return res.end();
    if (status === 404) return res.end(await readFile(resolve(root, '404.html')));
    res.end(status === 400 ? 'Invalid URL' : 'Unable to load this page.');
  }
}).listen(port, '0.0.0.0', () => console.log(`Team Rocket is ready at http://localhost:${port}`));
