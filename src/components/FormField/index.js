import React from 'react';

import { PlaceholderSpan, Label, InputTagStyled } from './style';

function FormField({
  inputType: InputTag, label, value, name, type, placeholder, onChange,
}) {
  const fieldId = `
    id_${name}
  `;

  return (
    <div>
      <Label htmlFor={fieldId}>
        {label}
        <br />
        <div style={{ position: 'relative' }}>
          {type === 'color' ? (
            <InputTag
              id={fieldId}
              name={name}
              type={type}
              value={value}
              placeholder=""
              onChange={onChange}
              style={{
                borderRadius: '4px',
                marginTop: '5px',
                boxShadow: '0 0 2px 1px rgb(115, 115, 115,.7)',
              }}
            />
          ) : (
            <InputTagStyled
              name={name}
              type={type}
              value={value}
              placeholder=""
              onChange={onChange}
            />
          )}
          <PlaceholderSpan>{placeholder}</PlaceholderSpan>
        </div>
      </Label>
    </div>
  );
}

export default FormField;
