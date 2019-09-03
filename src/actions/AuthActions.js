import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './Type';

export const emailChanged = (text) => {
    //console.log('email: ', text)
    return {
        type: EMAIL_CHANGED,
        payLoad: text
    }
}
export const passwordChanged = (text) => {
    //console.log('password: ', text)
    return {
        type: PASSWORD_CHANGED,
        payLoad: text
    }
}