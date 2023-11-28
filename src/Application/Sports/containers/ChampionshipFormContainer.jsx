import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'

import ChampionshipForm from '../components/ChampionshipForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { DEFAULT_VALUES_CHAMPIONSHIP } from '../util/BasicFormDataStructure';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';

/**
 * Generacion Formulario de Campeonatos
 * @returns {ChampionshipForm}
 */
const ChampionshipFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.CHAMPIONSHIP}`;

  // Estado del Componente
  const [errors, setErrors] = useState();
  const [championship, setChampionship] = useState();

  // Uso del Contexto
  const { getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  // Metodo de insercion/actualizacion de Informacion de Campeonatos
  const submitChampionship = (data) => {
    const url = APIURL + PAGES.CHAMPIONSHIP;
    data.id
      ? putAPISInfo(url, data, PAGES.CHAMPIONSHIP_TABLE)
      : postAPISData(data, url, PAGES.CHAMPIONSHIP_TABLE);
  };

  // Consulta de informacion de Campeonatos
  useEffect(() => {
    if (!championship && id !== 'add' && !errors) {
      getAPISInfo(url, id)
        .then(({ data }) => setChampionship(data))
        .catch(err => setErrors({status: err.response.status, statusText: err.response.statusText}));
    }
  }, [getAPISInfo, championship, errors, id, url]);
  
  // Validacion de Errores
  if (errors) return <Errors errors={errors} />

  // Spinner de Cargado de informacion
  if (!championship && id !== 'add') return <Loading />

  // Definicion de Valores del Formulario
  const data = championship && id !== 'add' ? championship : DEFAULT_VALUES_CHAMPIONSHIP;

  return (
    <div className="d-flex justify-content-center">
      <div className='card p-3 mb-2' style={{ width: '50rem' }}>
        <div className="text-center">
          <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
        </div>
        <div className='ps-5 pe-5 mt-3'>
          <ChampionshipForm onSubmit={submitChampionship} data={data} />
        </div>
      </div>
    </div>
  );

};

export default ChampionshipFormContainer;