import React, {Component} from 'react';

export default class PotentialBuyers extends Component {


    render() {

        return (
            <div id="PotentialBuyers">
                <div className="post-heading">
                    <h4>Potential Buyers</h4>
                    <a href="/home/sell" className="blue">View All Potential Buyers <i className="fas fa-chevron-right"></i></a>
                </div>
                <div className="coming-soon card">
                    <h5 className="dark-grey">Feature Coming Soon</h5>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
