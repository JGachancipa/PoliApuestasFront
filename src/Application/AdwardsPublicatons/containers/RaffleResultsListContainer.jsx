import React, { useContext, useEffect, useState } from "react";

import RaffleResultsList from "../components/RaffleResultsList";
import APISContext from "../../../Util/context/APISContext";
import { RAFFLE_RESULTS_COLUMNS } from "../util/TableStructure";
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
 * @returns {RaffleResultsList}
 */
const RaffleResultsListContainer = () => {
    const url = `${APIURL}${PAGES.RAFFLE_RESULTS}`;

    // Estado del Componente
    const [raffleResultsList, setRaffleResultsList] = useState();

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
        if (!raffleResultsList) {
            getAPISInfoList(url).then(({ data }) => setRaffleResultsList(data));
        }
    }, [getAPISInfoList, raffleResultsList, url]);

    // Definicion de Valores del Formulario
    if (!raffleResultsList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list: raffleResultsList,
        columns: RAFFLE_RESULTS_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.RAFFLE_RESULTS,
        /*tableOptions: TABLE_OPTIONS.tableOptions,*/
        title: "Historial de rifas",
    };

    return (
        <div>
            <RaffleResultsList props={parameters} />
        </div>
    );
};

export default RaffleResultsListContainer;
