import React, { Component } from 'react';

import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

//import "./JSONEditorDemo.css";

export default class EditJSON extends Component {
  componentDidMount() {
    const options = {
      mode: 'code',
      onChangeText: this.props.onChange,
      schema: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            productId: {
              type: 'number',
            },
            priceId: {
              type: 'string',
            },
            count: {
              type: 'number',
            },
          },
          required: ['productId', 'priceId', 'count'],
        },
      },
      onValidationError: (errors) => {
        this.props.setValidProducts(!errors.length);
      },
    };

    this.jsoneditor = new JSONEditor(this.container, options);
    this.jsoneditor.set(this.props.json);
  }

  componentWillUnmount() {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  /*
  componentDidUpdate() {
    this.jsoneditor.update(this.props.json);
  }
  */

  render() {
    return (
      <div
        style={{ minWidth: '400px', height: '350px' }}
        className="jsoneditor-react-container"
        ref={(elem) => (this.container = elem)}
      />
    );
  }
}
