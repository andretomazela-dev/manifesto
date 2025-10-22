# Deploy rápido sem Vercel (Netlify Drop ou Cloudflare Pages)

## Opção A) Netlify Drop (mais rápido — sem conta)
1. No seu computador:
   npm install
   npm run build
   # vai gerar a pasta "out/"
2. Acesse: https://app.netlify.com/drop
3. Arraste a pasta "out/" para a página.
4. Pronto: você ganha um subdomínio *.netlify.app. Depois dá para apontar seu domínio.

## Opção B) Netlify conectado ao GitHub
- Já incluí este arquivo netlify.toml (build -> out).
- Conecte o repositório no Netlify e confirme:
  build command: npm run build
  publish dir: out

## Opção C) Cloudflare Pages
- Conecte o repositório, escolha "Next.js", tudo auto.
- Publish dir: out (se usar export), ou deixe o preset do Next.

## Observação
- Este projeto usa apenas conteúdo estático + Formspree. Com output:'export', tudo serve como site estático.
