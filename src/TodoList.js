import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'
import { getInitListAction, handleInputChangeAction, handleClickChangeAction, handleDeleteChangeAction } from './store/actionCreators'
import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, CHANGE_DELETE_VALUE, GET_AJAX_VALUE } from './store/Actiontype'
import Axios from 'axios'
const data = [
	'Faker',
	'Bang',
	'Bengi'
]
class TodoList extends Component {
	constructor(props) {
		super(props)
		//使用store的getState()方法从store提取数据
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleClickChange = this.handleClickChange.bind(this)
		this.handleDeleteChange = this.handleDeleteChange.bind(this)
		store.subscribe(this.handleStoreChange) // 可以正常工作
		//store.subscribe(this.handleClickChange) // 监听函数为按钮事件时会一直执行直到崩溃
	}
	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleClickChange={this.handleClickChange}
				handleStoreChange={this.handleStoreChange}
				handleInputChange={this.handleInputChange}
				handleDeleteChange={this.handleDeleteChange}
				getAjaxValue={this.getAjaxValue}
			/>
		)
	}

	componentDidMount() {
		// Axios.get('/todolist.json').then((res) => {
		// 	const data = res.data
		// 	const action = {
		// 		type: GET_AJAX_VALUE,
		// 		value: data
		// 	}
		// 	store.dispatch(action)
		// })
		const action = getInitListAction()
		store.dispatch(action)
	}

	handleInputChange(e) {
		const action = handleInputChangeAction(e.target.value)
		//使用dispatch()方法将action传给store，然后store会自动转发给reducer
		store.dispatch(action)
	}
	handleStoreChange() {
		this.setState(store.getState())
	}
	handleClickChange() {
		const action = handleClickChangeAction()
		store.dispatch(action)
	}
	handleDeleteChange(index) {
		const action = handleDeleteChangeAction(index)
		console.log(index)
		store.dispatch(action)
	}
}
export default TodoList