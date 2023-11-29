import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'

import AthleticsForm from '../components/AthleticsForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { DEFAULT_VALUES_ATHLETICS} from '../util/BasicFormDataStructure';
import Loading from '../../General/container/Loading';
import Errors from '../../General/container/Errors';

/**
 * Generacion Formulario de Campeonatos
 * @returns {AthleticsForm}
 */
const AthleticsFormContainer = () => {
  const { id } = useParams();
  const url = `${APIURL}${PAGES.ATHLETICS}`;

  // Estado del Componente
  const [errors, setErrors] = useState();
  const [athletics, setAthletics] = useState();

  // Uso del Contexto
  const { getAPISInfo, postAPISData, putAPISInfo } = useContext(APISContext);

  // Metodo de insercion/actualizacion de Informacion de Campeonatos
  const submitAthletics = (data) => {
    const url = APIURL + PAGES.ATHLETICS;
    data.id
      ? putAPISInfo(url, data, PAGES.ATHLETICSTABLE)
      : postAPISData(data, url, PAGES.ATHLETICSTABLE);
  };

  // Consulta de informacion de Campeonatos
  useEffect(() => {
    if (!athletics && id !== 'add' && !errors) {
      getAPISInfo(url, id)
        .then(({ data }) => setAthletics(data))
        .catch(err => setErrors({ status: err.response.status, statusText: err.response.statusText }));
    }
  }, [getAPISInfo, athletics, errors, id, url]);

  // Validacion de Errores
  if (errors) return <Errors errors={errors} />

  // Spinner de Cargado de informacion
  if (!athletics && id !== 'add') return <Loading />

  // Definicion de Valores del Formulario
  const data = athletics && id !== 'add' ? athletics : DEFAULT_VALUES_ATHLETICS;

  return (
    <div className="d-flex justify-content-center">
      <div className='card p-3 mb-2' style={{ width: '50rem' }}>
        <div className="text-center">
          <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Deporte</h1>
        </div>
        <div className='ps-5 pe-5 mt-3'>
          <AthleticsForm onSubmit={submitAthletics} data={data} />
        </div>
      </div>
    </div>
  );

};

export default AthleticsFormContainer;