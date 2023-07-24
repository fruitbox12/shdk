import { useAuth } from '../../lib/auth';
import { useProjects, createProject } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';
import ProjectForm from '../../components/ProjectForm';
import styles from '../../styles/projectCard.module.css';

export default function Projects() {
  const { user, loading } = useAuth();
  const { projects, isLoading, isError } = useProjects();

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading projects</div>;
  }

  return (
    <div id="projectsList">
      <h1>Your Projects</h1>
      <button id="newProjectButton" onClick={createProject}>New Project</button>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <ProjectForm />
    </div>
  );
}