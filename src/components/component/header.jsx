import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
export function NavBar() {
    return ((
      
        <header className="flex flex-col md:flex-row justify-between items-left mb-6">
        <h1
          className="text-4xl font-bold  pb-2"> 
          {/* text-[#2d3748] border-b-4 border-[#2d3748] inline-block */}
           <AITextAnalysisLogo/>
        </h1>
        <nav className="md:hidden flex items-center">
        <Sheet>
        <div className="flex justify-end">
        <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">菜单栏</span>
            </Button>
        </SheetTrigger>
        </div>

          <SheetContent side="left" className="bg-gradient-to-b from-[#edf2f7] to-[#a1c9f1] dark:from-[#edf2f7] dark:to-[#a1c9f1]">
          <Button className="text-2xl font-bold text-[#f3f4f6] bg-[#2d3748] hover:bg-[#4a5568]  mt-4">
            连接钱包
          </Button>
            {/* <Link href="#">
              <HomeIcon className="h-6 w-6" />
              <span className="sr-only">首页</span>
            </Link> */}
            <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                首页
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                词语相似
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
               类比推理
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/statis">
                模型分析
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/cleaning">
                清洗文本
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/gapword">
                分词
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/simple">
                繁简转换
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/swap">
                兑换
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="ml-auto">
          
        </div>
      </nav>
        <nav
          className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
          <Link className="text-2xl font-bold text-[#2d3748]" href="/">
            首页
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="#">
            词语相似
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="#">
            类比推理
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/statis">
            模型分析
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/cleaning">
            清洗文本
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/gapword">
            分词
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/simple">
            繁简转换
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/swap">
            兑换
          </Link>
          <Button
            className="text-2xl font-bold text-[#f3f4f6] bg-[#2d3748] hover:bg-[#4a5568]">
            连接钱包
          </Button>
        </nav>
      </header>)
    )
}

function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }

  
function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
 
  function AITextAnalysisLogo(props) {
    // return (
    //   <svg xmlns="http://www.w3.org/2000/svg" width="140" height="60" viewBox="0 0 200 100">

    //   {/* <!-- 圆形 --> */}
    //   <circle cx="100" cy="50" r="30" stroke="black" strokeWidth="2" fill="transparent"/>
    
    //   {/* <!-- 镜像的“词”字 --> */}
    //   <text x="100" y="50" fontFamily="Arial" fontSize="20" textAnchor="middle" dominantBaseline="central" transform="scale(-1,1) translate(-200, 0)" >词</text>
    
    //   {/* <!-- 缩小的箭头 --> */}
    //   <line x1="90" y1="35" x2="110" y2="35" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    
    //   {/* <!-- 定义箭头末端样式 --> */}
    //   <defs>
    //     <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="0" refY="1.75" orient="auto">
    //       <polygon points="0 0, 6 1.75, 0 3.5" fill="black"/>
    //     </marker>
    //   </defs>
    
    // </svg>
    
    
    // );
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 200 100">
  
        {/* 渐变蓝色背景 */}
        <rect x="0" y="0" width="200" height="100" fill="url(#gradient)" />
  
        {/* 圆形 */}
        <circle cx="100" cy="50" r="30" stroke="black" strokeWidth="2" fill="transparent"/>
  
        {/* 镜像的“词”字 */}
        <text x="100" y="50" fontFamily="Arial" fontSize="20" textAnchor="middle" dominantBaseline="central" transform="scale(-1,1) translate(-200, 0)">词</text>
  
        {/* 缩小的箭头 */}
        <line x1="90" y1="35" x2="110" y2="35" stroke="black" strokeWidth="1" markerEnd="url(#arrowhead)"/>
  
        {/* 定义箭头末端样式 */}
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="0" refY="1.75" orient="auto">
            <polygon points="0 0, 6 1.75, 0 3.5" fill="black"/>
          </marker>
  
          {/* 定义线性渐变 */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "#a1c9f1", stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: "#004CBF", stopOpacity: 1}} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  
  
  