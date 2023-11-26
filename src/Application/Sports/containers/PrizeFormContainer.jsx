import { useParams } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'
import PrizeForm from '../components/PrizeForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';
// En 'PrizeFormContainer.jsx'
//import { BASIC_STRUCTURE, DEFAULT_VALUES } from '../util/BasicFormDataStructure';

// Resto del código...
/**
 * Generacion Formulario de Campeonatos
 * @returns {PrizeForm}
 */

const PrizeFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.PRIZE}`;

   // Uso del Contexto
   const { state, getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  const submitPrize = (data) => {

    const url = APIURL + PAGES.PRIZE;
    data.id
    ? putAPISInfo(url, data, PAGES.PRIZETABLE)
    : postAPISData(data, url, PAGES.PRIZETABLE);
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

 const data =  state.object.object;

  return (
    <div>
      <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Premios</h1>
      <div className='ps-5 pe-5 mt-3'>
        <PrizeForm onSubmit={submitPrize} data={data} />
      </div>
    </div>
  );

};
export default PrizeFormContainer;
