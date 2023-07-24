import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { getProjectById } from '../../lib/projects';
import { checkAuth } from '../../lib/auth';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const [session, loading] = useSession();

  React.useEffect(() => {
    if (!loading && !session) {
      checkAuth();
    }
  }, [session, loading]);

  const project = getProjectById(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;