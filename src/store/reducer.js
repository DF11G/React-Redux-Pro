import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, CHANGE_DELETE_VALUE, GET_INIT_LIST} from './Actiontype.js'

const defaultState = {
    inputValue: 'Hello!',
    list: [1, 2, 3, 4]
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === CHANGE_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === CHANGE_DELETE_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    } else if (action.type === GET_INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state
}