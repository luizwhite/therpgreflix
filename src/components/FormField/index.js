import React from 'react';
import PropTypes from 'prop-types';

import {
  PlaceholderSpan, Label, Input, ColorWrapper, Color, FormFieldWrapper,
} from './style';

function FormField({
  value, name, type, placeholder, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const isColorInput = type === 'color';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {/* {label} */}
        <br />
        {isColorInput ? (
          <ColorWrapper>
            <span>Cor: </span>
            <Color id={fieldId} name={name} type={type} value={value} onChange={onChange} />
          </ColorWrapper>
        ) : (
          <div style={{ position: 'relative' }}>
            <Input
              as={tag}
              name={name}
              type={type}
              value={value}
              placeholder=""
              onChange={onChange}
            />
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
          </div>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
