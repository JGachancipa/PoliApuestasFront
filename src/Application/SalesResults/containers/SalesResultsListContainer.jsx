import React, { useContext, useEffect, useState } from "react";

import SalesResultsList from "../components/SalesResultsList";
import APISContext from "../../../Util/context/APISContext";
import { SALES_RESULTS_COLUMNS } from "../util/TableStructure";
import {
    APIURL,
    PAGES,
    TABLE_INPUTS_SEARCH,
    /*TABLE_OPTIONS,*/
} from "../../constants/Constants";
/*import { OptionsColumn } from "../../../Util/genericFunctions/OptionsColumn";*/
import Loading from "../../General/container/Loading";

/**
 * Contenedor Tabla de Campeonatos
 * @returns {SalesResultsList}
 */
const SalesResultsListContainer = () => {
    const url = `${APIURL}${PAGES.SALES_RESULTS}`;

    // Estado del Componente
    const [salesResultsList, setSalesResultsList] = useState();

    // Uso del Contexto
    const { getAPISInfoList /*, deleteAPISInfo, handleEdit */ } =
        useContext(APISContext);

    // Generacion Columna Opciones
    /*TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(
            getValue(),
            handleEdit,
            deleteAPISInfo,
            url,
            PAGES.RAFFLE_RESULTS
        );*/

    //Consulta de Informacion de Campeonatos
    useEffect(() => {
        if (!salesResultsList) {
            getAPISInfoList(url).then(({ data }) => setSalesResultsList(data));
        }
    }, [getAPISInfoList, salesResultsList, url]);

    // Definicion de Valores del Formulario
    if (!salesResultsList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list: salesResultsList,
        columns: SALES_RESULTS_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.SALES_RESULTS,
        /*tableOptions: TABLE_OPTIONS.tableOptions,*/
        title: "Historial de Ventas de Rifas y Apuetas",
    };

    return (
        <div>
            <SalesResultsList props={parameters} />
        </div>
    );
};

export default SalesResultsListContainer;
