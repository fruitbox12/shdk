import { useRouter } from 'next/router';
import { useAuth } from '../../lib/auth';
import { useProject, deleteProject } from '../../lib/projects';
import { createDeployment } from '../../lib/deploy';
import Layout from '../../components/Layout';
import ProjectForm from '../../components/ProjectForm';
import DeployButton from '../../components/DeployButton';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const { project, isLoading } = useProject(id);
  const handleDelete = async () => {
    await deleteProject(id);
    router.push('/dashboard/projects');
  };
  const handleDeploy = async () => {
    await createDeployment(id);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div id="projectDetail">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a href={project.repoUrl}>Github Repo</a>
        <button id="deleteProjectButton" onClick={handleDelete}>Delete</button>
        <DeployButton id="deployButton" onClick={handleDeploy} />
        {user && user.id === project.userId && <ProjectForm project={project} />}
      </div>
    </Layout>
  );
};

export default ProjectDetail;