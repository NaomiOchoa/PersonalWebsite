import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState()

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    setWindowDimensions(getWindowDimensions())

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
