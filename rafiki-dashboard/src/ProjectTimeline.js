import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectTimeline.css';

const breakProjectName = (name) => {
  const words = name.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    result += words[i] + ' ';
    if ((i + 1) % 3 === 0 && i !== words.length - 1) {
      result += '\n'; // newline every three words
    }
  }

  return result.trim(); 
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ProjectTimeline = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="timeline">
      {projects.map((project) => (
        <div key={project.project_id} className="timeline-item">
          <div className="project-name">
            {breakProjectName(project.project_name).split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          {project.date_completed ? (
            <div className="project-completed">
              Completed: {formatDate(project.date_completed)}
            </div>
          ) : (
            <div className="project-completed">
              Not yet completed
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectTimeline;