import React, { useEffect, useState } from "react";
import backendApi from "../apis/backendApi";
import Modal from "react-modal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
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

  const renderProjectCards = () => {
    return projects.map((proj) => {
      return (
        <div
          onClick={() => setModalOpen(!modalOpen)}
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
            <div></div>
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
