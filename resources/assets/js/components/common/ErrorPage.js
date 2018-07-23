import React, {Component} from 'react';

export default class ErrorPage extends Component {

    render() {
        return (
            <div id="ErrorPage">
                <div className="alert mt-5 pt-5 animated fadeIn">
                    <h2 className="text-center">Sorry, an error has occurred</h2>
                    <h4 className="text-center">{this.props.errorInfo}</h4>
                </div>
            </div>
        );
    }
}