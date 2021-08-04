import React, { useEffect, useState } from "react";
import backendApi from "../apis/backendApi";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [index, setIndex] = useState(0);
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
    setIndex(0);
  };

  const dismissModal = (e) => {
    if (e.target.id === "project-modal") {
      setModalOpen(false);
    } else {
      return null;
    }
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
            {selectedProject.name}
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              X
            </button>
            <div className="modal-btns">
              <div className="ghub-btn"> Github </div>
              <div className="demo-btn">Live Demo</div>
            </div>
            <div onClick={() => console.log("click")} className="modal-box">
              <div className="dots">
                <div className="red-dot"></div>
                <div className="yellow-dot"></div>
                <div className="green-dot"></div>
              </div>

                <img
                  className="modal-image"
                  src={selectedProject.images[index]}
                />

            </div>
            <div className="image-btn">
              <button
                onClick={() =>
                  setIndex(
                    index > 0 ? index - 1 : selectedProject.images.length - 1
                  )
                }
              >
                {" "}
                <FaAngleLeft />{" "}
              </button>
              <span>{index + 1 + " / " + selectedProject.images.length}</span>
              <button
                onClick={() =>
                  setIndex(
                    index < selectedProject.images.length - 1 ? index + 1 : 0
                  )
                }
              >
                {" "}
                <FaAngleRight />{" "}
              </button>
            </div>
            <div className="tech-skills">{selectedProject.skills}</div>
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
