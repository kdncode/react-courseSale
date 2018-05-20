import React, { Component } from 'react';
import Course from './Course'

class CourseSale extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this)
    }

    sumPrice(price) {
        this.setState({ total: this.state.total + price })
    }

    render() {
        console.log(this.props.items)
        let courses = this.props.items.map((item, index) => {
            return <Course /> 
        })

        return(
            <div>
                
            </div>
        )
    }
}

export default CourseSale;