import React, {Component} from 'react';

export default class BuyHero extends Component {


    render() {

        return (
            <div className="jumbotron jumbotron-fluid" id="BuyHero">
                <div className="container">
                    <div className="buying-container">
                        <h3 className="text-center">Buying</h3>
                        <hr className="green-underline"/>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <i className="fas fa-plus-circle blue"></i>
                                <h4 className="mt-3">Step 1</h4>
                                <p>Click the plus Icon on the right side of the screen to begin creating your post.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fas fa-clipboard-check blue"></i>
                                <h4 className="mt-3">Step 2</h4>
                                <p>Specify what vehicle, options, and features you want in your next car.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fas fa-handshake blue"></i>
                                <h4 className="mt-3">Step 3</h4>
                                <p>Post your listing, sit back and wait for offers to come to you.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container ">
                    <div className="btn-container">
                        <a className="create-post-btn" href="#"><i className="fas fa-plus-circle"></i></a>
                    </div>
                </div>

            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
