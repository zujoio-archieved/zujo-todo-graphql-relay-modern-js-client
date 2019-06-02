import keycode from 'keycode';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    commitOnBlur: PropTypes.bool,
    intialValue: PropTypes.string,

    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
}

const defaultProps = {
    commitOnBlur: false
}

class PostTextInput extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: this.props.intialValue || '',
            description: this.props.intialValue || ''
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

    onChangetitle = e => {
        this.setState({ title: e.target.value });
    };
    onChangedescription = e => {
        this.setState({description: e.target.value});
    }

    onBlur = () => {
        if(this.props.commitOnBlur){
            this.commmitChanges();
        }
    };

    commmitChanges() {
        const newTitle = this.state.title.trim();
        const newDescription = this.state.description.trim();
        if(this.props.onDelete && !newTitle && !newDescription){
            this.props.onDelete();
        } else if(this.props.onCancel && newTitle === this.props.intialValue){
            this.props.onCancel();
        } else if(newTitle && newDescription) {
            this.props.onSave(newTitle,newDescription);
            this.setState({ title: '' , description: ' '});
        }
    }

    render() {
        const { placeholder, className } = this.props

        return(
            <>
            <input
                onKeyDown={this.onKeyDown}
                onChange={this.onChangetitle}
                onBlur={this.onBlur}
                value={this.state.title}
                placeholder="Add Title"
                className={className}
            />
            <input
            onKeyDown={this.onKeyDown}
            onChange={this.onChangedescription}
            onBlur={this.onBlur}
            value={this.state.description}
            placeholder="Description"
            className={className}
        />
        </>
        )
    }
}

PostTextInput.propTypes = propTypes;
PostTextInput.defaultProps = defaultProps;

export default PostTextInput;