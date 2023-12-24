// import { useState } from "react"

export function Square({ value, onSquareClick }) {

  return <>
    <button
      className="square shadow border-r10"
      onClick={onSquareClick}
      data-value={value}
    >
    </button>
  </>
} 