import keycode from 'keycode';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    commitOnBlur: PropTypes.bool,
    intialValue: PropTypes.string,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
}

const defaultProps = {
    commitOnBlur: false
}

class TodoTextInput extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            text: this.props.intialValue || ''
        }
    }

    onKeyDown = e => {
        if(this.props.onCancel && e.keyCode === keycode.codes.esc){
            this.props.onCancel();
        }
        else if(e.keyCode === keycode.codes.enter){
            this.commmitChanges();
        }
    };

    onChange = e => {
        this.setState({ text: e.target.value });
    };

    onBlur = () => {
        if(this.props.commitOnBlur){
            this.commmitChanges();
        }
    };

    commmitChanges() {
        const newText = this.state.text.trim();
        if(this.props.onDelete && !newText){
            this.props.onDelete();
        } else if(this.props.onCancel && newText === this.props.intialValue){
            this.props.onCancel();
        } else if(newText) {
            this.props.onSave(newText);
            this.setState({ text: '' })
        }
    }

    render() {
        const { placeholder, className } = this.props

        return(
            <input
                onKeyDown={this.onKeyDown}
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={this.state.text}
                placeholder={placeholder}
                className={className}
            />
        )
    }
}

TodoTextInput.propTypes = propTypes;
TodoTextInput.defaultProps = defaultProps;

export default TodoTextInput;