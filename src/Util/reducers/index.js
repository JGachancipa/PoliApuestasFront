import DataList from './DataList';
import DataObject from './DataObject';
import Errors from './Errors';

/**
 * Reductor De Acciones Para los Componentes
 * @param {state} state 
 * @param {Object} action 
 * @returns {state}
 */
const rootReducer = (state, action) => {
    return {
        dataList: DataList(state.dataList, action),
        object: DataObject(state, action),
        error: Errors(state, action),
    };
};

export default rootReducer;