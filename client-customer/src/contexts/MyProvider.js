import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { // global state
            // variables
            token: '',
            customer: null,
            mycart: [], //update 2.2.18.1
            
            // functions
            setToken: this.setToken,
            setCustomer: this.setCustomer,
            setMycart: this.setMycart//update 2.2.18.1
        };
    }
    setToken = (value) => {
        this.setState({ token: value });
    }
    setCustomer = (value) => {
        this.setState({ customer: value });
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
    setMycart = (value) => {
        this.setState({ mycart: value });//update 2.2.18.1
    }
}
export default MyProvider;
