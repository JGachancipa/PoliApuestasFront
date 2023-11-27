import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import APISContext from "./APISContext";

/**
 * Proveedor de Contexto
 * @param {APISContext} props 
 * @returns {APISContextProvider} 
 */
const APISContextProvider = (props) => {
    const navigate = useNavigate();

    /**
     * Consulta Mediante APIS a Base de Datos
     * @param {String} url 
     * @param {Integer} id 
     */
    const getAPISInfo = async (url, id) => {
        return await axios.get(`${url}${id}/`);
    };

    /**
     * Consulta Listado Mediante APIS a Base de Datos
     * @param {String} url 
     */
    const getAPISInfoList = async (url) => {
        return await axios.get(url);
    }

    /**
     * Envio de Informacion Mediante APIS a Base de Datos
     * @param {Object} data 
     * @param {String} url 
     * @param {String} section 
     */
    const postAPISData = async (data, url, section) => {
        await axios.post(url, data)
        navigate(section);
    };

    /**
     * Elimiinacion de Informacion Mediante APIS a Base de Datos
     * @param {Integer} id 
     * @param {String} url 
     * @param {String} section 
     */
    const deleteAPISInfo = async (id, url) => {
        await axios.delete(`${url}${id}/`)
        window.location.reload();
    };

    /**
     * Actualizacion de Informacion Mediante APIS a Base de Datos
     * @param {String} url 
     * @param {String} data 
     * @param {String} section
     */
    const putAPISInfo = async (url, data, section) => {
        await axios.put(`${url}${data.id}/`, data)
        navigate(section);
    };

    /**
     * Evento Para consultar y Mostrar Informacion 
     * en el Formulario
     * @param {Integer} id 
     */
    const handleEdit = (id, section) => {
        navigate(`${section}${id}`);
    };

    /**
     * Variables de Acceso al Proveedor  
     * @type {Object}
     */
    const providerValue = {
        handleEdit,
        putAPISInfo,
        getAPISInfo,
        postAPISData,
        deleteAPISInfo,
        getAPISInfoList,
    };

    return (
        <APISContext.Provider value={providerValue}>
            {props.children}
        </APISContext.Provider>
    );
};

export default APISContextProvider;