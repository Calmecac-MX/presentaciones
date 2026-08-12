import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

console.log('📦 Compilando Aliados...');
execSync('npx slidev build slides.md --base /aliados/ --out ../dist/aliados', { cwd: path.resolve('aliados'), stdio: 'inherit' });

console.log('📦 Compilando Creadores...');
execSync('npx slidev build slides.md --base /creadores/ --out ../dist/creadores', { cwd: path.resolve('creadores'), stdio: 'inherit' });

console.log('📦 Compilando Intro...');
execSync('npx slidev build slides.md --base /intro/ --out ../dist/intro', { cwd: path.resolve('intro'), stdio: 'inherit' });

const indexHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CALMÉCAC — Hub de Presentaciones</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090a0f;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.1);
      --text: #f3f4f6;
      --text-dim: #9ca3af;
      --gold: #d4af37;
      --gold-glow: rgba(212, 175, 55, 0.2);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .container {
      max-width: 900px;
      width: 100%;
      text-align: center;
    }
    .logo-badge {
      display: inline-block;
      padding: 0.4rem 1.2rem;
      border-radius: 9999px;
      border: 1px solid var(--gold);
      color: var(--gold);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      background: var(--gold-glow);
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }
    p.subtitle {
      color: var(--text-dim);
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 2rem;
      text-decoration: none;
      color: var(--text);
      text-align: left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: var(--gold);
      box-shadow: 0 12px 30px rgba(212, 175, 55, 0.15);
    }
    .card-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .card-desc {
      color: var(--text-dim);
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
    .card-link {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--gold);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    footer {
      margin-top: 4rem;
      color: var(--text-dim);
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-badge">CALMÉCAC</div>
    <h1>Presentaciones Institucionales</h1>
    <p class="subtitle">Portal de diapositivas y propuestas corporativas de CALMÉCAC</p>
    
    <div class="grid">
      <a href="/aliados/" class="card">
        <div>
          <div class="card-icon">🤝</div>
          <div class="card-title">Aliados Estratégicos</div>
          <div class="card-desc">Propuesta de colaboración institucional para comunidades de emprendedores y socios.</div>
        </div>
        <div class="card-link">Ver presentación &rarr;</div>
      </a>
      
      <a href="/creadores/" class="card">
        <div>
          <div class="card-icon">🎨</div>
          <div class="card-title">Creadores de Contenido</div>
          <div class="card-desc">Propuesta comercial para influencers, creadores e incubadora e-commerce.</div>
        </div>
        <div class="card-link">Ver presentación &rarr;</div>
      </a>

      <a href="/intro/" class="card">
        <div>
          <div class="card-icon">🚀</div>
          <div class="card-title">Introducción CALMÉCAC</div>
          <div class="card-desc">Visión general del sistema operativo e incubadora e-commerce de alto rendimiento.</div>
        </div>
        <div class="card-link">Ver presentación &rarr;</div>
      </a>
    </div>

    <footer>
      &copy; 2026 CALMÉCAC &mdash; Todos los derechos reservados.
    </footer>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
console.log('✅ Hub portal generado exitosamente en dist/index.html');
