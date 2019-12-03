import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    //styling inside of a function with a condition if true or false.
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            margin: '6px',
            padding: '13px',
            borderBottom: '2px #000000 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '} {this.id} {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
//proptypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'none',
    fontSize: '24px',
    color: '#ff0000',
    border: 'none',
    paddingBottom: '20px',
    borderRadius: '5px',
    float: 'right',
    justifySelf: 'center'
}
export default TodoItem
