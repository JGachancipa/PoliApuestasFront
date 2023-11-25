import React from 'react'

/**
 * Retorno Spinner de carga
 * @returns {HTMLElement}
 */
const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border spinner-border m-5"
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;