import React, { useContext, useEffect } from 'react'
import PrizeForm from '../components/PrizeForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { BASIC_STRUCTURE } from '../util/BasicFormDataStructure';
import { useParams } from 'react-router-dom';

const PrizeFormContainer = () => {
  const { id } = useParams();
  console.log(id + 'test')
  const url = `${APIURL}${PAGES.PRIZE}`;
  const { state, getAPISInfo, postAPISData } = useContext(APISContext);

  const submitPrize = (data) => {
    const url = APIURL + PAGES.PRIZE;
    postAPISData(data, url);
  };

  useEffect(() => {
    if (id !== undefined) {
      if (!state?.APIOperations) {
        getAPISInfo(url, id);
      }
    }
  }, [getAPISInfo, state, url, id])

  if (id !== undefined) if (!state?.APIOperations) return <div>...Cargando</div>

  const data = state === undefined ? BASIC_STRUCTURE : state.data;

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
