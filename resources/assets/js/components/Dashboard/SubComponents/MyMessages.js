import React, {Component} from 'react';

export default class MyMessages extends Component {


    render() {

        return (
            <div id="MyMessages">
                <div className="post-heading">
                    <h4>My Messages</h4>
                    <a href="/home/sell" className="blue">All Messages <i className="fas fa-chevron-right"></i></a>
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
