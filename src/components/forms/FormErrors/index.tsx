import React from 'react';
import { ErrorMessage, FormikErrors } from 'formik';
import { Alert } from 'antd';
import styled from 'styled-components';

interface FormErrorsProps {
  errors: FormikErrors<any>;
}

export const FormErrors: React.FC<FormErrorsProps> = ({ errors }) => (
  <div>
    {Object.keys(errors).map((key, index) => (
      <div key={`${key}-${index}`}>
        {key === 'detail' && <Error type="error" message={errors[key]} closable />}
        <ErrorMessage name={key}>
          {(msg) => <Error type="error" message={msg} closable />}
        </ErrorMessage>
      </div>
    ))}
  </div>
);

const Error = styled(Alert)`
  margin: 5px 0;
`;
