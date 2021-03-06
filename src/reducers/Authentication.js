import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/Type';

const INITIAL_STATE = {
    email: '',
    password: ''
}
export default (state = INITIAL_STATE, action) => {
    //console.log(action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payLoad };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payLoad };
        default:
            return state
    }
}