import React, {Component} from 'react';

export default class TextInput extends Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input
                    onChange={this.props.onChange}
                    value={this.props.postDetails.title}
                    name="title"
                    ref="title"
                    type="text"
                    className="form-control"/>
            </div>
        );
    }
}