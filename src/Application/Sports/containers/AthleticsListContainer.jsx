import React, { useContext, useEffect } from 'react'

import AthleticsList from '../components/AthleticsList'
import APISContext from '../../../Util/context/APISContext';
import { ATHLETICS_COLUMNS } from '../util/TableStructure';
import { APIURL, PAGES, TABLE_INPUTS_SEARCH, TABLE_OPTIONS } from '../../constants/Constants';
import { OptionsColumn } from '../../../Util/genericFunctions/OptionsColumn';
import Loading from '../../General/container/Loading';

/**
 * Contenedor Tabla de Campeonatos
 * @returns {AthleticsLisT}
 */
const AthleticsListContainer = () => {
    const url = `${APIURL}${PAGES.ATHLETICS}`;

    // Uso del Contexto
    const { state, getAPISInfo, deleteAPISInfo, handleEdit } = useContext(APISContext);

    // Generacion Columna Opciones
    TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(getValue(), handleEdit, deleteAPISInfo, url, PAGES.ATHLETICSTABLE,PAGES.ATHLETICS);

    //Consulta de Informacion de Campeonatos
    useEffect(() => {
        if (!state.dataList?.dataList) {
            getAPISInfo(url);
        }
    }, [getAPISInfo, state, url]);

    // Definicion de Valores del Formulario
    if (!state.dataList?.dataList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        championships: state.dataList.dataList,
        columns: ATHLETICS_COLUMNS,
        filter: TABLE_INPUTS_SEARCH.ATHLETICS,
        tableOptions: TABLE_OPTIONS.tableOptions,
        title: 'Listado de Deportes'
    };

    return (
        <div >
            <AthleticsList props={parameters} />
        </div>
    );
};

export default AthleticsListContainer;