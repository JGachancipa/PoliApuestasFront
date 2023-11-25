import React from 'react';

/**
 * Estado Inicial Del Contexto
 * @type {Object}
 */
export const initialState = {
    dataList: [],
    object: {},
    error: {}
};

/**
 * Contexto General Del Aplicativo
 * @type {Object}
 */
export const AppContextType = {
    state: null,
    putAPISInfo: (data) => { },
    getAPISInfo: (url, id) => { },
    handleEdit: (id, section) => { },
    postAPISData: (data, url) => { },
    dispatch: (action, payload) => { },
    deleteAPISInfo: (id, url, section) => { },
}

/**
 * Creacion del Contexto
 */
export default React.createContext(AppContextType);