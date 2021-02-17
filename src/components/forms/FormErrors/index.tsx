import React from 'react';
import { ErrorMessage } from 'formik';
import { Alert } from 'antd';
import styles from './FormErrors.module.sass';

interface FormErrorsProps {
  errors: Object;
}

const FormErrors: React.FC<FormErrorsProps> = ({ errors }) => (
  <div>
    {Object.keys(errors).map((key, index) => (
      <ErrorMessage name={key} key={`${key}-${index}`}>
        {(msg) => <Alert className={styles.error} type="error" message={msg} closable />}
      </ErrorMessage>
    ))}
  </div>
);

export default FormErrors;
