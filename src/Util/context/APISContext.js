import React from 'react';

export const initialState = {
    data: []
}

export const AppContextType = {
    state: null,
    dispatch: (action, payload) => { },
    getAPISInfo: (url, id) => { },
    postAPISData: (data, url) => { },
    deleteAPISInfo: (id, url, section) => { },
}

export default React.createContext(AppContextType);