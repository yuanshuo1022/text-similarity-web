import React from "react";
import Link from "next/link"
export function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="text-sm">
       <Link  href="https://beian.miit.gov.cn"> ICP备案号:赣ICP备2024022365号</Link>
        <p>© 2024 毕业设计. All rights reserved.</p>
      </div>
    </footer>
  );
}
