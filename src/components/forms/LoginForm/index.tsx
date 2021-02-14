import React from 'react';
import { useFormik } from 'formik';
import { Link as RouterLink } from '@reach/router';
import { Input, Alert, Button, Typography } from 'antd';
import LoginSchema from './schema';
import styles from './LoginForm.module.sass';

const { Text } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit(data) {
      console.log(data);
    },
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      {errors.email && touched.email && (
        <Alert className={styles.error} type="error" message={errors.email} />
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
      <Input
        className={styles.input}
        type="password"
        placeholder="Пароль..."
        {...getFieldProps('password')}
      />
      <Button className={styles.button} type="primary">
        Войти
      </Button>
      <div className={styles.signup}>
        <Text>Или</Text>
        <RouterLink to="/signup"> зарегистрироваться</RouterLink>
      </div>
    </form>
  );
};

export default LoginForm;
