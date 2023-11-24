import React from 'react'
import { PAGES } from '../../constants/Constants';

/**
 * Alerta para Mostrar los Errores
 * @param {Object} error 
 * @returns {HTMLElement}
 */
const ErrorPage = ({error}) => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">{error.status}</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page {error.statusText}</p>
                <a href={PAGES.HOME} className="btn btn-primary">Ir a Inicio</a>
            </div>
        </div>
    );
};

export default ErrorPage;