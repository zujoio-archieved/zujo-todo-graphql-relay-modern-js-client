import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string
}

class EmailInput extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            text: this.props.intialValue || ''
        }
    }

    render() {
        const { name, placeholder, className, onChange } = this.props

        return(
            <input
                name={name}    
                placeholder={placeholder}
                className={className}
                onChange={onChange}
            />
        )
    }
}

EmailInput.propTypes = propTypes;

export default EmailInput