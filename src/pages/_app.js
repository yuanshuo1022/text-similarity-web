// pages/_app.js
import '../app/globals.css'; // 引入全局样式文件

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
