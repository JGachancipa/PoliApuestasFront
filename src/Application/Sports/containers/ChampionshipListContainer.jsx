import React, { useContext, useEffect } from 'react'
import ChampionshipList from '../components/ChampionshipList'
import APISContext from '../../../Util/context/APISContext';
import { CHAMPIONSHIP_COLUMNS } from '../util/TableStructure';
import { APIURL, PAGES, TABLE_INPUT_SEARCH, TABLE_OPTIONS } from '../../constants/Constants';
import { useNavigate } from 'react-router-dom';

const ChampionshipListContainer = () => {
    const navigate = useNavigate();
    const url = `${APIURL}${PAGES.CHAMPIONSHIP}`;
    const { state, getAPISInfo, deleteAPISInfo } = useContext(APISContext);

    const render = ({ getValue }) => {
        return (<div style={{ fontSize: '20px' }}>
            <i className="bi bi-pen-fill"
                onClick={() => navigate(PAGES.CHAMPIONSHIPFORM, {id: getValue()})}>
            </i>
            <i className="bi bi-x-circle-fill m-2"
                onClick={() => { deleteAPISInfo && deleteAPISInfo(getValue(), url, PAGES.CHAMPIONSHIPTABLE) }}>
            </i>
        </div>)
    }
    TABLE_OPTIONS.tableOptions.cell = render;

    useEffect(() => {
        if (!state?.APIOperations) {
            getAPISInfo(url);
        }
    }, [getAPISInfo, state, url])

    if (!state?.APIOperations) return <div>...Cargando</div>

    const parameters = {
        championships: state.data,
        columns: CHAMPIONSHIP_COLUMNS,
        filter: TABLE_INPUT_SEARCH.CHAMPIONSHIP,
        tableOptions: TABLE_OPTIONS.tableOptions
    };

    return (
        <div >
            <ChampionshipList props={parameters} />
        </div>
    );
};

export default ChampionshipListContainer;
