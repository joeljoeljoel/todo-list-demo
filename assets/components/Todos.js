import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

import {
    getList
} from '../modules/Todo/actions';

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    render() {
        const { lists, selected } = this.props;

        if (!selected) {
            return null;
        }

        const list = getList(lists, selected);
        //const { todos } = list;

        let todos = [];

        return (
            <>
                <div className="input-group todo-form">
                    <label htmlFor="todo_name">New Todo</label><br />
                    <input type="text" value={this.state.name} id="todo_name"
                        onChange={e => {
                            this.setState({
                                name: e.target.value
                            });
                        }}
                        onKeyPress={e => {
                            if (e.key == 'Enter') {
                                //TODO
                                this.setState({
                                    name: ''
                                });
                            }
                        }}
                    />
                </div>
                <div className="todos">
                    {
                        todos.map((todo, idx) => {
                            return (
                                <Todo list={list.name} todo={todo} idx={idx} key={`todo_${idx}`} />
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

export default Todos;
