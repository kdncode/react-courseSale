import React, { Component } from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active: false
        };
        this.clicker = this.clicker.bind(this);
    }

    clicker() {
        let newActive = !this.state.active;
        this.setState( { active: newActive } )
        this.props.sumPrice( newActive ? this.props.price : - this.props.price )
    }
    
    render() {
        return(
            <div>
                <p>{this.props.name} - <b>${this.props.price}</b>
                    <button onClick={this.clicker}>Add</button>
                </p>
            </div>
        )
    }
}

export default Course;
