import { useAuth } from '../../lib/auth';
import { useProjects } from '../../lib/projects';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import styles from '../../styles/dashboard.module.css';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const { projects } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please sign in to view your dashboard</div>;
  }

  return (
    <Layout>
      <div id="dashboard" className={styles.dashboard}>
        <h1>Welcome, {user.name}</h1>
        <div id="projectsTab" className={styles.projectsTab}>
          <h2>Your Projects</h2>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}