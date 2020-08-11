import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }  

    componentWillUpdate () {
        console.log('[Modal] Will Update');
    }

    render () {
        return (
            <Aux>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div 
                    className={classes.Modal}
                    style={{
                        // translateY(-100vh): slide off the screen
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        // opacity: 0: transparent (not visible)
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
};

export default Modal;