import { useParams } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'

import ChampionshipForm from '../components/ChampionshipForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { DEFAULT_VALUES } from '../util/BasicFormDataStructure';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';

/**
 * Generacion Formulario de Campeonatos
 * @returns {ChampionshipForm}
 */
const ChampionshipFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.CHAMPIONSHIP}`;

  // Uso del Contexto
  const { state, getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  // Metodo de insercion/actualizacion de Informacion de Campeonatos
  const submitChampionship = (data) => {
    const url = APIURL + PAGES.CHAMPIONSHIP;
    data.id
      ? putAPISInfo(url, data, PAGES.CHAMPIONSHIP_TABLE)
      : postAPISData(data, url, PAGES.CHAMPIONSHIP_TABLE);
  };

  // Consulta de informacion de Campeonatos
  useEffect(() => {
    if (!state.object?.object && id !== 'add' && !state.error?.error) {
      getAPISInfo(`${url}${id}/`, id);
    }
  }, [getAPISInfo, state, url, id])

  // Validacion de Errores
  if (state.error.error) return <Errors errors={state.error.error} />

  // Spinner de Cargado de informacion
  if (!state.object?.object && id !== 'add') return <Loading />

  // Definicion de Valores del Formulario
  const data = state && id !== 'add' ? state.object.object : DEFAULT_VALUES;

  return (
    <div>
      <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
      <div className='ps-5 pe-5 mt-3'>
        <ChampionshipForm onSubmit={submitChampionship} data={data} />
      </div>
    </div>
  );

};

export default ChampionshipFormContainer;