# Portfólio — Mateus Vinicius

Portfólio pessoal responsivo, construído com **Next.js**, **TypeScript**, **Tailwind CSS** e **Lucide React**. Projeto estático, sem backend ou banco de dados, pronto para deploy na Vercel.

## Executar localmente

Requisitos: **Node.js 20.9 ou superior** e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Personalizar conteúdo

Todo o texto e os links estão em `src/data/portfolio.ts`:

- `siteConfig.linkedin` e `siteConfig.email` estão como `null`. Basta preencher com seu link e seu e-mail.
- `images.profile`, `images.ecomonitor`, `images.autodocpr` e `images.avancaraucaria` também estão como `null`.

Para adicionar as imagens:

1. Coloque os arquivos em `public/images/` com os nomes:
   - `profile.png`
   - `ecomonitor.png`
   - `autodocpr.png`
   - `avancaraucaria.png`
2. Em `src/data/portfolio.ts`, troque o `null` correspondente pelo caminho, por exemplo:

```ts
profile: "/images/profile.png",
```

Enquanto o caminho não é configurado, a interface exibe um placeholder elegante — sem imagens quebradas.

## Publicar na Vercel

1. Crie um repositório no GitHub e envie este projeto.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New → Project**.
3. Importe o repositório.
4. Mantenha o framework detectado como **Next.js** e o comando de build `npm run build`.
5. Clique em **Deploy**.

Não é necessário configurar variáveis de ambiente.

## Estrutura principal

```text
src/app/                 Página única, layout, metadados e estilos globais
src/components/          Cabeçalho, rodapé, cards e seções
src/data/portfolio.ts    Conteúdo editável do portfólio
public/images/           Pasta reservada para suas imagens
```
