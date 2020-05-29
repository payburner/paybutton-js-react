import React from 'react';
class PayButton extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }



    componentDidMount() {
        this.myRef.current.addEventListener('settled', event => {
            if (typeof this.props.onSettled === 'function') {
                this.props.onSettled(event.detail);
            }
        });
    }


    render() {
        if (typeof this.props.price !== 'undefined') {
            return (
                <pay-button ref={this.myRef} buttonid={this.props.buttonid} price={this.props.price} /> );
        }
        else {
            return (
                <pay-button ref={this.myRef} buttonid={this.props.buttonid} /> );
        }
    }
}

export default PayButton;