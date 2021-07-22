import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal'
import ProjectCreateForm from "../ProjectCreateForm";
import styles from "./ProjectCreateModal.module.css"

function ProjectCreateModal() {
  const [showSpotAddModal, setShowSpotAddModal] = useState(false);

  /*
    This useEffect prevents scrolling of the pages behind
    when the modal is open.
  */
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showSpotAddModal ? 'hidden' : 'auto';
  }, [showSpotAddModal])

  return (
    <div>
      <button className={styles.btn}
        onClick={() => setShowSpotAddModal(true)}
      >Start a project</button>
      {showSpotAddModal && (
        <Modal onClose={() => setShowSpotAddModal(false)}>
          <ProjectCreateForm />
        </Modal>
      )
      }
    </div >
  )
}

export default ProjectCreateModal;
