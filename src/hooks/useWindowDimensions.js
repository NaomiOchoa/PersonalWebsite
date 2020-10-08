import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: null,
    width: null,
  })

  useEffect(() => {
    function getWindowDimensions() {
      if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window
        return {
          width,
          height,
        }
      }
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    setWindowDimensions(getWindowDimensions())

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
