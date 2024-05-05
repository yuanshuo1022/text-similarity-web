This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


npx create-next-app text-similarity-web    //创建前端项目
cd text-similarity-web   //进入项目目录
npm install   //安装依赖

python -m venv venv  //安装虚拟环境
venv\Scripts\activate  //激活虚拟环境
pip install flask   //安装flask


```
text-similarity-web
├─ .eslintrc.json
├─ README.md
├─ components.json
├─ jsconfig.json
├─ next.config.js
├─ postcss.config.js
├─ public
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ static
│     ├─ wechat.jpg
│     └─ alipay.jpg
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ layout.js
│  │  ├─ api
│  │  │  └─ api.js
│  │  ├─ favicon.svg
│  │  └─ globals.css
│  ├─ components
│  │  ├─ component
│  │  │  ├─ token-swap.jsx
│  │  │  ├─ gap-word.jsx
│  │  │  ├─ simple-chinese.jsx
│  │  │  ├─ text-similer.jsx
│  │  │  ├─ word-reasoning.jsx
│  │  │  ├─ text-cleaning.jsx
│  │  │  ├─ statement.jsx
│  │  │  ├─ footer.jsx
│  │  │  ├─ header.jsx
│  │  │  └─ statis.jsx
│  │  └─ ui
│  │     ├─ button.jsx
│  │     ├─ card.jsx
│  │     ├─ input.jsx
│  │     ├─ label.jsx
│  │     ├─ select.jsx
│  │     ├─ sheet.jsx
│  │     ├─ Dashboard.jsx
│  │     └─ scatterDiagram.jsx
│  ├─ lib
│  │  └─ utils.js
│  └─ pages
│     ├─ word-reason.js
│     ├─ _app.js
│     ├─ cleaning.js
│     ├─ gapword.js
│     ├─ index.js
│     ├─ simple.js
│     ├─ statis.js
│     ├─ swap.js
│     └─ statement.js
├─ tailwind.config.js
├─ .gitignore
├─ Dockerfile
├─ dockerfile.txt
└─ package.json

```