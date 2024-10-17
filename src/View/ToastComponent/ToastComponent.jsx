import React, { useState, useEffect } from 'react';
import { Toast } from '../../components/UI/Toast';

export const ToastComponent = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [showToast]);
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleShowToast = () => {
    setShowToast(true);
  }


  return (
    <div style={{ padding: '20px' }}>
      <h3>Toast</h3>
      <button onClick={handleShowToast}>Show Toast</button>
      {showToast && (
        <Toast message="Event deleted" onClose={handleCloseToast} />
      )}
    </div>
  );
}
