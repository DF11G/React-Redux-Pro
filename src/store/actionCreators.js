import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, CHANGE_DELETE_VALUE, GET_AJAX_VALUE, GET_INIT_LIST } from './Actiontype'

export const handleInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}
export const handleClickChangeAction = () => {
    return {
        type: CHANGE_LIST_VALUE
    }
}
export const handleDeleteChangeAction = (index) => {
    return {
        type: CHANGE_DELETE_VALUE,
        value: index
    }
}
export const getInitListAction = (value) => {
    return {
        type: GET_INIT_LIST,
        value
    }
}