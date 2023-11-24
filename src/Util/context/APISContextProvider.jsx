import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import rootReducer from "../reducers";
import { ActionType } from "../actions/APISActions";
import APISContext, { initialState } from "./APISContext";
import { PAGES } from "../../Application/constants/Constants";

/**
 * Proveedor de Contexto
 * @param {APISContext} props 
 * @returns {APISContextProvider} 
 */
const APISContextProvider = (props) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(rootReducer, initialState);

    /**
     * Consulta Mediante APIS a Base de Datos
     * @param {String} url 
     * @param {Integer} id 
     */
    const getAPISInfo = async (url, id) => {
        await axios.get(url)
            .then(({ data }) => {
                const type = id ? ActionType.FILTER_EDIT : ActionType.GET;
                dispatch({ type, payload: data });
            })
            .catch(err => dispatch({ type: ActionType.ERROR, payload: err }));
    };

    /**
     * Envio de Informacion Mediante APIS a Base de Datos
     * @param {Object} data 
     * @param {String} url 
     * @param {String} section 
     */
    const postAPISData = async (data, url, section) => {
        await axios.post(url, data)
            .then(({ data }) => {
                dispatch({ type: ActionType.POST, payload: data });
            })
            .catch(err => dispatch({ type: ActionType.ERROR, payload: err }));
        navigate(section);
    };

    /**
     * Elimiinacion de Informacion Mediante APIS a Base de Datos
     * @param {Integer} id 
     * @param {String} url 
     * @param {String} section 
     */
    const deleteAPISInfo = async (id, url, section) => {
        await axios.delete(`${url}${id}/`)
            .then(({ data }) => {
                dispatch({ type: ActionType.DELETE, payload: data });
            })
            .catch(err => dispatch({ type: ActionType.ERROR, payload: err }));
        navigate(section);
    };

    /**
     * Actualizacion de Informacion Mediante APIS a Base de Datos
     * @param {String} url 
     * @param {String} data 
     * @param {String} section
     */
    const putAPISInfo = async (url, data, section) => {
        await axios.put(`${url}${data.id}/`, data)
            .then(({ data }) => {
                dispatch({ type: ActionType.PUT, payload: data });
            })
            .catch(err => dispatch({ type: ActionType.ERROR, payload: err }));
        navigate(section);
    };

    /**
     * Evento Para consultar y Mostrar Informacion 
     * en el Formulario
     * @param {Integer} id 
     */
    const handleEdit = async (id) => {
        await dispatch({ type: ActionType.FILTER_EDIT, payload: id });
        navigate(`${PAGES.CHAMPIONSHIP}${id}`);
    };

    /**
     * Variables de Acceso al Proveedor  
     * @type {Object}
     */
    const providerValue = {
        state,
        handleEdit,
        putAPISInfo,
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