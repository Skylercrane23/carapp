import React, {Component} from 'react';
import ReactDOM from "react-dom";

export default class Messages extends Component {


    render() {

        var styles = {
            marginTop: '100px',
        };

        return (
            <div className="container" style={styles}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-body">
                                Messages Component
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
