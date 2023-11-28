import { useParams } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'

import AthleticsForm from '../components/AthleticsForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { DEFAULT_VALUES } from '../util/BasicFormDataStructure';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';

/**
 * Generacion Formulario de Campeonatos
 * @returns {AthleticsForm}
 */
const AthleticsFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.ATHLETICS}`;

  // Uso del Contexto
  const { state, getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  // Metodo de insercion/actualizacion de Informacion de Campeonatos
  const submitAthletics = (data) => {
    const url = APIURL + PAGES.ATHLETICS;
    data.id
      ? putAPISInfo(url, data, PAGES.ATHLETICSTABLE)
      : postAPISData(data, url, PAGES.ATHLETICSTABLE);
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
  const data =  state.object.object;

  return (
    <div>
      <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
      <div className='ps-5 pe-5 mt-3'>
        <AthleticsForm onSubmit={submitAthletics} data={data} />
      </div>
    </div>
  );

};

export default AthleticsFormContainer;