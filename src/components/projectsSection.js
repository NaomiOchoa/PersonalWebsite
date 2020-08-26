import React from "react"

export default function ProjectSection(props) {
  return (
    <div id="projects" className="content-section">
      <div className="project-section-3">
        <div className="img-content-3">
          <img width="80%" height="auto" src="..." alt="me" />
        </div>
        <div className="text-content-3">
          <h1>Scribby</h1>
          <p>A brief description of the project.....</p>
          <div className="project-button-section">
            <button className="project-button">Try It</button>
            <button className="project-button">Github</button>
            <button className="project-button">Demo</button>
          </div>
          <h4>
            Tech Stack: MongoDB, Mongoose, Express.js, Node.js, React, Redux,
            Socket.IO, Konva.js, Material-UI
          </h4>
        </div>
      </div>
      <div className="project-section-3">
        <div className="img-content-3">
          <img width="80%" height="auto" src="..." alt="me" />
        </div>
        <div className="text-content-3">
          <h1>Polish'd</h1>
          <p>A brief description of the project.....</p>
          <div className="project-button-section">
            <button className="project-button">Try It</button>
            <button className="project-button">Github</button>
          </div>
          <h4>Tech Stack: Firebase, React, D3.js, Semantic-UI</h4>
        </div>
      </div>
      <div className="project-section-3">
        <div className="img-content-3">
          <img width="80%" height="auto" src="..." alt="me" />
        </div>
        <div className="text-content-3">
          <h1>Whatcha Doin</h1>
          <p>A brief description of the project.....</p>
          <div className="project-button-section">
            <button className="project-button">Try It</button>
            <button className="project-button">Github</button>
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
