import React from 'react';
import './DonateButton.scss';
import {toggleAmount} from '../../../redux/donate/donate.actions';
import {connect }from 'react-redux';

const DButton = ({value, selected, inverted, toggleAmount, ...otherProps}) =>(
    <button className={`${selected===value? 'inverted': ''} custom-donate `} onClick={() => toggleAmount(value)} {...otherProps}>${value}
    </button>

)

const mapDispatchToProps = dispatch => ({
    toggleAmount: value => dispatch(toggleAmount(value))
})

const mapPropsToState = (state) => ({
    selected: state.donate.selected

})

export default connect(mapPropsToState, mapDispatchToProps)(DButton);