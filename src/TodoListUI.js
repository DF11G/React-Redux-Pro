import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    render() {
        return (
            <Fragment>
                <Input
                    value={this.props.inputValue}
                    placeholder='What to do?'
                    style={{ width: '300px' }}
                    onChange={this.props.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={this.props.handleClickChange}
                >Primary Button</Button>
                <List
                    //这里使用antd的模板
                    bordered
                    style={{ marginTop: '10px', width: '300px' }}
                    dataSource={this.props.list}
                    renderItem={
                        (item, index) => {
                            return <List.Item
                                //这里要注意 箭头函数括号内不能加index，否则会改变index的指向，变成箭头函数内部的index，数值为undefined
                                onClick={() => { this.props.handleDeleteChange(index) }}
                            >{item}</List.Item>
                        }
                    }
                />
            </Fragment>
        )
    }
}

export default TodoListUI

