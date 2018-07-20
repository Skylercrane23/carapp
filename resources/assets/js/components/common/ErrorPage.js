import React, {Component} from 'react';

export default class ErrorPage extends Component {

    render() {
        return (
            <div>
                <div className="alert mt-5 pt-5 animated fadeIn">
                    <h2>{this.props.errorInfo}</h2>
                    <h2>{this.props.error.toString()}</h2>
                </div>
            </div>
        );
    }
}