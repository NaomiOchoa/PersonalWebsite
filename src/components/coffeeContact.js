import React, { useEffect } from "react"
import { gsap } from "gsap"

export default function Chemex(props) {
  const [played, setPlayed] = React.useState(false)
  const { setContact } = props

  const pourCoffee1 = () => {
    const tl = gsap.timeline()
    tl.addLabel("pourCoffeeOne")
    tl.to(
      "#Chemex",
      {
        duration: 3,
        rotation: -100,
        x: -145,
      },
      "pourCoffeeOne"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 3,
        rotation: 85,
        y: -35,
        x: -40,
      },
      "pourCoffeeOne"
    )
    tl.to("#coffeeDrop1", {
      duration: 1.5,
      scaleX: 1.2,
      scaleY: 0.3,
      delay: -0.7,
      rotation: 12,
    })
    tl.addLabel("liftChemexOne")
    tl.to(
      "#Chemex",
      {
        duration: 3,
        x: -120,
        y: 260,
        rotation: -50,
      },
      "liftChemexOne +=1"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 3,
        rotation: 50,
        y: 10,
        x: -10,
        ease: "back.out",
      },
      "liftChemexOne +=1"
    )
    tl.to(
      "#coffeeDrop1",
      {
        transformOrigin: "0%, 0%",
        duration: 2,
        scaleX: 0,
        scaleY: 0.1,
        y: 20,
        rotation: -20,
      },
      "liftChemexOne +=1"
    )
    return tl
  }

  const pourCoffee2 = () => {
    const tl = gsap.timeline()
    tl.addLabel("pourCoffeeTwo")
    tl.to(
      "#Chemex",
      {
        duration: 3,
        rotation: -100,
      },
      "pourCoffeeTwo"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 3,
        rotation: 80,
        y: -35,
        x: -37,
      },
      "pourCoffeeTwo"
    )
    tl.to("#coffeeDrop2", {
      duration: 1.5,
      scaleX: 1.2,
      scaleY: 0.3,
      delay: -0.7,
      rotation: 12,
    })
    tl.addLabel("liftChemexTwo")
    tl.to(
      "#Chemex",
      {
        duration: 3,
        y: 260,
        rotation: -50,
      },
      "liftChemexTwo +=1"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 3,
        rotation: 50,
        y: 10,
        x: -10,
        ease: "back.out",
      },
      "liftChemexTwo +=1"
    )
    tl.to(
      "#coffeeDrop2",
      {
        transformOrigin: "0%, 0%",
        duration: 2,
        scaleX: 0,
        scaleY: 0.1,
        y: 40,
        rotation: -20,
      },
      "liftChemexTwo +=1"
    )
    return tl
  }

  const hoverEffect = () => {
    gsap
      .timeline()
      .to("#Coffee_Cup1", {
        rotation: 25,
        ease: "sine.Out",
      })
      .to("#Coffee_Cup1", {
        rotation: -25,
        ease: "sine.Out",
      })
      .to("#Coffee_Cup1", {
        rotation: 0,
        ease: "sine.Out",
      })
      .to("#Coffee_Cup1", {
        rotation: 25,
        ease: "sine.Out",
      })
      .to("#Coffee_Cup1", {
        rotation: -25,
        ease: "sine.Out",
      })
      .to("#Coffee_Cup1", {
        rotation: 0,
        ease: "sine.Out",
      })
      .duration(1)
  }

  const triggerContactForm = () => {
    const tl = gsap.timeline()
    tl.to("#contact-arrow", {
      opacity: 0,
    })
    tl.to("#Coffee_Cup1", {
      duration: 1,
      y: 208,
    })
    tl.addLabel("startChemexMove")
    tl.to(
      "#Chemex",
      {
        duration: 2,
        x: -120,
        y: 260,
        rotation: -50,
      },
      "startChemexMove"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 2,
        rotation: 50,
        y: 10,
        x: -10,
      },
      "startChemexMove"
    )
    tl.add(pourCoffee1())
    tl.to("#Chemex", {
      duration: 2,
      x: 40,
    })
    tl.add(pourCoffee2())
    tl.addLabel("putChemexBack")
    tl.to(
      "#Chemex",
      {
        duration: 2,
        x: 0,
        y: 0,
        rotation: 0,
      },
      "putChemexBack"
    )
    tl.to(
      "#InnerCoffee",
      {
        duration: 2,
        rotation: 0,
        y: 10,
      },
      "putChemexBack"
    )
    tl.to("#contact-form", {
      duration: 2,
      scaleX: 1,
      scaleY: 1,
      opacity: 100,
    })
    tl.duration(10)
    return tl
  }

  const triggerContactForm2 = () => {
    const tl = gsap.timeline()
    tl.to("#contact-form", {
      duration: 2,
      scaleX: 1,
      scaleY: 1,
      opacity: 100,
    })
    return tl
  }

  useEffect(() => {
    gsap.set("#Chemex", {
      transformOrigin: "50% 50%",
    })

    gsap.set("#InnerCoffee", {
      transformOrigin: "50% 50%",
    })

    gsap.set("#Coffee_Cup1", {
      transformOrigin: "50% 50%",
    })

    gsap.set("#coffeeDrop1", {
      scaleX: 0,
      scaleY: 0.2,
      transformOrigin: "100%, 100%",
    })

    gsap.set("#coffeeDrop2", {
      scaleX: 0,
      scaleY: 0.2,
      transformOrigin: "100%, 100%",
    })
  }, [])

  return (
    <React.Fragment>
      <defs>
        <clipPath id="clip-path" transform="translate(-41 -35.19)">
          <path
            id="Chemex_Mask"
            data-name="Chemex Mask"
            d="M952.67,34.74c.74,0,2.24,2.19,2,3.27L938.76,70l1,3.81-.28.49s14.13,22.61,16.22,31.14c2.13,8.7-.49,16.22-9.44,16.22H907.1c-9,0-11.58-7.52-9.45-16.22,2.09-8.53,16.22-31.14,16.22-31.14l-.13-.49L914,70,898.89,37.7a1.3,1.3,0,0,1-.07-1l.42-2.43"
            fill="none"
          />
        </clipPath>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <g id="Chemex" className="interact">
        <g id="Coffee">
          <rect
            id="coffeeDrop1"
            x="824.24"
            y="-17"
            width="40"
            height="20"
            fill="#603813"
          />
          <rect
            id="coffeeDrop2"
            x="824.24"
            y="-17"
            width="40"
            height="20"
            fill="#603813"
          />
          <g clipPath="url(#clip-path)">
            <rect
              id="InnerCoffee"
              x="844.24"
              y="63.63"
              width="100"
              height="38"
              fill="#603813"
            />
          </g>
        </g>
        <g id="Chem">
          <path
            d="M946.23,121.15H907.1c-9,0-11.58-7.52-9.45-16.22,2.09-8.52,16.22-31.14,16.22-31.14h25.59s14.13,22.62,16.22,31.14C957.81,113.63,955.19,121.15,946.23,121.15Z"
            transform="translate(-41 -35.19)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M939.47,68.71H913.71l-14.87-31c-.28-1.09.22-2.27,1-2.27h53.58c.74,0,1.24,1.18,1,2.27Z"
            transform="translate(-41 -35.19)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M945.64,85.66H907.1a1.77,1.77,0,0,1-1.77-1.77L912.1,71.8V70.7l-6.77-12.2a1.77,1.77,0,0,1,1.77-1.77h38.54a1.77,1.77,0,0,1,1.77,1.77l-6.78,12.2v1l6.78,12.14A1.77,1.77,0,0,1,945.64,85.66Z"
            transform="translate(-41 -35.19)"
            fill="#a67c52"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
        </g>
      </g>
      <g id="Cups">
        <g id="Coffee_Cup2" className="interact" data-name="Coffee Cup2">
          <g>
            <path
              d="M753.45,390l-.46,2.08c7,.45,5.63,15.83-3.06,13.8l-.48,2.12C761.92,411.88,763.75,389.44,753.45,390Z"
              transform="translate(-41 -35.19)"
              fill="#e1e1e1"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              d="M740.45,416h-4a13,13,0,0,1-13-13l-1-16a1,1,0,0,1,1-1h30a1,1,0,0,1,1,1l-1,16A13,13,0,0,1,740.45,416Z"
              transform="translate(-41 -35.19)"
              fill="#f9f9f9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <path
            d="M748.61,412.08h-8a27,27,0,0,1-4,0,8.1,8.1,0,0,1-4-1.33,10,10,0,0,1-3-4c-1.22-2.56-1.66-5.19-2-11.9-.2-4-.34-6.9-.32-8.88h-3.84a1,1,0,0,0-1,1l1,16a13,13,0,0,0,13,13h4a13,13,0,0,0,9.3-3.93Z"
            transform="translate(-41 -35.19)"
            fill="#e1e1e1"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.25"
          />
        </g>
        <g
          id="Coffee_Cup1"
          className="interact clickable"
          data-name="Coffee Cup1"
          onMouseOver={() => {
            if (!played) {
              hoverEffect()
            }
          }}
          onClick={() => {
            if (!played) {
              setPlayed(true)
              triggerContactForm()
              setContact(true)
            } else {
              triggerContactForm2()
              setContact(true)
            }
          }}
        >
          <g>
            <path
              d="M940.45,183l-.46,2.08c7,.45,5.63,15.83-3.06,13.8l-.48,2.12C948.92,204.88,950.75,182.44,940.45,183Z"
              transform="translate(-41 -35.19)"
              fill="#e1e1e1"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              d="M927.45,209h-4a13,13,0,0,1-13-13l-1-16a1,1,0,0,1,1-1h30a1,1,0,0,1,1,1l-1,16A13,13,0,0,1,927.45,209Z"
              transform="translate(-41 -35.19)"
              fill="#f9f9f9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <path
            d="M935.61,205.08h-8a27,27,0,0,1-4,0,8.1,8.1,0,0,1-4-1.33,10,10,0,0,1-3-4c-1.22-2.56-1.66-5.19-2-11.9-.2-4-.34-6.9-.32-8.88h-3.84a1,1,0,0,0-1,1l1,16a13,13,0,0,0,13,13h4a13,13,0,0,0,9.3-3.93Z"
            transform="translate(-41 -35.19)"
            fill="#e1e1e1"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.25"
          />
        </g>
      </g>
    </React.Fragment>
  )
}
