import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Project {
  id: string;
  name: string;
  description: string;
  repoUrl: string;
  deployments: Deployment[];
}

export interface Deployment {
  id: string;
  status: string;
  url: string;
  createdAt: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return projects;
};

export const createProject = async (name: string, description: string, repoUrl: string) => {
  const response = await axios.post('/api/projects', { name, description, repoUrl });
  return response.data;
};

export const deleteProject = async (id: string) => {
  const response = await axios.delete(`/api/projects/${id}`);
  return response.data;
};