import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Deployment {
  id: string;
  status: string;
  url: string;
  createdAt: string;
}

export const useDeploy = () => {
  const [deployments, setDeployments] = useState<Deployment[]>([]);

  useEffect(() => {
    fetchDeployments();
  }, []);

  const fetchDeployments = async () => {
    try {
      const response = await axios.get('/api/deployments');
      setDeployments(response.data);
    } catch (error) {
      console.error('Failed to fetch deployments', error);
    }
  };

  const createDeployment = async (projectId: string) => {
    try {
      const response = await axios.post(`/api/deployments/${projectId}`);
      setDeployments([...deployments, response.data]);
    } catch (error) {
      console.error('Failed to create deployment', error);
    }
  };

  const deleteDeployment = async (deploymentId: string) => {
    try {
      await axios.delete(`/api/deployments/${deploymentId}`);
      setDeployments(deployments.filter(deployment => deployment.id !== deploymentId));
    } catch (error) {
      console.error('Failed to delete deployment', error);
    }
  };

  return { deployments, createDeployment, deleteDeployment };
};