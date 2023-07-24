import React, { useState } from 'react';
import { useProjects } from '../lib/projects';
import styles from '../styles/projectForm.module.css';

const ProjectForm: React.FC = () => {
  const { createProject } = useProjects();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject({ name, description, repoUrl });
      setName('');
      setDescription('');
      setRepoUrl('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="projectForm" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Project Name</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="descriptionInput">Description</label>
      <textarea
        id="descriptionInput"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="repoUrlInput">Repository URL</label>
      <input
        id="repoUrlInput"
        type="url"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        required
      />

      <button id="submitButton" type="submit">
        Create Project
      </button>
    </form>
  );
};

export default ProjectForm;