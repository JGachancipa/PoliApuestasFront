import React, { useContext, useEffect } from 'react'
import ChampionshipForm from '../components/ChampionshipForm'
import APISContext from '../../../Util/context/APISContext';
import { APIURL, PAGES } from '../../constants/Constants';
import { BASIC_STRUCTURE } from '../util/BasicFormDataStructure';
import { useParams } from 'react-router-dom';

const ChampionshipFormContainer = () => {
  const { id } = useParams();
  console.log(id + 'test')
  const url = `${APIURL}${PAGES.CHAMPIONSHIP}`;
  const { state, getAPISInfo, postAPISData } = useContext(APISContext);

  const submitChampionship = (data) => {
    const url = APIURL + PAGES.CHAMPIONSHIP;
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
      <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
      <div className='ps-5 pe-5 mt-3'>
        <ChampionshipForm onSubmit={submitChampionship} data={data} />
      </div>
    </div>
  );

};




// const ChampionshipFormContainer = ({ id = 2 }) => {

//   const { state, postAPISData, getAPISInfo } = useContext(APISContext);


//   // const submitChampionship = (data) => {
//   //   const url = APIURL + PAGES.CHAMPIONSHIP;
//   //   postAPISData(data, url);
//   // };

//   useEffect(() => {
//     if (!state?.APISContext) {
//       getAPISInfo(APIURL + PAGES.CHAMPIONSHIP);
//     }
//   }, [state, getAPISInfo]);

//   console.log(state)

//   if (!state?.APIOperations) return <div>...Cargando</div>

//   // return (
//   //   <div>
//   //     <h1 className='mt-2 mb-4 pb-2' id='tittle'>Crear Campeonato</h1>
//   //     <div className='ps-5 pe-5 mt-3'>
//   //       <ChampionshipForm onSubmit={submitChampionship} data={state.data} />
//   //     </div>
//   //   </div>
//   // );
// };

export default ChampionshipFormContainer;
