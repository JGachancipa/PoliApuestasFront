import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'

import RaffleForm from '../components/RaffleForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { DEFAULT_VALUES_RAFFLE} from '../util/BasicFormDataStructure';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';

/**
 * Generacion Formulario de Campeonatos
 * @returns {RaffleForm}
 */
const RaffleFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.RAFFLE}`;

  // Estado del Componente
  const [errors, setErrors] = useState();
  const [raffle, setRaffle] = useState();

  // Uso del Contexto
  const { getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  // Metodo de insercion/actualizacion de Informacion de Campeonatos
  const submitRaffle = (data) => {
    const url = APIURL + PAGES.RAFFLE;
    data.id
      ? putAPISInfo(url, data, PAGES.RAFFLETABLE)
      : postAPISData(data, url, PAGES.RAFFLETABLE);
  };

  // Consulta de informacion de Campeonatos
  useEffect(() => {
    if (!raffle && id !== 'add' && !errors) {
      getAPISInfo(url, id)
        .then(({ data }) => setRaffle(data))
        .catch(err => setErrors({ status: err.response.status, statusText: err.response.statusText }));
    }
  }, [getAPISInfo, raffle, errors, id, url]);

  // Validacion de Errores
  if (errors) return <Errors errors={errors} />

  // Spinner de Cargado de informacion
  if (!raffle && id !== 'add') return <Loading />

  // Definicion de Valores del Formulario
  const data = raffle && id !== 'add' ? raffle : DEFAULT_VALUES_RAFFLE;

  return (
    <div className="d-flex justify-content-center">
      <div className='card p-3 mb-2' style={{ width: '50rem' }}>
        <div className="text-center">
          <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Rifa</h1>
        </div>
        <div className='ps-5 pe-5 mt-3'>
          <RaffleForm onSubmit={submitRaffle} data={data} />
        </div>
      </div>
    </div>
  );

};

export default RaffleFormContainer;