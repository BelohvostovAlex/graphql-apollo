import React, { useState } from "react"

type UseInput = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export const useInput = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue)

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return [value, handleValue]
}