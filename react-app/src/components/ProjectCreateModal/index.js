import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal'
import ProjectCreateForm from "../ProjectCreateForm";
import styles from "./ProjectCreateModal.module.css"

function ProjectCreateModal() {
  const [showProjectAddModal, setShowProjectAddModal] = useState(false);

  /*
    This useEffect prevents scrolling of the pages behind
    when the modal is open.
  */
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showProjectAddModal ? 'hidden' : 'auto';
  }, [showProjectAddModal])

  return (
    <div>
      <button className={styles.btn}
        onClick={() => setShowProjectAddModal(true)}
      >Start a project</button>
      {showProjectAddModal && (
        <Modal onClose={() => setShowProjectAddModal(false)}>
          <ProjectCreateForm setShowProjectAddModal={setShowProjectAddModal} />
        </Modal>
      )
      }
    </div >
  )
}

export default ProjectCreateModal;
