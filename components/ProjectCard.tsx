import React from 'react';
import Link from 'next/link';
import { Project } from '../lib/projects';
import styles from '../styles/projectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <Link href={`/dashboard/projects/${project.id}`}>
          <a>{project.name}</a>
        </Link>
      </h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.repoUrl}>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          Github Repo
        </a>
      </div>
      <div className={styles.deployments}>
        {project.deployments.map((deployment) => (
          <div key={deployment.id} className={styles.deployment}>
            <a href={deployment.url} target="_blank" rel="noopener noreferrer">
              {deployment.status === 'SUCCESS' ? 'View Deployment' : 'Deployment in Progress'}
            </a>
            <span className={styles.createdAt}>{new Date(deployment.createdAt).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;