# Material UI Submit Field

This is a text field that allows the execution of a function when the user presses the enter key. It is
highly customizable and allows all of the options of a TextField from [Material-UI](http://material-ui.com/).

## Installation

```sh
npm install --save material-ui-submit-field
```

## Usage

An example of a enter text field that alerts the user:

```js
import EnterTextField from 'material-ui-submit-field';

<EnterTextField                       
    onEnterKeyPress={() => this.props.alertUser()} />
```

Obviously, you can use this without the ES6 syntax.

Note that all properties are forwarded to the TextField by default, so anything
that is useful on the material text field can be used here as well.

The only properties that are intercepted are these:

| Property | Type | Description | Required |
| ----- | ---- | ---- | ---- |
| onEnterKeyPress | `function` | Callback for user pressing the enter key | `true` |

## Small Print

### License

`Material UI Submit Field` is released under the MIT license.

### Author

Mark Katerberg ([@diablomarcus](http://twitter.com/diablomarcus))
