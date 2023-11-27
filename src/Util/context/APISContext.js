import React from 'react';

/**
 * Contexto General Del Aplicativo
 * @type {Object}
 */
export const AppContextType = {
    putAPISInfo: (data) => { },
    getAPISInfo: (url, id) => { },
    getAPISInfoList: (url) => { },
    handleEdit: (id, section) => { },
    postAPISData: (data, url) => { },
    deleteAPISInfo: (id, url, section) => { },
}

/**
 * Creacion del Contexto
 */
export default React.createContext(AppContextType);