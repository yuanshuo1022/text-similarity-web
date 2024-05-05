
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import EchartsDashboard from "@/components/ui/scatterDiagram"
import {NavBar} from "./header"
import React, { useState } from 'react';
import axios from 'axios';
import EchartsScatter3D  from "@/components/ui/scatterDiagram"
export function WordVectorAnalysis() {

  return (
    (<div
      key="1"
      className="flex flex-col min-h-screen p-4 md:p-8 bg-gradient-to-r from-[#f3f4f6] to-[#a1c9f1] text-[#2d3748] font-sans">
     <NavBar />
     <div className="flex flex-col md:grid md:grid-cols-1 gap-1">
    <EchartsScatter3D/>
       </div>
    </div>)
  );

  };

 




function MicroscopeIcon(props) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}