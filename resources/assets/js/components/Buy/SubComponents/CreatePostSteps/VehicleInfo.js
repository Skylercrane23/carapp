import React, {Component} from 'react';

export default class VehicleInfo extends Component {


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
                                VehicleInfo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

