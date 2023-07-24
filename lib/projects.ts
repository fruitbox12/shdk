import axios from 'axios';

export const getProjects = async () => {
  try {
    const response = await axios.get('/api/projects');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const response = await axios.get(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createProject = async (projectData: any) => {
  try {
    const response = await axios.post('/api/projects', projectData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProject = async (id: string, updatedData: any) => {
  try {
    const response = await axios.put(`/api/projects/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProject = async (id: string) => {
  try {
    const response = await axios.delete(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};