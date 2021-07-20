import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import ProjectCreateForm from "../ProjectCreateForm";
import styles from "./ProjectCreateModal.module.css"

function ProjectCreateModal(){
  const [showSpotAddModal, setShowSpotAddModal] = useState(false);

  return(
    <div>
      <button className={styles.btn}
        onClick={() => setShowSpotAddModal(true)}
      >Start a project</button>
      {showSpotAddModal && (
        <Modal onClose={() => setShowSpotAddModal(false)}>
          <ProjectCreateForm />
        </Modal>
      )}
    </div>
  )
}

export default ProjectCreateModal;
