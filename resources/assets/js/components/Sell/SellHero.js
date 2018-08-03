import React, {Component} from 'react';

export default class MessagesHero extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="jumbotron jumbotron-fluid animated fadeIn" id="SellHero">
                <div className="container">
                    <div className="buying-container">
                        <h3 className="text-center">Selling</h3>
                        <hr className="green-underline"/>
                    </div>

                </div>
            </div>
        );
    }
}
