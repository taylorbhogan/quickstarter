import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal'
import Discover from "../index"
import styles from "./DiscoverModal.module.css"

function DiscoverModal() {
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
        <Discover setShowSpotAddModal={setShowSpotAddModal} />
        </Modal>
      )
      }
    </div >
  )
}

export default DiscoverModal;
