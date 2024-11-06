import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        product: '',
        price: '',
        quantity: 1
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
            product: this.state.product,
            price: this.state.price,
            quantity: this.state.quantity,
            totalPrice: this.state.price * this.state.quantity
        };
        this.props.add(itemData);
        this.setState({
            product: '',
            price: '',
            quantity: 1
        });
    }

    render() {
        return (
            <div className="item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.product} placeholder="Enter Product" id="product" onChange={this.handleChange} required />
                    <input type="number" value={this.state.price} placeholder="Enter Price" id="price" onChange={this.handleChange} required />
                    <input type="number" value={this.state.quantity} placeholder="Enter Quantity" id="quantity" onChange={this.handleChange} min="1" required />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItem;