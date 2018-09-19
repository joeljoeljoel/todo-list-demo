import React from 'react';
import { connect } from 'react-redux';

import Todos from './Todos';

class TodoLists extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    render() {
        //const { lists, selected } = this.props;
        let lists = [];
        let selected = '';

        return (
            <>
                <div className="input-group">
                    <label htmlFor="list_name">New List</label><br />
                    <input type="text" value={this.state.name} id="list_name"
                        onChange={e => {
                            this.setState({
                                name: e.target.value
                            });
                        }}
                        onKeyPress={e => {
                            if (e.key == 'Enter') {
                                //TODO
                                //TODO
                                this.setState({
                                    name: ''
                                });
                            }
                        }}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lists">Select a List</label><br />
                    <select value={selected} id="lists" onChange={e => {
                        //TODO
                    }}>
                        <option value=""></option>
                        {
                            lists.map((list, idx) => {
                                return (
                                    <option value={list.name} key={`list_${idx}`}>{list.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <Todos />
            </>
        );
    }
}

export default TodoLists;
