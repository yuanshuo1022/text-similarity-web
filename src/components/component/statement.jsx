import Image from 'next/image';
import { NavBar } from "./header";

export function Statement() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-[#f3f4f6] to-[#a1c9f1] text-[#2d3748] font-sans"
    >
      <NavBar />
      <div
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-b from-[#edf2f7] to-[#a1c9f1] dark:from-[#edf2f7] dark:to-[#a1c9f1]"
      >
        <h1 className="text-3xl font-bold mb-4 dark:text-white">声明</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          本网站仅供个人学习和研究使用，不得用于任何商业用途。如果您觉得本网站对您有所帮助，欢迎捐赠支持我们的工作。
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              alt="支付宝捐赠"
              className="w-32 h-32 mb-2"
              height="200"
              src="/static/alipay.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">捐赠用途：服务器维护费用</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="微信捐赠"
              className="w-32 h-32 mb-2"
              height="200"
              src="/static/wechat.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">捐赠用途：内容更新和优化</p>
          </div>
        </div>
      </div>
    </div>
  );
}
