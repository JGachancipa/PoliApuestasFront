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
<<<<<<< HEAD
=======
    handleEdit: (id,section) => { },
>>>>>>> c6ad7b0997c2742ddc0d38c2ade77b594da8935a
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