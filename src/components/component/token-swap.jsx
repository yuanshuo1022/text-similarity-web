/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SmwCfeT2XKP
 */

import {NavBar} from "./header"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TokenSwap() {
  return (
    (  <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#edf2f7] to-[#a1c9f1] dark:from-[#edf2f7] dark:to-[#a1c9f1]">
    <NavBar />
    <main className="flex-1 py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-[#edf2f7] to-[#a1c9f1] rounded-lg shadow-md p-6 dark:from-[#edf2f7] dark:to-[#a1c9f1]">
          <h1 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-200">代币兑换</h1>
          <form className="space-y-4 mt-4">
            <div>
              <Label htmlFor="fromToken">USDT</Label>
              <Input
                className="dark:bg-blue-700 dark:text-blue-100"
                id="fromToken"
                placeholder="输入USDT数量"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="toToken">MIS</Label>
              <Input
                className="dark:bg-blue-700 dark:text-blue-100"
                id="toToken"
                placeholder="输入MIS数量"
                type="text"
              />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-300 dark:hover:bg-blue-200">
             兑换
            </Button>
          </form>
        </div>
      </main>
      <footer
        className="bg-blue-100 dark:bg-blue-800 py-4 px-6 text-center text-blue-600 dark:text-blue-200">
        <p>文本相似度 © 2024</p>
        <p>Status: Online</p>
      </footer>
    </div>)
  );
}


function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}