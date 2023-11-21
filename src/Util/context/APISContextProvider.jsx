import React, { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import rootReducer from "../reducers";
import { ActionType } from "../actions/APISActions";
import APISContext, { initialState } from "./APISContext";

const APISContextProvider = (props) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(rootReducer, initialState);

    const getAPISInfo = async (url, id) => {
        let identifier = id === undefined ? ' ' : `${id}/`;
        await axios.get(url + identifier)
            .then(({ data }) => {
                dispatch({ type: ActionType.GET, payload: data });
            });
    }

    const postAPISData = async (data, url, section) => {
        await axios.post(url, data)
            .then(({ data }) => {
                dispatch({ type: ActionType.POST, payload: data });
            });
        window.location.reload();
    };

    const deleteAPISInfo = async (id, url, section) => {
        await axios.delete(`${url}${id}/`)
            .then(({ data }) => {
                dispatch({ type: ActionType.DELETE, payload: data });
            });
        navigate(section);
    }

    const providerValue = {
        state: state.APIOperations,
        getAPISInfo,
        postAPISData,
        deleteAPISInfo,
    };

    return (
        <APISContext.Provider value={providerValue}>
            {props.children}
        </APISContext.Provider>
    );
};

export default APISContextProvider;
