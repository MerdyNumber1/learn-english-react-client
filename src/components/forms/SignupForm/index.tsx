import React from 'react';
import { useFormik } from 'formik';
import { Link as RouterLink } from '@reach/router';
import { Input, Alert, Button, Typography } from 'antd';
import SignupSchema from './schema';
import styles from './SignupForm.module.sass';

const { Text } = Typography;

interface SignupFormValues {
  email: string;
  name: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik<SignupFormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit(data) {
      console.log(data);
    },
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      {errors.email && touched.email && (
        <Alert className={styles.error} type="error" message={errors.email} />
      )}
      {errors.name && touched.name && (
        <Alert className={styles.error} type="error" message={errors.name} />
      )}
      {errors.password && touched.password && (
        <Alert className={styles.error} type="error" message={errors.password} />
      )}
      <Input
        className={styles.input}
        type="email"
        placeholder="Email..."
        {...getFieldProps('email')}
      />
      <Input className={styles.input} type="name" placeholder="Имя..." {...getFieldProps('name')} />
      <Input
        className={styles.input}
        type="password"
        placeholder="Пароль..."
        {...getFieldProps('password')}
      />
      <Button className={styles.button} type="primary">
        Зарегистрироваться
      </Button>
      <div className={styles.login}>
        <Text>Или</Text>
        <RouterLink to="/login"> войти</RouterLink>
      </div>
    </form>
  );
};

export default SignupForm;
