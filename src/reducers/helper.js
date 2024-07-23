const createReducer = (initialState, handlers) =>
    // eslint-disable-next-line default-param-last
    function reducer(state = initialState, action) {
        if (action.type in handlers) {
            return handlers[action.type](state, action);
        }
        return state;
    };

export default createReducer;