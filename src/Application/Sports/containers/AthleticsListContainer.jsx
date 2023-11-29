import React, { useContext, useEffect, useState } from 'react'

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

        // Estado del Componente
        const [athleticsList, setAthleticsList] = useState();

    // Uso del Contexto
    const {getAPISInfoList, deleteAPISInfo, handleEdit } = useContext(APISContext);

    // Generacion Columna Opciones
    TABLE_OPTIONS.tableOptions.cell = ({ getValue }) =>
        OptionsColumn(getValue(), handleEdit, deleteAPISInfo, url,PAGES.ATHLETICS);

 //Consulta de Informacion de Campeonatos
 useEffect(() => {
    if (!athleticsList) {
        getAPISInfoList(url)
            .then(({ data }) => setAthleticsList(data));
    }
}, [getAPISInfoList, athleticsList, url]);

    // Definicion de Valores del Formulario
    if (!athleticsList) return <Loading />;

    // Parametros Tabla Campeonatos
    const parameters = {
        list:athleticsList,
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