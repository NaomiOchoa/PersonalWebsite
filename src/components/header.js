import React, { useEffect } from "react"
import { gsap } from "gsap"
import scrollTo from "gatsby-plugin-smoothscroll"
import clsx from "clsx"

export default function Header(props) {
  const { headerPosition, setHeaderPosition, startAnimation } = props

  const loadTheRest = () => {
    setHeaderPosition("top")
  }

  const introTL = React.useRef(gsap.timeline())
  const N = React.useRef()
  const A = React.useRef()
  const O = React.useRef()
  const M = React.useRef()
  const I = React.useRef()
  const O2 = React.useRef()
  const C = React.useRef()
  const H = React.useRef()
  const O3 = React.useRef()
  const A2 = React.useRef()

  useEffect(() => {
    let letters = [
      N.current,
      A.current,
      O.current,
      M.current,
      I.current,
      O2.current,
      C.current,
      H.current,
      O3.current,
      A2.current,
    ]
    letters.forEach(x => {
      const length = x.getTotalLength()
      gsap.set(`.${x.id}`, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })
    // introTL.current.addLabel("draw")
    // introTL.current.to(
    //   ".N",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".A",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".O",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".M",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".I",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".O2",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".C",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".H",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".O3",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    // introTL.current.to(
    //   ".A2",
    //   {
    //     strokeDashoffset: 0,
    //   },
    //   "draw"
    // )
    introTL.current.add(draw())
    introTL.current.add(shrinkHeader())
    introTL.current.then(loadTheRest)
    startAnimation()
  }, [startAnimation, setHeaderPosition])

  const arrowHover = () => {
    gsap.timeline().to("#arrow", {
      y: -20,
    })
  }

  const arrowUnhover = () => {
    gsap.timeline().to("#arrow", {
      y: 0,
    })
  }

  const draw = () => {
    return gsap
      .timeline()
      .addLabel("draw")
      .to(
        ".N",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".A",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".O",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".M",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".I",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".O2",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".C",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".H",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".O3",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .to(
        ".A2",
        {
          strokeDashoffset: 0,
        },
        "draw"
      )
      .duration(3)
  }

  const shrinkHeader = () => {
    return (
      gsap
        .timeline()
        .addLabel("disappear")
        .to(
          ".title-info",
          {
            opacity: 0,
          },
          "disappear"
        )
        .to(
          ".deco",
          {
            opacity: 0,
          },
          "disappear"
        )
        // .to(
        //   "#arrow",
        //   {
        //     opacity: 0,
        //   },
        //   "disappear"
        // )
        .addLabel("shrink")
        .to(
          ".header",
          {
            height: "65px",
          },
          "shrink"
        )
        .to(
          "#Header-Img",
          {
            height: "150px",
          },
          "shrink"
        )
        .to(
          ".name-logo",
          {
            y: -150,
            x: -100,
          },

          "shrink"
        )
        .to(
          ".N",
          {
            strokeWidth: 0,
            fill: "white",
          },
          "shrink"
        )
    )
  }

  return (
    <div className={clsx("header", headerPosition === "top" && "top-header")}>
      <svg
        id="Header-Img"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366 768"
      >
        <g
          className={clsx("name-logo", headerPosition === "top" && "clickable")}
          onClick={() => scrollTo("#top")}
        >
          <rect
            x="111.21"
            y="162.11"
            fill="#006d77"
            width="1143.57"
            height="300.79"
          />
          <path
            ref={N}
            id="N"
            className="N letter"
            d="M268.68,347.11a3.48,3.48,0,0,0,1.54.37,2.31,2.31,0,0,0,1.7-.83,3,3,0,0,0,.77-2.12A12,12,0,0,0,271,339l-35.47-69.92a19.38,19.38,0,0,1-1-2.11,4.52,4.52,0,0,1-.23-1.57v-1.1a2.81,2.81,0,0,1,.46-1.93,2.12,2.12,0,0,1,1.54-.46h39.49q2.78,0,3.93,1.47t1.16,5V377.84q0,3.5-1.16,5t-3.93,1.47H256q-7.09,0-11.1-2.94t-8-10.86l-36.24-71.4a3.37,3.37,0,0,0-1.39-.36,2.55,2.55,0,0,0-1.78.82,2.87,2.87,0,0,0-.85,2.12,13.82,13.82,0,0,0,1.7,5.52l35.47,69.92a20.89,20.89,0,0,1,1,2.12,4.75,4.75,0,0,1,.23,1.56v1.11a3.29,3.29,0,0,1-.39,1.84c-.25.37-.79.55-1.62.55H193.57q-2.77,0-3.93-1.47t-1.16-5V282.89a26.27,26.27,0,0,0-.62-6.71,10.07,10.07,0,0,0-2.16-3.87,43.2,43.2,0,0,0-5.24-4.69,1.89,1.89,0,0,1-.77-1.66v-2.2a1.63,1.63,0,0,1,1.85-1.84h31.77q7.09,0,11.11,2.94t8,10.86Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={A}
            id="A"
            className="A letter"
            d="M357.83,386.49q-15.58,0-22.21-15.27-3.56,7.9-8.72,11.59a21.37,21.37,0,0,1-12.72,3.68q-10.65,0-17.12-6.26t-6.48-16.56q0-9,5.32-14.26t16.43-7.08q28.38-4.43,28.38-25.58a22.71,22.71,0,0,0-4.94-14.63Q330.84,296,324.05,296c-2.16,0-3.24.86-3.24,2.57a4,4,0,0,0,.46,1.84,13.76,13.76,0,0,1,10.65,4.6,16.92,16.92,0,0,1,4.16,11.78,18.26,18.26,0,0,1-5.94,14q-5.94,5.52-15.19,5.52-9.4,0-15-5.61t-5.55-14.81a23.46,23.46,0,0,1,10-19.78q10-7.46,26.53-7.45,19.74,0,30,11.4t10.25,33.49v23a12.64,12.64,0,0,0,.47,4.23,1.59,1.59,0,0,0,1.54,1.1,2.08,2.08,0,0,0,2-1.47,24.18,24.18,0,0,0,1.08-5.7,16.39,16.39,0,0,1,.62-3.78,1.23,1.23,0,0,1,1.23-.64h2.63c.61,0,1.05.43,1.31,1.29a16.75,16.75,0,0,1,.38,4.23q0,14.72-6.4,22.72T357.83,386.49ZM333,346.74a2.8,2.8,0,0,0-2.46-1.47q-2.62,0-2.62,3.68v11.78q0,3.67,2.62,3.68a2.8,2.8,0,0,0,2.46-1.47Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={O}
            id="O"
            className="O letter"
            d="M430.16,386.49q-21.75,0-33.08-12.51t-11.34-36.44q0-23.91,11.34-36.43t33.08-12.51q21.75,0,33.08,12.51t11.34,36.43q0,23.93-11.34,36.44T430.16,386.49Zm0-8.47q2.77,0,2.78-5V302q0-5-2.78-5t-2.78,5v71Q427.38,378,430.16,378Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={M}
            id="M"
            className="M letter"
            d="M500,290.8q7.55,0,12.1,3.22t6.25,10a28.28,28.28,0,0,1,9.48-11.41,23,23,0,0,1,13.19-4,20,20,0,0,1,12.19,3.77,22,22,0,0,1,7.55,10.95A25.3,25.3,0,0,1,570,292.46a23.88,23.88,0,0,1,13.34-3.86q10.8,0,16.43,7.72T605.36,319v59.43c0,2.09-.38,3.59-1.15,4.51s-2.14,1.38-4.09,1.38H573.9q-2.92,0-4.08-1.38c-.78-.92-1.16-2.42-1.16-4.51v-63.3a6.43,6.43,0,0,0-.77-3.31,2.41,2.41,0,0,0-2.16-1.29,2.7,2.7,0,0,0-2.62,1.48v66.42A7,7,0,0,1,562,382.9c-.77.92-2.14,1.38-4.09,1.38H531.64q-2.92,0-4.08-1.38c-.78-.92-1.16-2.42-1.16-4.51v-63.3a6.43,6.43,0,0,0-.77-3.31,2.41,2.41,0,0,0-2.16-1.29,2.7,2.7,0,0,0-2.62,1.48v66.42a7,7,0,0,1-1.16,4.51c-.77.92-2.14,1.38-4.09,1.38H489.38q-2.92,0-4.08-1.38a7,7,0,0,1-1.16-4.51V313.44c0-4.29-.52-7.58-1.54-9.85a16.36,16.36,0,0,0-5.71-6.35,3.9,3.9,0,0,1-1.31-1.19,2.76,2.76,0,0,1-.23-1.2v-2.21a1.63,1.63,0,0,1,1.85-1.84Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={I}
            id="I"
            className="I letter"
            d="M651.17,290.8c2,0,3.32.46,4.09,1.38a7,7,0,0,1,1.15,4.51V356.5a12.64,12.64,0,0,0,.47,4.23,1.59,1.59,0,0,0,1.54,1.1,1.93,1.93,0,0,0,1.93-1.29,29.61,29.61,0,0,0,1.15-5.88,16.39,16.39,0,0,1,.62-3.78,1.23,1.23,0,0,1,1.23-.64H666c.61,0,1,.43,1.31,1.29a17.77,17.77,0,0,1,.38,4.41q0,14.73-6.63,22.64t-19,7.91q-11.88,0-18.27-8t-6.41-22.9V313.44c0-4.29-.51-7.58-1.54-9.85a16.41,16.41,0,0,0-5.7-6.35,4.07,4.07,0,0,1-1.32-1.19,2.76,2.76,0,0,1-.23-1.2v-2.21a1.63,1.63,0,0,1,1.85-1.84ZM615.7,265q0-8.28,5.4-13.25t14.49-5q9.1,0,14.58,5T655.64,265a16.8,16.8,0,0,1-5.47,13.07q-5.48,5-14.58,5T621.1,278.2Q615.7,273.33,615.7,265Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={O2}
            id="O2"
            className="O2 letter"
            d="M758.05,387.41q-25.31,0-39.1-16.84T705.15,323q0-30.74,13.8-47.48t39.1-16.74q25.29,0,39.1,16.74T811,323q0,30.72-13.8,47.56T758.05,387.41Zm0-9.39q2.93,0,2.93-5V273.14q0-5-2.93-5c-2,0-2.93,1.66-2.93,5v99.92C755.12,376.37,756.09,378,758.05,378Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={C}
            id="C"
            className="C letter"
            d="M850.28,316.93a32.29,32.29,0,0,0,3.08,14.17,26.36,26.36,0,0,0,8.72,10.4,21.56,21.56,0,0,0,12.72,3.95A24.16,24.16,0,0,0,886,343a31.21,31.21,0,0,0,9.64-8.37,9.62,9.62,0,0,1,1.31-1.38,2,2,0,0,1,1.16-.28h2c1.14,0,1.7,1.23,1.7,3.68a58.26,58.26,0,0,1-5.32,25.12,44.36,44.36,0,0,1-15,18,38.08,38.08,0,0,1-22.21,6.72,39.61,39.61,0,0,1-21.43-6,41.5,41.5,0,0,1-15.12-17q-5.55-11-5.55-25.58a55.57,55.57,0,0,1,5.55-25.12,43.16,43.16,0,0,1,16-17.66,44.23,44.23,0,0,1,24-6.53A42.2,42.2,0,0,1,880,292a28.86,28.86,0,0,1,12.11,9.75,24.79,24.79,0,0,1,4.47,14.63q0,10.13-5.94,16.84a19.35,19.35,0,0,1-15.19,6.71,18.71,18.71,0,0,1-14.58-6.71,24,24,0,0,1-5.93-16.47A16.88,16.88,0,0,1,859.07,305a13.74,13.74,0,0,1,10.64-4.6,4,4,0,0,0,.46-1.84c0-1.71-1.08-2.57-3.23-2.57q-6.8,0-11.73,6.16A23,23,0,0,0,850.28,316.93Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={H}
            id="H"
            className="H letter"
            d="M909.35,274.61c0-4.29-.52-7.57-1.54-9.84a16.29,16.29,0,0,0-5.71-6.35,4,4,0,0,1-1.31-1.2,2.55,2.55,0,0,1-.23-1.19v-2.21a1.63,1.63,0,0,1,1.85-1.84h39.94c1.95,0,3.32.46,4.09,1.38a7,7,0,0,1,1.16,4.51v41.95q7.54-11.22,21-11.22,11.11,0,17,7.91T991.4,319v59.43a7,7,0,0,1-1.16,4.51c-.77.92-2.13,1.38-4.09,1.38H958.39q-2.92,0-4.08-1.38a7,7,0,0,1-1.16-4.51v-63.3a6.43,6.43,0,0,0-.77-3.31,2.41,2.41,0,0,0-2.16-1.29A2.71,2.71,0,0,0,947.6,312v66.42a7,7,0,0,1-1.16,4.51c-.77.92-2.14,1.38-4.09,1.38H914.59c-2,0-3.31-.46-4.09-1.38s-1.15-2.42-1.15-4.51Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={O3}
            id="O3"
            className="O3 letter"
            d="M1044.76,386.49q-21.75,0-33.08-12.51t-11.34-36.44q0-23.91,11.34-36.43t33.08-12.51q21.75,0,33.08,12.51t11.34,36.43q0,23.93-11.34,36.44T1044.76,386.49Zm0-8.47q2.77,0,2.78-5V302q0-5-2.78-5t-2.77,5v71Q1042,378,1044.76,378Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            ref={A2}
            id="A2"
            className="A2 letter"
            d="M1161.36,386.49q-15.58,0-22.21-15.27-3.56,7.9-8.71,11.59a21.42,21.42,0,0,1-12.73,3.68q-10.64,0-17.12-6.26t-6.47-16.56q0-9,5.32-14.26t16.42-7.08q28.38-4.43,28.38-25.58a22.71,22.71,0,0,0-4.94-14.63q-4.93-6.17-11.72-6.16c-2.16,0-3.24.86-3.24,2.57a4,4,0,0,0,.47,1.84,13.74,13.74,0,0,1,10.64,4.6,16.88,16.88,0,0,1,4.16,11.78,18.29,18.29,0,0,1-5.93,14q-5.94,5.52-15.2,5.52t-15-5.61Q1098,325,1098,315.83a23.44,23.44,0,0,1,10-19.78q10-7.46,26.52-7.45,19.74,0,30,11.4t10.26,33.49v23a12.72,12.72,0,0,0,.46,4.23,1.59,1.59,0,0,0,1.54,1.1,2.08,2.08,0,0,0,2-1.47,24.18,24.18,0,0,0,1.08-5.7,16.64,16.64,0,0,1,.61-3.78,1.24,1.24,0,0,1,1.24-.64h2.62c.62,0,1.05.43,1.31,1.29a16.19,16.19,0,0,1,.39,4.23q0,14.72-6.4,22.72T1161.36,386.49Zm-24.83-39.75a2.81,2.81,0,0,0-2.47-1.47q-2.62,0-2.62,3.68v11.78q0,3.67,2.62,3.68a2.81,2.81,0,0,0,2.47-1.47Z"
            transform="translate(0.37 -0.05)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </g>
        <g className="title-info">
          <path
            d="M474.22,498.66a14.1,14.1,0,0,1-5.26-2.9,2.21,2.21,0,0,1-.72-1.68,1.88,1.88,0,0,1,.39-1.18,1.13,1.13,0,0,1,.91-.5,2.28,2.28,0,0,1,1.34.53,16.21,16.21,0,0,0,10.18,3.45,10.8,10.8,0,0,0,6.33-1.58,5.23,5.23,0,0,0,2.21-4.51,3.65,3.65,0,0,0-1.05-2.72,7.74,7.74,0,0,0-2.79-1.65,41.09,41.09,0,0,0-4.65-1.3,45.74,45.74,0,0,1-6.46-1.92,10,10,0,0,1-4.08-2.88,7.39,7.39,0,0,1-1.56-4.89,8.73,8.73,0,0,1,1.56-5.12,10.12,10.12,0,0,1,4.37-3.45,15.83,15.83,0,0,1,6.41-1.23,18.56,18.56,0,0,1,6.26,1,13.1,13.1,0,0,1,4.87,2.95,2.34,2.34,0,0,1,.77,1.68,1.89,1.89,0,0,1-.38,1.17,1.13,1.13,0,0,1-.92.51,3,3,0,0,1-1.39-.53,16.22,16.22,0,0,0-4.37-2.69,13.65,13.65,0,0,0-4.84-.77,10.18,10.18,0,0,0-6.2,1.66,5.45,5.45,0,0,0-2.2,4.63,4.25,4.25,0,0,0,1.94,3.82,19.61,19.61,0,0,0,6,2.23c2.91.7,5.19,1.35,6.86,1.94a10.3,10.3,0,0,1,4.15,2.67,6.66,6.66,0,0,1,1.66,4.75,8.29,8.29,0,0,1-1.56,5,10.18,10.18,0,0,1-4.39,3.36,16.49,16.49,0,0,1-6.48,1.2A21.93,21.93,0,0,1,474.22,498.66Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M503.21,498.21a10,10,0,0,1-3.89-4.25,15.68,15.68,0,0,1,0-12.82,10,10,0,0,1,3.89-4.25,11.26,11.26,0,0,1,5.83-1.48,11.42,11.42,0,0,1,5.86,1.48,9.94,9.94,0,0,1,3.91,4.25,15.68,15.68,0,0,1,0,12.82,9.94,9.94,0,0,1-3.91,4.25,11.42,11.42,0,0,1-5.86,1.48A11.26,11.26,0,0,1,503.21,498.21Zm11.14-4q1.85-2.28,1.84-6.65a10.27,10.27,0,0,0-1.87-6.6,7.15,7.15,0,0,0-10.56,0,10.27,10.27,0,0,0-1.87,6.6c0,2.88.61,5.09,1.85,6.62a7.28,7.28,0,0,0,10.61,0Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M532.42,470.2a6.07,6.07,0,0,0-1.3,4.25V476h5.33a1.74,1.74,0,0,1,1.25.43,1.61,1.61,0,0,1,.43,1.16,1.42,1.42,0,0,1-.43,1.1,1.82,1.82,0,0,1-1.25.38h-5.33v18.63a1.79,1.79,0,0,1-.55,1.41,2.15,2.15,0,0,1-2.78,0,1.79,1.79,0,0,1-.56-1.41V479.05H524a1.83,1.83,0,0,1-1.27-.4,1.37,1.37,0,0,1-.46-1.08,1.51,1.51,0,0,1,.46-1.16A1.79,1.79,0,0,1,524,476h3.21v-.86a10,10,0,0,1,2.16-6.79,8.65,8.65,0,0,1,6.19-2.76l1.25-.1a3.22,3.22,0,0,1,1.8.24,1.28,1.28,0,0,1,.56,1.2c0,.93-.57,1.46-1.69,1.58l-1.24.1A5.52,5.52,0,0,0,532.42,470.2Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M553.06,498.06a1.39,1.39,0,0,1-.6,1.23,2.85,2.85,0,0,1-1.8.31l-1.3-.1q-3.84-.28-5.66-2.3t-1.83-6.1V479.05h-3.21a1.87,1.87,0,0,1-1.28-.4,1.4,1.4,0,0,1-.45-1.08,1.54,1.54,0,0,1,.45-1.16,1.83,1.83,0,0,1,1.28-.43h3.21v-5.42a1.89,1.89,0,0,1,.53-1.42,2,2,0,0,1,1.44-.5,1.94,1.94,0,0,1,1.39.5,1.89,1.89,0,0,1,.53,1.42V476h5.33a1.73,1.73,0,0,1,1.22.43,1.51,1.51,0,0,1,.46,1.16,1.37,1.37,0,0,1-.46,1.08,1.76,1.76,0,0,1-1.22.4h-5.33v12.24a5.55,5.55,0,0,0,1.08,3.82,4.66,4.66,0,0,0,3.24,1.32l1.3.1Q553.06,496.67,553.06,498.06Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M590.74,475.6a2,2,0,0,1,1.29.48,1.49,1.49,0,0,1,.58,1.2,2,2,0,0,1-.15.72l-8,20.16a2.44,2.44,0,0,1-.84,1,2.21,2.21,0,0,1-1.23.36,2.09,2.09,0,0,1-1.17-.36,2.29,2.29,0,0,1-.84-1l-6.63-16.85-6.57,16.85a2,2,0,0,1-.82,1,2.3,2.3,0,0,1-1.25.36,2.32,2.32,0,0,1-2.06-1.34l-8-20.11a1.87,1.87,0,0,1-.14-.68,1.6,1.6,0,0,1,.64-1.29,2.24,2.24,0,0,1,1.42-.53,1.66,1.66,0,0,1,1.63,1.15l6.58,17.71L572,476.85a2.16,2.16,0,0,1,.79-1,1.84,1.84,0,0,1,1.08-.34,2,2,0,0,1,1.13.34,2,2,0,0,1,.74,1l6.77,17.52,6.62-17.62A1.64,1.64,0,0,1,590.74,475.6Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M615.5,484.62v13.06a1.91,1.91,0,0,1-.5,1.39,1.81,1.81,0,0,1-1.37.53,1.82,1.82,0,0,1-1.92-1.92v-2.31a6.9,6.9,0,0,1-2.78,3.2,8.23,8.23,0,0,1-4.32,1.12,9.38,9.38,0,0,1-4.15-.91,7.33,7.33,0,0,1-3-2.54,6.27,6.27,0,0,1-1.11-3.6,5.85,5.85,0,0,1,1.35-4.11,8.13,8.13,0,0,1,4.41-2.11,43.83,43.83,0,0,1,8.55-.65h1.05v-1.58a6.31,6.31,0,0,0-1.17-4.22,4.83,4.83,0,0,0-3.82-1.35,14,14,0,0,0-6.62,1.78,4.45,4.45,0,0,1-1.83.81,1.23,1.23,0,0,1-1-.43,1.62,1.62,0,0,1-.38-1.1,1.79,1.79,0,0,1,.41-1.18,4.79,4.79,0,0,1,1.32-1,15.54,15.54,0,0,1,3.81-1.51,16.87,16.87,0,0,1,4.25-.55Q615.51,475.41,615.5,484.62Zm-5.64,10.06a7,7,0,0,0,1.85-5v-1.39h-.86a42.88,42.88,0,0,0-6.43.36,6.27,6.27,0,0,0-3.15,1.2,3.15,3.15,0,0,0-.93,2.47,4,4,0,0,0,1.36,3.1,5,5,0,0,0,3.44,1.22A6.23,6.23,0,0,0,609.86,494.68Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M636.19,477.13a1.71,1.71,0,0,1-.43,1.23,2.29,2.29,0,0,1-1.49.55l-1.44.14a6.52,6.52,0,0,0-4.77,2.28A7.38,7.38,0,0,0,626.5,486v11.67a1.86,1.86,0,0,1-.53,1.44,2,2,0,0,1-1.39.48,2,2,0,0,1-1.42-.51,1.79,1.79,0,0,1-.55-1.41V477.42a1.77,1.77,0,0,1,.57-1.41,2,2,0,0,1,1.4-.51,1.78,1.78,0,0,1,1.82,1.87v2.69a7.18,7.18,0,0,1,2.86-3.21,9.6,9.6,0,0,1,4.24-1.3l.68-.05C635.52,475.41,636.19,476,636.19,477.13Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M658.08,494.37a1.55,1.55,0,0,1,.38,1.1c0,.8-.56,1.54-1.68,2.21a14.86,14.86,0,0,1-7.39,2,11.46,11.46,0,0,1-8.57-3.21q-3.14-3.23-3.14-8.88a13.91,13.91,0,0,1,1.39-6.36,10.44,10.44,0,0,1,3.91-4.3,10.86,10.86,0,0,1,5.74-1.53,9.29,9.29,0,0,1,7.25,3,11.6,11.6,0,0,1,2.69,8.07,2,2,0,0,1-.39,1.39,1.58,1.58,0,0,1-1.25.43H641.57q.43,8.25,7.82,8.26a9.1,9.1,0,0,0,3.22-.51,20.44,20.44,0,0,0,2.88-1.37,4.54,4.54,0,0,1,1.68-.72A1.19,1.19,0,0,1,658.08,494.37Zm-14.23-14a8.83,8.83,0,0,0-2.19,5.42h13.59a8.33,8.33,0,0,0-1.78-5.44,5.94,5.94,0,0,0-4.7-1.9A6.51,6.51,0,0,0,643.85,480.35Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M677.88,498.83a1.83,1.83,0,0,1-.55-1.39v-30a1.82,1.82,0,0,1,.55-1.39,2,2,0,0,1,1.46-.53h18a1.93,1.93,0,0,1,1.34.43,1.74,1.74,0,0,1,0,2.4,1.93,1.93,0,0,1-1.34.43H681.22v11.76h15.12a2,2,0,0,1,1.34.43,1.54,1.54,0,0,1,.48,1.2,1.51,1.51,0,0,1-.48,1.2,1.93,1.93,0,0,1-1.34.44H681.22v12.28H697.3a2,2,0,0,1,1.34.41,1.52,1.52,0,0,1,.48,1.23,1.54,1.54,0,0,1-.48,1.2,2,2,0,0,1-1.34.43h-18A2,2,0,0,1,677.88,498.83Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M724.85,484.67v13a1.77,1.77,0,0,1-1.92,1.92,2,2,0,0,1-1.44-.51,1.81,1.81,0,0,1-.53-1.41V484.91a7.27,7.27,0,0,0-1.27-4.75,5.07,5.07,0,0,0-4.06-1.49,6.83,6.83,0,0,0-5.13,2,7.26,7.26,0,0,0-1.92,5.33v11.71a1.77,1.77,0,0,1-1.92,1.92,2,2,0,0,1-1.45-.51,1.84,1.84,0,0,1-.52-1.41V477.42a1.89,1.89,0,0,1,.52-1.39,2,2,0,0,1,1.45-.53A1.79,1.79,0,0,1,708,476a1.85,1.85,0,0,1,.51,1.34v2.45a7.9,7.9,0,0,1,3.21-3.29,9.7,9.7,0,0,1,4.71-1.12Q724.85,475.41,724.85,484.67Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M752.35,476a1.89,1.89,0,0,1,.53,1.39v20.35q0,5.24-2.69,7.9c-1.79,1.78-4.45,2.66-8,2.66a16.58,16.58,0,0,1-8.54-2c-1.15-.64-1.73-1.38-1.73-2.21a1.64,1.64,0,0,1,.36-1.1,1.16,1.16,0,0,1,.94-.44,4.65,4.65,0,0,1,1.72.68,22.59,22.59,0,0,0,3.32,1.39,12.68,12.68,0,0,0,3.88.53,6.8,6.8,0,0,0,5.14-1.8,7.33,7.33,0,0,0,1.73-5.26V494a7.31,7.31,0,0,1-3.1,3.46,9.69,9.69,0,0,1-4.92,1.2,10.26,10.26,0,0,1-5.44-1.44,9.71,9.71,0,0,1-3.7-4.08,14.73,14.73,0,0,1,0-12.19,9.71,9.71,0,0,1,3.7-4.08,10.26,10.26,0,0,1,5.44-1.44,9.48,9.48,0,0,1,4.85,1.2A7.62,7.62,0,0,1,749,480v-2.59a1.92,1.92,0,0,1,.51-1.39,1.85,1.85,0,0,1,1.41-.53A2,2,0,0,1,752.35,476Zm-5.28,17.16a10.84,10.84,0,0,0,0-12.29,6.56,6.56,0,0,0-5.3-2.23,6.71,6.71,0,0,0-5.35,2.23,10.7,10.7,0,0,0,0,12.29,6.71,6.71,0,0,0,5.35,2.23A6.59,6.59,0,0,0,747.07,493.19Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M760.17,469.79a2.31,2.31,0,0,1-.71-1.78,2.23,2.23,0,0,1,.71-1.72,2.93,2.93,0,0,1,3.75,0,2.23,2.23,0,0,1,.72,1.72,2.32,2.32,0,0,1-.72,1.78,3,3,0,0,1-3.75,0Zm.46,29.3a1.79,1.79,0,0,1-.55-1.41V477.42a1.79,1.79,0,0,1,.55-1.41,2,2,0,0,1,1.42-.51,1.92,1.92,0,0,1,1.39.51,1.85,1.85,0,0,1,.53,1.41v20.26a1.86,1.86,0,0,1-.53,1.44,2,2,0,0,1-1.39.48A2,2,0,0,1,760.63,499.09Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M791.37,484.67v13a1.87,1.87,0,0,1-.5,1.41,1.91,1.91,0,0,1-1.42.51,2,2,0,0,1-1.44-.51,1.84,1.84,0,0,1-.52-1.41V484.91q0-3.27-1.28-4.75a5,5,0,0,0-4.05-1.49,6.86,6.86,0,0,0-5.14,2A7.3,7.3,0,0,0,775.1,486v11.71a1.75,1.75,0,0,1-1.92,1.92,2,2,0,0,1-1.44-.51,1.85,1.85,0,0,1-.53-1.41V477.42a1.89,1.89,0,0,1,.53-1.39,2,2,0,0,1,1.44-.53,1.81,1.81,0,0,1,1.37.53,1.84,1.84,0,0,1,.5,1.34v2.45a7.92,7.92,0,0,1,3.22-3.29,9.66,9.66,0,0,1,4.7-1.12Q791.37,475.41,791.37,484.67Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M817.49,494.37a1.6,1.6,0,0,1,.38,1.1c0,.8-.56,1.54-1.68,2.21a14.73,14.73,0,0,1-3.65,1.51,14.54,14.54,0,0,1-3.74.5,11.45,11.45,0,0,1-8.57-3.21q-3.15-3.23-3.14-8.88a13.91,13.91,0,0,1,1.39-6.36,10.44,10.44,0,0,1,3.91-4.3,10.83,10.83,0,0,1,5.74-1.53,9.27,9.27,0,0,1,7.24,3,11.56,11.56,0,0,1,2.69,8.07,2.1,2.1,0,0,1-.38,1.39,1.59,1.59,0,0,1-1.25.43H801q.43,8.25,7.83,8.26A9,9,0,0,0,812,496a19.44,19.44,0,0,0,2.88-1.37,4.68,4.68,0,0,1,1.68-.72A1.19,1.19,0,0,1,817.49,494.37Zm-14.24-14a8.76,8.76,0,0,0-2.18,5.42h13.58a8.28,8.28,0,0,0-1.77-5.44,6,6,0,0,0-4.71-1.9A6.54,6.54,0,0,0,803.25,480.35Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M842.78,494.37a1.56,1.56,0,0,1,.39,1.1c0,.8-.56,1.54-1.68,2.21a14.89,14.89,0,0,1-3.65,1.51,14.55,14.55,0,0,1-3.75.5,11.42,11.42,0,0,1-8.56-3.21q-3.15-3.23-3.15-8.88a13.91,13.91,0,0,1,1.39-6.36,10.46,10.46,0,0,1,3.92-4.3,10.82,10.82,0,0,1,5.73-1.53,9.29,9.29,0,0,1,7.25,3,11.6,11.6,0,0,1,2.69,8.07,2,2,0,0,1-.39,1.39,1.57,1.57,0,0,1-1.24.43H826.27q.43,8.25,7.82,8.26a9.1,9.1,0,0,0,3.22-.51,19.44,19.44,0,0,0,2.88-1.37,4.54,4.54,0,0,1,1.68-.72A1.17,1.17,0,0,1,842.78,494.37Zm-14.23-14a8.76,8.76,0,0,0-2.18,5.42H840a8.33,8.33,0,0,0-1.78-5.44,5.93,5.93,0,0,0-4.7-1.9A6.51,6.51,0,0,0,828.55,480.35Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
          <path
            d="M862.65,477.13a1.71,1.71,0,0,1-.43,1.23,2.29,2.29,0,0,1-1.49.55l-1.44.14a6.52,6.52,0,0,0-4.77,2.28A7.38,7.38,0,0,0,853,486v11.67a1.86,1.86,0,0,1-.53,1.44,2,2,0,0,1-1.39.48,2,2,0,0,1-1.42-.51,1.79,1.79,0,0,1-.55-1.41V477.42a1.74,1.74,0,0,1,.58-1.41,2,2,0,0,1,1.39-.51,1.78,1.78,0,0,1,1.29.51,1.76,1.76,0,0,1,.53,1.36v2.69a7.24,7.24,0,0,1,2.86-3.21,9.64,9.64,0,0,1,4.25-1.3l.67-.05C862,475.41,862.65,476,862.65,477.13Z"
            transform="translate(0.37 -0.05)"
            fill="#fff"
          />
        </g>
        <rect
          className="deco"
          x="82.69"
          y="132.28"
          width="1200.62"
          height="503.43"
          fill="none"
          stroke="#83c5be"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <rect
          className="deco"
          x="111.21"
          y="162.11"
          width="1143.57"
          height="443.79"
          fill="none"
          stroke="#ffddd2"
          strokeMiterlimit="10"
          strokeWidth="4"
        />

        {/* <g
          onMouseEnter={() => {
            arrowHover()
          }}
          onMouseLeave={() => {
            arrowUnhover()
          }}
          onFocus={() => {
            arrowHover()
          }}
          onBlur={() => {
            arrowUnhover()
          }}
          onClick={() => {
            shrinkHeader()
            props.startAnimation()
            setHeaderPosition("top")
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              shrinkHeader()
              props.startAnimation()
              setHeaderPosition("top")
            }
          }}
          id="arrow"
          className="clickable hover-arrow"
          tabIndex="0"
        >
          <rect
            x="594.37"
            y="680.95"
            width="178"
            height="87"
            fill="#006d77"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0"
          />
          <polyline
            points="738.87 737.96 684.51 700.5 682.23 700.83 627.87 738.29"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </g> */}
      </svg>
    </div>
  )
}
