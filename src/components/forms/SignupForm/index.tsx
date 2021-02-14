import React, { useState } from 'react';
import { useDispatch } from 'store';
import { useFormik } from 'formik';
import { Link as RouterLink } from '@reach/router';
import { Input, Alert, Button, Typography } from 'antd';
import { signup } from 'store/modules/user/actions';
import { User } from 'services/models';
import SignupSchema from './schema';
import styles from './SignupForm.module.sass';

const { Text } = Typography;

const SignupForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { getFieldProps, handleSubmit, errors, touched } = useFormik<User>({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit(data: User) {
      setIsLoading(true);
      dispatch(signup(data)).then(() => setIsLoading(false));
    },
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      {errors.email && touched.email && (
        <Alert className={styles.error} type="error" message={errors.email} />
      )}
      {errors.username && touched.username && (
        <Alert className={styles.error} type="error" message={errors.username} />
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
      <Button className={styles.button} type="primary" htmlType="submit" loading={isLoading}>
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
