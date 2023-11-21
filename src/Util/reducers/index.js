import APIOperations from './APIOperations';

const rootReducer = (state, action) => {
    return {
        APIOperations: APIOperations(state, action)
    };
};

export default rootReducer;
