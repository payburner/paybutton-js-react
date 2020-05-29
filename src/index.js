import React, { useRef, useEffect } from 'react';
class PayButton extends React.Component {

    constructor(props) {
        super(props);
        this.elementRef = useRef(null);
    }



    componentDidMount() {

        this.elementRef.addEventListener((e)=>{
            alert(e.detail);
        });
    }


    render() {

        return (<React.Fragment>
            <pay-button buttonid={this.props.buttonid} ref={this.elementRef}/>
        </React.Fragment>);
    }
}

export default PayButton;