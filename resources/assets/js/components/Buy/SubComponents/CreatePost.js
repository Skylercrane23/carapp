import React, {Component} from 'react';
import axios from "axios/index";

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: {
                title: '',
                body: '',
            }
        };
        this.createPost = this.createPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.cancel = this.cancel.bind(this);
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
            this.props.history.push('/home/buy');
        });
    }

    cancel(){
        this.props.history.push('/home/buy');
    }

    render() {

        return (
            <div id="CreatePost">
                <div className="container" style={{marginTop: 100}}>
                    Create Post
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
                        <button onClick={this.createPost} type="submit" className="button blue square">Submit</button>
                        <a className="button transparent-blue" onClick={this.cancel}>Cancel</a>
                    </form>
                </div>
            </div>
        );
    }
}

