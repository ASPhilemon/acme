"use client"

import { useState } from "react"

export function Test(){
  const [a, setA] = useState(7)
  return(
    <h1 onClick={()=>setA(a+1)} >TEST {a}</h1>
  )
}