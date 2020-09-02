import React, { useEffect } from "react"
import Chemex from "../components/coffeeContact"
import Contact from "../components/contactPopup"
import Card from "../components/fridgeCards"
import About from "../components/aboutPopup"
import { gsap } from "gsap"
import Header from "../components/header"
import Projects from "../components/projectsSection"
import Footer from "../components/footer"
import Countertop from "../components/countertop"
import Cabinets from "../components/cabinets"
import Refrigerator from "../components/refrigerator"
import Backsplash from "../components/backsplash"
import Sink from "../components/sink"
import Arrows from "../components/arrows"
import { Helmet } from "react-helmet"

export default function Home() {
  const [contact, setContact] = React.useState(false)
  const [headerPosition, setHeaderPosition] = React.useState("full")

  const introTL = React.useRef(gsap.timeline())

  useEffect(() => {
    introTL.current.from(".interact", {
      duration: 1.5,
      y: -500,
      ease: "power1.inOut",
      stagger: 0.1,
      delay: 1,
    })
    introTL.current.pause()
  }, [])

  const startAnimation = () => {
    introTL.current.play()
  }

  return (
    <React.Fragment>
      <Helmet title="Naomi Ochoa" defer={false} />
      <div className="container" id="top">
        <Header
          startAnimation={startAnimation}
          headerPosition={headerPosition}
          setHeaderPosition={setHeaderPosition}
        />
        <div className="main">
          <div id="main-image-section">
            <Contact contact={contact} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1276.48 722.16"
              id="main-svg"
            >
              <defs>
                <clipPath id="clip-path-2" transform="translate(-41 -35.19)">
                  <rect
                    x="1042.51"
                    y="171.01"
                    width="38.49"
                    height="45.52"
                    transform="translate(-9.92 65.77) rotate(-3.53)"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="0.5"
                  />
                </clipPath>
              </defs>
              <Countertop />
              <Cabinets />
              <Refrigerator />
              <Backsplash />
              <Sink />
              <Chemex setContact={setContact} />
              <Card />
              <Arrows />
            </svg>
          </div>
          {headerPosition === "top" ? (
            <React.Fragment>
              <About />
              <Projects />
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}
