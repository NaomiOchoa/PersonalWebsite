import React, { useEffect } from "react"
import { gsap } from "gsap"

export default function Cards(props) {
  const { setAbout } = props

  useEffect(() => {
    gsap.set("#Scribby", {
      transformOrigin: "50% 50%",
    })
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
        id="Scribby"
        className="interact"
        onMouseEnter={() => {
          hoverEnter("#Scribby")
        }}
        onMouseLeave={() => hoverLeave("#Scribby")}
      >
        <rect
          x="1178.5"
          y="223.7"
          width="63.07"
          height="38.53"
          transform="translate(-51.2 22.72) rotate(-2.73)"
          fill="#ccc"
          opacity="0.8"
        />
        <rect
          x="1176.81"
          y="222.29"
          width="63.07"
          height="38.53"
          transform="translate(-51.13 22.64) rotate(-2.73)"
          fill="#fff"
          stroke="#000"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <g>
          <path
            d="M1232.59,243.51c-1.74.07-1.74.07-2.1-1.93-.45-.21-.68,0-.83.42a3.57,3.57,0,0,1-1.14,1.49,2.08,2.08,0,0,1-2.91-.54,1.92,1.92,0,0,1-.43-1.15,1.1,1.1,0,0,0-1.23.57c-1.24,2-2.17,2.23-4.15,1-.66.29-1.18,1-2.08.87s-1-1-1.46-1.48c-1.77-.12-1.89-.23-2.1-1.94a5.11,5.11,0,0,0-1.3,2.77c-.26,1-.66,1.12-1.7.38a3.87,3.87,0,0,1-2.93.68,2.43,2.43,0,0,1-.73-.25,2.83,2.83,0,0,1-1-3,2.6,2.6,0,0,1,2.17-2.21c.85-.1,1.49.19,1.7.83a1.25,1.25,0,0,1-.71,1.63c-.72-.19-.21-.95-.71-1.17a1.65,1.65,0,0,0-.9,2.13.94.94,0,0,0,1.06.73,1.76,1.76,0,0,0,1.81-1.21c.13-.67.13-1.36.26-2s.4-1.24,1.29-1c.51.35,0,1,.37,1.43a4.78,4.78,0,0,1,1.3-1.35,1.26,1.26,0,0,1,1.34-.12c.41.26.39.72.32,1.15,0,.25-.22.48-.08.79.37.27.67.2.78-.29s0-.82.19-1.24c.23-.64.63-.77,1.25-.57.62,1.28-.51,2.65.16,4a1.78,1.78,0,0,0,1.3-1.92,11.73,11.73,0,0,1,.4-4.82,18.69,18.69,0,0,1,.64-1.77c.5-1.1,1.45-1.71,2.16-1.46a2.24,2.24,0,0,1,.9,2.49,7.49,7.49,0,0,1-1.33,3c1.37,0,1.4,1.45,2.47,2a12.9,12.9,0,0,0,.37-2.39,9.78,9.78,0,0,1,1-3.93,2.89,2.89,0,0,1,.29-.55c.57-.84,1.34-1.19,2-.93s.89,1.18.82,2.05a7.47,7.47,0,0,1-1.22,3.35,3.63,3.63,0,0,1,1.9,2c.72.1.94-.32,1-.92.06-.87.53-1.2,1.47-1,.21,1.17-.49,2.35,0,3.58.62-.18.67-.76.84-1.19a13.94,13.94,0,0,0,.57-1.8c.18-.72.61-.92,1.35-.71.17,1.22-.38,2.43-.2,3.66.84,0,1.07-1.11,2-.92a.84.84,0,0,1-.38,1.32,4.66,4.66,0,0,0-2.41,3.94,4.41,4.41,0,0,1-.87,2,1.66,1.66,0,0,1-2.2.66,1.77,1.77,0,0,1-.48-2.25,6.75,6.75,0,0,1,1.73-2.24,4.11,4.11,0,0,0,.6-.71,4.38,4.38,0,0,1,.36-.65C1232.91,243.18,1232.93,243.5,1232.59,243.51ZM1222,234.32a7.21,7.21,0,0,0-1,4.54C1221.72,237.43,1222.7,236.08,1222,234.32Zm5.5,5.17c-.83.53-1.12,1-1,1.71s.16,1.21.86,1.32.85-.46,1-1.07A2.74,2.74,0,0,1,1227.53,239.49Zm-5.78.47c-1,.82-1.08,1.26-.39,2.74,1.31,0,1.55-.35,1-1.37C1222.18,240.88,1222,240.42,1221.75,240Zm4.89-1.56c1.37-2.11,1.64-3.39.86-4.51A8.77,8.77,0,0,0,1226.64,238.4Zm5.87,7.11c-.58.61-1.34,1.15-.8,2.26A1.81,1.81,0,0,0,1232.51,245.51Z"
            transform="translate(-41 -35.19)"
            fill="#559bd8"
          />
          <path
            d="M1202.6,234.88a3.62,3.62,0,0,1,2.86,1.15,2,2,0,0,1,.24,2.19c-.17.27-.4.54-.75.49a.76.76,0,0,1-.6-.64c-.47-1.73-.77-1.9-2.46-1.65a1.38,1.38,0,0,0-1.29,1,1.33,1.33,0,0,0,.85,1.53c.75.36,1.57.6,2.34.92a3.07,3.07,0,0,1,1.22.71,2.42,2.42,0,0,1-.34,3.72,5.12,5.12,0,0,1-5.23.41,2.27,2.27,0,0,1-1.16-2.39c.13-.41.37-.82.84-.84s.65.37.73.84c.22,1.31.44,1.48,1.73,1.46a6,6,0,0,0,1.41-.13,1.2,1.2,0,0,0,1-1.11,1,1,0,0,0-.7-1.11c-.63-.26-1.24-.58-1.89-.78a5,5,0,0,1-1.14-.53,2.57,2.57,0,0,1,.15-4.58A6.57,6.57,0,0,1,1202.6,234.88Z"
            transform="translate(-41 -35.19)"
            fill="#559bd8"
          />
          <path
            d="M1188.62,236.38a3.67,3.67,0,0,1,1.66-2.5c.46-.09.73.31,1.09.36.39,1.72-.49,3.06-1.06,4.47-1,2.42-2,4.83-3,7.26a2.41,2.41,0,0,1-1.19,1.44c-.22-.45.14-1.28-.9-1.14,0,.54-.46,1.21.58,1.46-.1.64-.57.91-1.13,1.36-.49-3,.71-5.32,1.87-7.66l.29.25c-.28,1.33-1.06,2.49-1.45,3.89.44.13.77.5,1.38.32l4.12-10a1.43,1.43,0,0,0-1.31-.46l-.62,1.21Z"
            transform="translate(-41 -35.19)"
            fill="#d84545"
          />
          <path
            d="M1180.61,241.07c1,.82,2.15,1.28,3.17,2.26a8.31,8.31,0,0,1-4.08-2.35,14.55,14.55,0,0,1,3.58-2.59C1182.68,239.56,1181.36,240,1180.61,241.07Z"
            transform="translate(-41 -35.19)"
            fill="#d84545"
          />
          <path
            d="M1195.31,240.37c-1-1-2.28-1.3-2.94-2.41a15,15,0,0,1,3.89,2.3,14.37,14.37,0,0,1-3.61,2.63c.17-.61.68-.91,1.12-1.27Z"
            transform="translate(-41 -35.19)"
            fill="#d84545"
          />
          <path
            d="M1218.91,237.11c-.11.61-.53.82-1.13.83s-1.13-.37-1-.89a1.14,1.14,0,0,1,1.1-1A1.09,1.09,0,0,1,1218.91,237.11Z"
            transform="translate(-41 -35.19)"
            fill="#559bd8"
          />
          <path
            d="M1186.54,241.43a32.7,32.7,0,0,1,2.08-5.05l.33.24a44.71,44.71,0,0,1-2.12,5.06Z"
            transform="translate(-41 -35.19)"
            fill="#d84545"
          />
          <path
            d="M1222,234.32c.67,1.76-.31,3.11-1,4.54A7.21,7.21,0,0,1,1222,234.32Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
          <path
            d="M1227.53,239.49a2.74,2.74,0,0,0,.83,2c-.17.61-.34,1.17-1,1.07s-.79-.74-.86-1.32S1226.7,240,1227.53,239.49Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
          <path
            d="M1221.75,240c.22.46.43.92.65,1.37.51,1,.27,1.33-1,1.37C1220.67,241.22,1220.73,240.78,1221.75,240Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
          <path
            d="M1226.64,238.4a8.77,8.77,0,0,1,.86-4.51C1228.28,235,1228,236.29,1226.64,238.4Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
          <path
            d="M1232.51,245.51a1.81,1.81,0,0,1-.8,2.26C1231.17,246.66,1231.93,246.12,1232.51,245.51Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
          <path
            d="M1186.83,241.68a44.71,44.71,0,0,0,2.12-5.06l.62-1.21a1.43,1.43,0,0,1,1.31.46l-4.12,10c-.61.18-.94-.19-1.38-.32C1185.77,244.17,1186.55,243,1186.83,241.68Z"
            transform="translate(-41 -35.19)"
            fill="#fdfdfe"
          />
        </g>
      </g>
      <g
        id="Photo"
        className="interact clickable"
        onMouseEnter={() => {
          hoverEnter("#Photo")
        }}
        onMouseLeave={() => hoverLeave("#Photo")}
        onClick={() => {
          setAbout(true)
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
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <g>
          <g clip-path="url(#clip-path-2)">
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
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
        </g>
      </g>
      <g
        id="Polishd"
        className="interact"
        onMouseEnter={() => {
          hoverEnter("#Polishd")
        }}
        onMouseLeave={() => hoverLeave("#Polishd")}
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
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <text
          transform="matrix(1, 0.08, -0.08, 1, 1106.15, 120.93)"
          font-size="15"
          font-family="Megrim"
        >
          Polish’d
        </text>
      </g>
    </React.Fragment>
  )
}
