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
        let courses = this.props.items.map((item, index) => {
            return <Course name={item.name} price={item.price}
                key={index} sumPrice={this.sumPrice} active={item.active}/> 
        })

        return(
            <div>
                <h1>Buy courses:</h1>
                <div id="courses"> { courses }</div>
                <p id="total">Total: <b>${this.state.total}</b> </p>
            </div>
        )
    }
}

export default CourseSale;