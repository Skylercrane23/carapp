import React, {Component} from 'react';

export default class DetailsForm extends Component {
    
    render() {

        return (
            <div className="details-form">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.title}
                            name="title"
                            ref="title"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <input
                            onChange={this.props.onChange}
                            value={this.props.postDetails.body}
                            name="body"
                            ref="body"
                            type="text"
                            className="form-control"/>
                    </div>
                    <button onClick={this.props.onClick} type="submit" className="btn btn blue">Update</button>
                </form>
            </div>
        );
    }
}

/*if (document.getElementById('messages')) {
    ReactDOM.render(<Messages/>, document.getElementById('messages'));
}*/
