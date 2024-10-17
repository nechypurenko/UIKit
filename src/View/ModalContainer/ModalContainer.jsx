import React, { useState } from 'react';
import { Modal } from '../../components/UI/Modal';
import { Button } from '../../components/UI/Button';

export const ModalView = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Custom Modal</h3>
      <Button 
        label="Open Modal"
        type="primary"
        onClick={openModal} />

      <Modal title="Title" onClose={closeModal} isOpen={isModalOpen}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Modal>
    </div>
  );
}