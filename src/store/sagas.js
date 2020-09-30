import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST, GET_AJAX_VALUE } from './Actiontype'
import axios from 'axios'
import { getInitListAction } from './actionCreators'


function* getInitList() {
    const res = yield axios.get('/todolist.json')
    const action = getInitListAction(res.data)
    // yield put(action)
    console.log(res.data)
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;