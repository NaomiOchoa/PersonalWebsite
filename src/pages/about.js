import React from "react"

export default function AboutPopup(props) {
  return (
    <div id="about-me" className="content-section">
      <div className="img-content">
        <img width="100%" height="auto" src="DSC00159_BW_small.jpg" alt="me" />
      </div>
      <div className="text-content">
        <h1>About Me</h1>
        <p>
          I'm a software engineer with a background in innovation research. In
          other words, I used to help clients decide which new products should
          be brought to shelves. As a result, I look for data to make decisions,
          and I'm always asking "why" to understand user behavior and
          motivations.
          <br />
          <br />
          <span className="inline-subheader">
            I'm most experienced with:{" "}
          </span>{" "}
          JavaScript, React, Redux, CSS, HTML, Node.js, Express.js, ...and I'm
          always looking to keep expanding my skills
          <br />
          <br />
          <span className="inline-subheader">
            I'm currently diving deep into:
          </span>{" "}
          Web Accessibility
          <br />
          <br />
          <span className="inline-subheader">
            Give me all your recommendations for:
          </span>{" "}
          Tech podcasts! I'm an avid podcast listener, with favorites like 99%
          Invisible and Reply All. I'm always looking for something new to add
          to my rotation.
        </p>
      </div>
    </div>
  )
}
