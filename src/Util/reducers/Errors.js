import { ActionType } from "../actions/APISActions";

/**
 * Manejo de Errores de las Peticiones Axios
 * @param {state} state 
 * @param {Object} action 
 * @returns {state.error}
 */
const Errors = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case ActionType.ERROR:
            const errors = {
                message: payload.message,
                status: payload.response.status,
                statusText: payload.response.statusText,
            };
            return {
                ...state,
                error: errors
            }
        default:
            return state.error
    }
}

export default Errors;