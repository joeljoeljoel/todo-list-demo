import React from 'react';

export default class Todo extends React.Component {
    render() {
        const { list, todo, idx } = this.props;

        return (
            <div className="todo">
                {todo}
                <a className="delete-todo" onClick={e => {
                    //TODO
                }}>[x]</a>
            </div>
        );
    }
}
