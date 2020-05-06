import React from 'react';
import './ourButton.scss';

const Button = ({children, inverted, ...otherProps}) =>(
    <button className={`${inverted? 'inverted': ''} custom-button `} {...otherProps}>
        {children}
    </button>

)


export default Button;