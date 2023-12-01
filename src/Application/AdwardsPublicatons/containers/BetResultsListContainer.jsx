import React, { useContext, useEffect, useState } from "react";

import BetResultsList from "../components/BetResultsList";
import APISContext from "../../../Util/context/APISContext";
import { BET_RESULTS_COLUMNS } from "../util/TableStructure";
import {
    APIURL,
    PAGES,
    TABLE_INPUTS_SEARCH,
    /*TABLE_OPTIONS,*/
} from "../../constants/Constants";
/*import { OptionsColumn } from "../../../Util/genericFunctions/OptionsColumn";*/
import Loading from "../../General/container/Loading";

/**
 * Contenedor Tabla de Apuestas
 * @returns {BetResultsList}
 */
const BetResultsListContainer = () => {
    const url = `${APIURL}${PAGES.BET_RESULTS}`;

    // Estado del Componente
    const [betResultsList, setBetResultsList] = useState();

    // Uso del Contexto
    const { getAPISInfoList /*deleteAPISInfo, handleEdit */ } =
        useContext(APISContext);

    // Generacion Columna Opciones
    /*TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(
            getValue(),
            handleEdit,
            deleteAPISInfo,
            url,
            PAGES.BET_RESULTS
        );*/

    //Consulta de Informacion de Apuestas
    useEffect(() => {
        if (!betResultsList) {
            getAPISInfoList(url).then(({ data }) => setBetResultsList(data));
        }
    }, [getAPISInfoList, betResultsList, url]);

    // Definicion de Valores del Formulario
    if (!betResultsList) return <Loading />;

    // Parametros Tabla Historial de apuestas
    const parameters = {
        list: betResultsList,
        columns: BET_RESULTS_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.BET_RESULTS,
        /*tableOptions: TABLE_OPTIONS.tableOptions,*/
        title: "Historial de apuestas",
    };

    return (
        <div>
            <BetResultsList props={parameters} />
        </div>
    );
};

export default BetResultsListContainer;
