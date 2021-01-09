import React from 'react';
import { useFormik } from 'formik';

const LoginForm: React.FC = (): React.ReactElement => {
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" {...getFieldProps('email')} />
    </form>
  );
};

export default LoginForm;
