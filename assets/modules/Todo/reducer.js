import { fromJS } from 'immutable';


/** Todo Store **/
const todoInitialState = fromJS({
})

export const todoReducer = function (state = todoInitialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
