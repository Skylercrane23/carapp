import React, {Component} from 'react';

export default class DashHero extends Component {


    render() {

        return (
            <div className="jumbotron jumbotron-fluid" id="DashHero">
                <div className="container">
                    <div className="how-it-works">
                        <h3 className="">How to use CarApp</h3>
                        <hr className="green-underline"/>
                        <p className="">Below is your dashboard that will display your recent posts, list of potential
                            buyers, and any messages or offers you have recieved. If you are looking to buy a car you
                            can click the ‘Buy’ link in the navigation bar and follow the instructions. To sell a
                            vehicle click on the ‘Sell’ link in the navigation bar and follow the instructions. We hope
                            to make your car buying and selling experience easy with the Car App! </p>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
