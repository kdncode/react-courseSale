import React, { Component } from 'react';

class Course extends Component {
    render() {
        return(
            <div>
                {this.props.name}
                {this.props.price}
            </div>
        )
    }
}

export default Course;