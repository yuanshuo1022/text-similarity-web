import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
export function NavBar() {
    return ((
      
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1
          className="text-4xl font-bold text-[#2d3748] border-b-4 border-[#2d3748] inline-block pb-2">
          文本相似度分析
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
                词语相似度查询
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
               类比推理
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/statis">
                模型分析
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/swap">
                清洗文本
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/swap">
                分词
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/swap">
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
            词语相似度查询
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="#">
            生词页面
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="#">
            统计页
          </Link>
          <Link className="text-2xl font-bold text-[#2d3748]" href="/swap">
            兑换
          </Link>
          <Button
            className="text-2xl font-bold text-[#f3f4f6] bg-[#2d3748] hover:bg-[#4a5568]">
            连接Metamask钱包
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
        width="24"
        height="24"
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
  
 
  