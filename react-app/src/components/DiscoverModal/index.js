import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal'
import Discover from "../Discover";
import styles from "./DiscoverModal.module.css"

function DiscoverModal() {
  const [showDiscoverModal, setShowDiscoverModal] = useState(false);

  /*
    This useEffect prevents scrolling of the pages behind
    when the modal is open.
  */
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showDiscoverModal ? 'hidden' : 'auto';
  }, [showDiscoverModal])

  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.btn}
        onClick={() => setShowDiscoverModal(true)}
      >Discover</button>
      {showDiscoverModal && (
        <Modal onClose={() => setShowDiscoverModal(false)}>
          <Discover setShowDiscoverModal={setShowDiscoverModal} />
        </Modal>
      )
      }
    </div >
  )
}

export default DiscoverModal;
