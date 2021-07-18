import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import ProjectCreateForm from "../ProjectCreateForm";



function ProjectCreateModal(){
  const [showSpotAddModal, setShowSpotAddModal] = useState(false);

  return(
    <div>
      <button
        onClick={() => setShowSpotAddModal(true)}
      >Start a project</button>
      {showSpotAddModal && (
        // <Modal onClose={() => setShowSpotAddModal(false)}>
          <ProjectCreateForm />
        // </Modal>
      )}
    </div>
  )
}

export default ProjectCreateModal;
