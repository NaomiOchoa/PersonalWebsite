import React, { useEffect } from "react"
import { gsap } from "gsap"

export default function AboutPopup(props) {
  const { about, setAbout } = props
  const introTL = React.useRef(gsap.timeline())

  useEffect(() => {
    gsap.set("#about-me", {
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
      transformOrigin: "50%, 50%",
      x: "50%",
      y: "50%",
    })
    if (about) {
      introTL.current.to("#about-me", {
        duration: 2,
        scaleX: 1,
        scaleY: 1,
        opacity: 100,
      })
    }
  }, [about])

  const close = () => {
    gsap
      .timeline()

      .to(
        "#about-me",
        {
          duration: 1,
          scaleX: 0,
          scaleY: 0,
          opacity: 0,
        },
        "exit"
      )
  }

  return (
    <div
      id="about-me"
      onClick={() => {
        close()
        setAbout(false)
      }}
    >
      <img
        height="60%"
        width="40%"
        src="DSC00159_BW_small.jpg"
        alt="a photo of me"
      />
      <h1>About Me</h1>
      <p>Here are some facts about me.....</p>
    </div>
  )
}
