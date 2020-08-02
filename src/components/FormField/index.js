import React from 'react';
import PropTypes from 'prop-types';

import {
  PlaceholderSpan, Label, Input, ColorWrapper, Color, FormFieldWrapper,
} from './style';

function FormField({
  value, name, type, placeholder, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const isColorInput = type === 'color';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasSuggestion = Boolean(suggestions.length);

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
              id={fieldId}
              name={name}
              type={type}
              value={value}
              placeholder=""
              onChange={onChange}
              autoComplete={hasSuggestion ? 'off' : 'on'}
              list={hasSuggestion ? `suggestionsFor_${fieldId}` : undefined}
            />
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
          </div>
        )}
        {
          hasSuggestion && (
            <datalist id={`suggestionsFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionsFor_${fieldId}__option_${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
