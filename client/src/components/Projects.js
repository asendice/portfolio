import React, { useEffect, useState } from "react";
import backendApi from "../apis/backendApi";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const getProjects = async () => {
    await backendApi
      .get("/projects")
      .then((response) => {
        if (response) {
          console.log(response, "response");
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProjects(response.data.message));
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const onProjectCardClick = (proj) => {
    setSelectedProject(proj);
    setModalOpen(!modalOpen);
  };

  const dismissModal = (e) => {
    if (e.target.id === "project-modal") {
      setModalOpen(false);
    } else {
      return null;
    }
  };

  const imageSlider = () => {
    return (
      <AwesomeSlider>
        {selectedProject.images.map((img) => {
          console.log(img);
          return <div data-src={img} className="modal-image"></div>;
        })}
      </AwesomeSlider>
    );
  };

  const renderProjectCards = () => {
    return projects.map((proj) => {
      return (
        <div
          onClick={() => onProjectCardClick(proj)}
          key={proj.id}
          className="project-card"
        >
          <img src={proj.images[0]} />
          <h3>{proj.name}</h3>
        </div>
      );
    });
  };

  const renderModal = () => {
    if (modalOpen) {
      return (
        <div
          id="project-modal"
          onClick={(e) => dismissModal(e)}
          className="project-modal"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1>{selectedProject.name}</h1>
              <button className="close-btn" onClick={() => setModalOpen(false)}>
                X
              </button>
            </div>

            <div className="modal-btns">
              <a
                href={selectedProject.gitHub}
                rel="noopener noreferrer"
                target="_blank"
                className="ghub-btn"
              >
                {" "}
                Github{" "}
              </a>
              {selectedProject.live !== "none" ? (
                <a
                  href={selectedProject.live}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
            <div onClick={() => console.log("click")} className="modal-box">
              <div className="dots">
                <div className="red-dot"></div>
                <div className="yellow-dot"></div>
                <div className="green-dot"></div>
              </div>
              {imageSlider()}
            </div>

            <div className="tech-skills">
              {selectedProject.skills.map((skill) => {
                return <div>{skill}</div>;
              })}
            </div>
            <div className="project-description ">
              {selectedProject.description}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className="projects"
      style={{ overflow: modalOpen ? "hidden" : "visible" }}
    >
      <div className="section-title">PROJECTS</div>
      <div className="projects-container">{renderProjectCards()}</div>
      {renderModal()}
    </div>
  );
};

export default Projects;
