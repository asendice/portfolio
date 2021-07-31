import React, { useEffect, useState } from "react";
import backendApi from "../apis/backendApi";
import Modal from "react-modal";

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

  const onProjectCardClick = (proj) => {
    setSelectedProject(proj);
    setModalOpen(!modalOpen);
    setIndex(0);
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
          <button>Github</button>
          <button>Live Demo</button>
        </div>
      );
    });
  };

  const renderModal = () => {
    if (modalOpen) {
      return (
        <div className="project-modal">
          <div className="modal-content">
            <button onClick={() => setModalOpen(false)}>X</button>
            <div className="modal-box">
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
            <button
              onClick={() =>
                setIndex(
                  index < selectedProject.images.length - 1 ? index + 1 : 0
                )
              }
            >
              {" "}
              +{" "}
            </button>
            <button
              onClick={() =>
                setIndex(
                  index > 0 ? index - 1 : selectedProject.images.length - 1
                )
              }
            >
              {" "}
              -{" "}
            </button>
            <div>{selectedProject.skills}</div>
            <div>{selectedProject.description}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  console.log(projects);

  return (
    <div className="projects">
      <div className="section-title">PROJECTS</div>
      <div className="projects-container">{renderProjectCards()}</div>
      {renderModal()}
    </div>
  );
};

export default Projects;
