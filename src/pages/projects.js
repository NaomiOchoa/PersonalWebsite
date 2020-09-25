import React from "react"

export default function ProjectSection(props) {
  return (
    <div id="projects" className="content-section">
      <div className="project-section-3">
        <div className="img-content-3">
          <img
            width="80%"
            height="auto"
            src="Scribby Image.png"
            alt="Scribby main page"
          />
        </div>
        <div className="text-content-3">
          <h1>Scribby</h1>
          <p>
            A collaborative whiteboarding web application, designed with
            developers in mind
          </p>
          <div className="project-button-section">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
              href="http://scribby-dev.herokuapp.com/"
            >
              Try It
            </a>
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Capstone-GH/capstone-wb"
            >
              Github
            </a>
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/5VCPEg2WMQE"
            >
              Demo
            </a>
          </div>
          <h4>
            Tech Stack: MongoDB, Mongoose, Express.js, Node.js, React, Redux,
            Socket.IO, Konva.js, Material-UI
          </h4>
        </div>
      </div>
      <div className="project-section-3">
        <div className="img-content-3">
          <img
            width="80%"
            height="auto"
            src="Polishd Image.png"
            alt="Polishd main page"
          />
        </div>
        <div className="text-content-3">
          <h1>Polish'd</h1>
          <p>
            An e-commerce web application featuring a product catalog, user
            cart, checkout process, and admin dashboard
          </p>
          <div className="project-button-section">
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://polishd.herokuapp.com/"
            >
              Try It
            </a>
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/2004GHPTeam8Sogr8/GraceShopper"
            >
              Github
            </a>
          </div>
          <h4>Tech Stack: Firebase, React, D3.js, Semantic-UI</h4>
        </div>
      </div>
      <div className="project-section-3">
        <div className="img-content-3">
          <img
            width="80%"
            height="auto"
            src="Whatcha Doin Image.png"
            alt="Whatcha Doin main page"
          />
        </div>
        <div className="text-content-3">
          <h1>Whatcha Doin</h1>
          <p>
            A time tracking assistant featuring reminders to continue tracking
            and visual summaries of time spent
          </p>
          <div className="project-button-section">
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wd-time-tracker.web.app/"
            >
              Try It
            </a>
            <a
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NaomiOchoa/GH-Stackathon"
            >
              Github
            </a>
          </div>
          <h4>
            Tech Stack: PostgreSQL, Sequelize, Express.js, Node.js, React,
            Redux, Semantic-UI
          </h4>
        </div>
      </div>
    </div>
  )
}
