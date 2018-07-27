import React, {Component} from 'react';

export default class BrowseAllHero extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="jumbotron jumbotron-fluid animated fadeIn" id="BrowseAllHero">
                <div className="container">
                    <div className="buying-container">
                        <h3 className="text-center">People are looking to buy</h3>
                        <h5 className="text-center">Sellers, find your match and sell!</h5>
                        <hr className="green-underline"/>
                    </div>

                </div>
            </div>
        );
    }
}
