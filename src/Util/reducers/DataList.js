import { ActionType } from "../actions/APISActions";

/**
 * Modificacion del atributo dataList del State
 * @param {state} state 
 * @param {Object} action 
 * @returns {state}
 */
const DataList = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case ActionType.GET:
            return {
                ...state,
                dataList: payload
            };
        case ActionType.POST:
            return { ...state };
        case ActionType.DELETE:
            return {
                ...state,
                dataList: payload
            };
        case ActionType.PUT:
            let retValues = { ...state };

            if (state.dataList) {
                retValues = state.dataList.map(data =>
                    data.id === payload.id ? payload : data);
            }
            return retValues;
        default:
            return state;
    };
};

export default DataList;