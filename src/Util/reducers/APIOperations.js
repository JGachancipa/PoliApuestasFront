import { ActionType } from "../actions/APISActions";

const APIOperations = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case ActionType.GET:
            return {
                ...state,
                data: payload
            };
        case ActionType.POST:
            return {
                ...state,
                data: payload
            };
        // case 'PUT':

        case ActionType.DELETE:
            return state.APIOperations.data.filter(element => element.id !== payload.id);
        default:
            return state;
    }
}

export default APIOperations;
