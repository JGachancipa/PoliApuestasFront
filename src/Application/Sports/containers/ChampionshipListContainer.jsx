import React, { useContext, useEffect, useState } from 'react'

import ChampionshipList from '../components/ChampionshipList'
import APISContext from '../../../Util/context/APISContext';
import { CHAMPIONSHIP_COLUMNS } from '../util/TableStructure';
import { APIURL, PAGES, TABLE_INPUTS_SEARCH, TABLE_OPTIONS } from '../../constants/Constants';
import { OptionsColumn } from '../../../Util/genericFunctions/OptionsColumn';
import Loading from '../../General/container/Loading';

/**
 * Contenedor Tabla de Campeonatos
 * @returns {ChampionshipList}
 */
const ChampionshipListContainer = () => {
    const url = `${APIURL}${PAGES.CHAMPIONSHIP}`;
    
    // Estado del Componente
    const [championshipList, setChampionshipList] = useState();
    
    // Uso del Contexto
    const { getAPISInfoList, deleteAPISInfo, handleEdit } = useContext(APISContext);

    // Generacion Columna Opciones
    TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(getValue(), handleEdit, deleteAPISInfo, url, PAGES.CHAMPIONSHIP);

    //Consulta de Informacion de Campeonatos
    useEffect(() => {
        if (!championshipList) {
            getAPISInfoList(url)
                .then(({ data }) => setChampionshipList(data));
        }
    }, [getAPISInfoList, championshipList, url]);

    // Definicion de Valores del Formulario
    if (!championshipList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list: championshipList,
        columns: CHAMPIONSHIP_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.CHAMPIONSHIP,
        tableOptions: TABLE_OPTIONS.tableOptions,
        title: 'Listado de Campeonatos'
    };

    return (
        <div >
            <ChampionshipList props={parameters} />
        </div>
    );
};

export default ChampionshipListContainer;