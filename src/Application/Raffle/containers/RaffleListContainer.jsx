import React, { useContext, useEffect, useState } from 'react'

import RaffleList from '../components/RaffleList'
import APISContext from '../../../Util/context/APISContext';
import { RAFFLE_COLUMNS } from '../util/TableStructure';
import { APIURL, PAGES, TABLE_INPUTS_SEARCH, TABLE_OPTIONS } from '../../constants/Constants';
import { OptionsColumn } from '../../../Util/genericFunctions/OptionsColumn';
import Loading from '../../General/container/Loading';

/**
 * Contenedor Tabla de Campeonatos
 * @returns {RaffleListT}
 */
const RaffleListContainer = () => {
    const url = `${APIURL}${PAGES.RAFFLE}`;

        // Estado del Componente
        const [raffleList, setRaffleList] = useState();

    // Uso del Contexto
    const {getAPISInfoList, deleteAPISInfo, handleEdit } = useContext(APISContext);

    // Generacion Columna Opciones
    TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(getValue(), handleEdit, deleteAPISInfo, url,PAGES.RAFFLE);

 //Consulta de Informacion de Campeonatos
 useEffect(() => {
    if (!raffleList) {
        getAPISInfoList(url)
            .then(({ data }) => setRaffleList(data));
    }
}, [getAPISInfoList, raffleList, url]);

    // Definicion de Valores del Formulario
    if (!raffleList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list:raffleList,
        columns: RAFFLE_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.RAFFLE,
        tableOptions: TABLE_OPTIONS.tableOptions,
        title: 'Listado de Rifas'
    };

    return (
        <div >
            <RaffleList props={parameters} />
        </div>
    );
};

export default RaffleListContainer;