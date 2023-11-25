import { ActionType } from "../actions/APISActions";

/**
 * Acciones Para el Atributo object del Estado
 * @param {state} state 
 * @param {Object} action 
 * @returns {state.object}
 */
const DataObject = (state, action) => {
    let { payload, type } = action
    switch (type) {
        case ActionType.FILTER_EDIT:
            if (state.dataList?.dataList)
                payload = state.dataList.dataList.find(data => data.id === payload.id);
            return {
                ...state,
                object: payload
            };
        default:
            return state.object;
    };
};

export default DataObject;