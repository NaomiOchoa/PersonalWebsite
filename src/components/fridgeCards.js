import React, { useEffect } from "react"
import { gsap } from "gsap"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Cards(props) {
  useEffect(() => {
    gsap.set("#Photo", {
      transformOrigin: "30% 50%",
    })
    gsap.set("#Polishd", {
      transformOrigin: "50% 50%",
    })
  }, [])

  const hoverEnter = id => {
    gsap
      .timeline()
      .to(id, {
        rotation: -25,
        ease: "sine.out",
      })
      .duration(0.5)
  }

  const hoverLeave = id => {
    gsap
      .timeline()
      .to(id, {
        rotation: 0,
        ease: "elastic.out",
      })
      .duration(0.5)
  }

  return (
    <React.Fragment>
      <g
        id="Photo"
        className="interact clickable"
        onMouseEnter={() => {
          hoverEnter("#Photo")
        }}
        onMouseLeave={() => hoverLeave("#Photo")}
        onClick={() => {
          scrollTo("#about-me")
        }}
      >
        <rect
          x="1040.74"
          y="167.98"
          width="45.27"
          height="58.86"
          transform="translate(-51.14 30.69) rotate(-3.53)"
          fill="#ccc"
          opacity="0.8"
        />
        <rect
          x="1039.27"
          y="166.71"
          width="45.27"
          height="58.86"
          transform="translate(-51.07 30.6) rotate(-3.53)"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="0.5"
        />
        <g>
          <g clipPath="url(#clip-path-2)">
            <image
              width="6000"
              height="4000"
              transform="translate(1000.12 136.67) rotate(-3.53) scale(0.0115)"
              href="DSC00159_BW_small.jpg"
            />
          </g>
          <rect
            x="1042.51"
            y="171.01"
            width="38.49"
            height="45.52"
            transform="translate(-50.92 30.58) rotate(-3.53)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
        </g>
        <circle
          cx="1022.37"
          cy="129.55"
          r="7.5"
          fill="#ffddd2"
          stroke="#e29578"
          strokeMiterlimit="10"
        />
      </g>
      <g
        id="Polishd"
        className="interact clickable"
        onMouseEnter={() => {
          hoverEnter("#Polishd")
        }}
        onMouseLeave={() => hoverLeave("#Polishd")}
        onClick={() => scrollTo("#projects")}
      >
        <rect
          x="1144.4"
          y="135.61"
          width="63.07"
          height="38.53"
          transform="translate(-23.79 -133.63) rotate(4.83)"
          fill="#ccc"
          opacity="0.8"
        />
        <rect
          x="1143.27"
          y="134.02"
          width="63.07"
          height="38.53"
          transform="translate(-23.93 -133.54) rotate(4.83)"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="0.5"
        />
        <text
          transform="matrix(1, 0.08, -0.08, 1, 1106.15, 120.93)"
          fontSize="15"
          fontFamily="Megrim, sans-serif"
        >
          Polish’d
        </text>
        <circle
          cx="1129.22"
          cy="98.54"
          r="7.5"
          fill="#83c5be"
          stroke="#006d77"
          strokeMiterlimit="10"
        />
      </g>
    </React.Fragment>
  )
}
