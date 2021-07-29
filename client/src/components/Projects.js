import React, { useEffect, useState } from "react";
import backendApi from "../apis/backendApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

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
        <div key={proj.id} className="project-card">
          <img src={proj.images[0]} />
          <h1>{proj.name}</h1>
        </div>
      );
    });
  };

  console.log(projects);

  return (
    <div className="projects-container">
      <div className="section-title">PROJECTS</div>
      <div className="projects">{renderProjectCards()}</div>
    </div>
  );
};

export default Projects;
