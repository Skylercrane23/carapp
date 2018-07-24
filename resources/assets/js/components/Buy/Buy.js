import React, {Component} from 'react';
import axios from "axios";


import BuyHero from './SubComponents/BuyHero';
import MyBuyPosts from './SubComponents/MyBuyPosts';
import CreatePost from './SubComponents/CreatePost';

export default class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPosts: [],
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
            <div id="Buy">

                <BuyHero/>

                <div className="container">

                    <MyBuyPosts
                        myPosts={this.state.myPosts}
                    />
                </div>

            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
