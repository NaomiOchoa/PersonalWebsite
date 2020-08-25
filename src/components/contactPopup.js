import React, { useEffect } from "react"
import { gsap } from "gsap"

export default function ContactPopup(props) {
  const { contact } = props
  const introTL = React.useRef(gsap.timeline())

  useEffect(() => {
    gsap.set("#contact-form", {
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
      transformOrigin: "50%, 50%",
      x: "50%",
      y: "50%",
    })
    gsap.set("#envelope-image", {
      transformOrigin: "50%, 50%",
      y: 75,
    })
    if (contact) {
      introTL.current.to("#contact-form", {
        duration: 2,
        scaleX: 1,
        scaleY: 1,
        opacity: 100,
        delay: 8,
      })
    }
  }, [contact])

  const sendMessage = () => {
    gsap
      .timeline()
      .to("#envelope-image", {
        rotation: 360,
      })
      .addLabel("exit")
      .to(
        "#envelope-image",
        {
          rotation: 0,
        },
        "exit"
      )
      .to(
        "#contact-form",
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
    <div id="contact-form">
      <h1>Want to grab (virtual) coffee?</h1>
      <h3>Send me a note!</h3>
      <a href="mailto:naomi.m.ochoa@gmail.com">
        <svg
          id="envelope"
          class="clickable"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 206 306"
          onClick={() => sendMessage()}
        >
          <g id="envelope-image">
            <rect
              x="1.5"
              y="1.5"
              width="203"
              height="128"
              rx="13.87"
              fill="#fff"
            />
            <path
              d="M838.63,353A12.39,12.39,0,0,1,851,365.37V465.63A12.39,12.39,0,0,1,838.63,478H663.37A12.39,12.39,0,0,1,651,465.63V365.37A12.39,12.39,0,0,1,663.37,353H838.63m0-3H663.37A15.37,15.37,0,0,0,648,365.37V465.63A15.37,15.37,0,0,0,663.37,481H838.63A15.37,15.37,0,0,0,854,465.63V365.37A15.37,15.37,0,0,0,838.63,350Z"
              transform="translate(-648 -350)"
            />
            <path
              d="M751,427.49a8.73,8.73,0,0,1-4.57-1.18L649.5,364.55V359.5c0-4.33,6.35-8,13.87-8H838.63c7.52,0,13.87,3.67,13.87,8v5.05l-96.93,61.76A8.73,8.73,0,0,1,751,427.49Z"
              transform="translate(-648 -350)"
              fill="#fff"
            />
            <path
              d="M838.63,353c7.29,0,12.37,3.43,12.37,6.5v4.23l-96.24,61.32a8,8,0,0,1-7.52,0L651,363.73V359.5c0-3.07,5.08-6.5,12.37-6.5H838.63m0-3H663.37c-8.49,0-15.37,4.26-15.37,9.5v5.87l97.63,62.21a10.93,10.93,0,0,0,10.74,0L854,365.37V359.5c0-5.24-6.88-9.5-15.37-9.5Z"
              transform="translate(-648 -350)"
            />
          </g>
        </svg>
      </a>
    </div>
  )
}
