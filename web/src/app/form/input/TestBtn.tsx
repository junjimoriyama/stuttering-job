'use client'

import React from 'react'

const TestBtn = () => {

  const handleTest = () => {
    localStorage.setItem("age", "30代")
  }
  return (
    <button 
    className="testBtn"
    onClick={() => handleTest()}
    >
      test
    </button>
  )
}

export default TestBtn