import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';

import MyPosts from './SubComponents/MyPosts';
import DashHero from './SubComponents/DashHero';
import PotentialBuyers from './SubComponents/PotentialBuyers';
import MyMessages from './SubComponents/MyMessages';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPosts: [],
            potentialPosts: [],
            myMessages: [],
        };
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/myposts')
            .then(res => {
                const userPosts = res.data;
                this.setState({
                    myPosts: userPosts
                })
            });
    }


    render() {

        return (
            <div id="Dashboard" className="animated fadeIn">

                <DashHero/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <MyPosts myPosts={this.state.myPosts}/>
                            <PotentialBuyers/>
                        </div>
                        <div className="col-md-5">
                            <MyMessages/>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard/>, document.getElementById('dashboard'));
}
