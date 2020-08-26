import React, { useEffect } from "react"
import { gsap } from "gsap"

export default function AboutPopup(props) {
  return (
    <div id="about-me" className="content-section">
      <div className="img-content">
        <img width="100%" height="auto" src="DSC00159_BW_small.jpg" alt="me" />
      </div>
      <div className="text-content">
        <h1>About Me</h1>
        <p>
          Hi there! Formerly an innovation researcher at Nielsen, I’m now
          enthusiastically pursuing a career in software development and excited
          to join an engineering team that is passionate about creating a
          positive experience for end users.
          <br />
          <br />
          My previous work gave me the analytical skills and project management
          experience to guide my Fortune 500 client through research that would
          help decide which new products should be brought to shelves. However,
          as I began to learn Python to develop tools for my team, I found that
          I was more passionate about being able to bring an idea to life
          through code.{" "}
        </p>
      </div>
    </div>
  )
}
