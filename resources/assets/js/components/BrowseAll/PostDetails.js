import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from "axios/index";

export default class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    // GET MY POSTS
    componentDidMount() {
        axios.get('/api/posts/'  + this.props.match.params.id)
            .then(res => {
                const posts = res.data;
                this.setState({
                    posts: posts
                })
            });
    }


    render() {


        var styles = {
            marginTop: '100px',
        };

        return (
            <div className="container" style={styles}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-body">
                                {this.state.posts.id}<br/>
                                {this.state.posts.title}<br/>
                                {this.state.posts.description}<br/>
                                ${this.state.posts.budget}<br/>
                                {this.state.posts.mileage}<br/>
                                {this.state.posts.location}<br/>
                                {this.state.posts.timeframe}<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
