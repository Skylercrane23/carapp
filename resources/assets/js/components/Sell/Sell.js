import React, {Component} from 'react';

export default class Sell extends Component {


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
                                Sell Component
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