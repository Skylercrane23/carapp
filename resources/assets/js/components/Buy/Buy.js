import React, {Component} from 'react';
import axios from "axios";


import BuyHero from './SubComponents/BuyHero';
import MyBuyPosts from './SubComponents/MyBuyPosts';

export default class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPosts: [],
            newPost: {
                title: '',
                body: '',
            }
        };
        this.createPost = this.createPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    handleInput(key, e) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newPost);
        state[key] = e.target.value;
        this.setState({newPost: state});
    }

    createPost(e) {
        e.preventDefault();
        axios.post('/api/posts', {
            body: this.state.newPost.body,
            title: this.state.newPost.title
        }).then( (res) => {
            this.setState({
                newPost: {
                    title: '',
                    body: '',
                }
            });
            window.location.replace("http://carapp.test/dashboard");
        });
    }

    render() {

        return (
            <div id="Buy">

                <BuyHero/>

                <div className="container">
                    <MyBuyPosts myPosts={this.state.myPosts}/>
                </div>

                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={(e) => this.handleInput('title', e)} type="text" className="form-control"
                                   id="title"
                                   aria-describedby="emailHelp" placeholder="Enter Title"
                                   value={this.state.newPost.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <input onChange={(e) => this.handleInput('body', e)} type="text" className="form-control"
                                   id="body"
                                   placeholder="Body"
                                   value={this.state.newPost.body}/>
                        </div>
                        <button onClick={this.createPost} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
