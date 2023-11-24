import React from 'react'
import ErrorPage from '../components/ErrorPage';
import { ERROR_DEFAULT_VALUES } from '../../constants/Constants';

/**
 * Pagina Para Mostrar Errores Comunes del Aplicativo
 * @param {Object} errors 
 * @returns {ErrorPage} 
 */
const Errors = ({ errors }) => {
    const error = errors ? errors : ERROR_DEFAULT_VALUES;
    return (
        <ErrorPage error={error} />
    );
};

export default Errors;