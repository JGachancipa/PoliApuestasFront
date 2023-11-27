import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import PrizeForm from '../components/PrizeForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';
import { DEFAULT_VALUES_PRIZE } from '../util/BasicFormDataStructure';
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

  // Estado del Componente
  const [prize, setPrize] = useState();
  const [errors, setErrors] = useState();

  // Uso del Contexto
  const { getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  const submitPrize = (data) => {

    const url = APIURL + PAGES.PRIZE;
    data.id
      ? putAPISInfo(url, data, PAGES.PRIZETABLE)
      : postAPISData(data, url, PAGES.PRIZETABLE);
  };
  // Consulta de informacion de Campeonatos
  useEffect(() => {
    if (!prize && id !== 'add' && !errors) {
      getAPISInfo(url, id)
        .then(({ data }) => setPrize(data))
        .catch(err => setErrors({ status: err.response.status, statusText: err.response.statusText }));
    }
  }, [getAPISInfo, prize, errors, id, url]);

  // Validacion de Errores
  if (errors) return <Errors errors={errors} />

  // Spinner de Cargado de informacion
  if (!prize && id !== 'add') return <Loading />

  const data = prize && id !== 'add' ? prize : DEFAULT_VALUES_PRIZE;

  return (
    <div className="d-flex justify-content-center">
      <div className='card p-3 mb-2' style={{ width: '50rem' }}>
        <div className="text-center">
          <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Premios</h1>
        </div>
        <div className='ps-5 pe-5 mt-3'>
          <PrizeForm onSubmit={submitPrize} data={data} />
        </div>
      </div>
    </div>
  );

};
export default PrizeFormContainer;
