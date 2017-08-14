import React from 'react';
import TextField from 'material-ui/TextField';

class EnterTextField extends React.Component {
    constructor(props) {
        super(props);
        const {
            onEnterKeyPress,
            ...other
        } = props;
        this.onEnterKeyPress = onEnterKeyPress;
        this.other = other;
    }

    handleKeyPress(event) {
        if (event.charCode === 13) {
            this.onEnterKeyPress(event);
        }
    }

    render() {
        return (
            <TextField onKeyPress={e => this.handleKeyPress(e)}
                {...this.other}/>
        );
    }
}

export default EnterTextField;

