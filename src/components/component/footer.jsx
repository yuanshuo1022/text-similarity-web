import React from "react";
import Link from "next/link"
export function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="text-sm">
       <Link  href="https://www.baidu.com/"> ICP备案号：Your ICP备案号</Link>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
