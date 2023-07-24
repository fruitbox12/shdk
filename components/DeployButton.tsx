import React from 'react';
import { useDeploy } from '../lib/deploy';
import styles from '../styles/deployButton.module.css';

interface DeployButtonProps {
  projectId: string;
}

const DeployButton: React.FC<DeployButtonProps> = ({ projectId }) => {
  const { createDeployment } = useDeploy();

  const handleDeploy = async () => {
    try {
      await createDeployment(projectId);
      alert('createDeploymentSuccess');
    } catch (error) {
      alert('createDeploymentError');
    }
  };

  return (
    <button id="deployButton" className={styles.deployButton} onClick={handleDeploy}>
      Deploy
    </button>
  );
};

export default DeployButton;