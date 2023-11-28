import React, { useContext, useEffect, useState } from 'react'

import PrizeList from '../components/PrizeList'
import APISContext from '../../../Util/context/APISContext';
import { PRIZE_COLUMNS } from '../util/TableStructure';
import { APIURL, PAGES, TABLE_INPUTS_SEARCH, TABLE_OPTIONS } from '../../constants/Constants';
import { OptionsColumn } from '../../../Util/genericFunctions/OptionsColumn';
import Loading from '../../General/container/Loading';

/**
 * Contenedor Tabla de Campeonatos
 * @returns {PrizeList}
 */
const PrizeListContainer = () => {
    const url = `${APIURL}${PAGES.PRIZE}`;

    // Estado del Componente
    const [prizeList, setPrizeList] = useState();

    // Uso del Contexto
    const { getAPISInfoList, deleteAPISInfo, handleEdit } = useContext(APISContext);

    // Generacion Columna Opciones
    TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(getValue(), handleEdit, deleteAPISInfo, url, PAGES.PRIZE);

    //Consulta de Informacion de Campeonatos
    useEffect(() => {
        if (!prizeList) {
            getAPISInfoList(url)
                .then(({ data }) => setPrizeList(data));
        }
    }, [getAPISInfoList, prizeList, url]);

    // Definicion de Valores del Formulario
    if (!prizeList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list: prizeList,
        columns: PRIZE_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.CHAMPIONSHIP,
        tableOptions: TABLE_OPTIONS.tableOptions,
        title: 'Listado de Premios'
    };

    return (
        <div >
            <PrizeList props={parameters} />
        </div>
    );
};

export default PrizeListContainer;