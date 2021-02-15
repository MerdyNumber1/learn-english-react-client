import React, { useState } from 'react';
import { useDispatch } from 'store';
import { ErrorMessage, Formik } from 'formik';
import { Link as RouterLink } from '@reach/router';
import { Input, Alert, Button, Typography } from 'antd';
import { signup } from 'store/modules/user/actions';
import { User } from 'services/models';
import SignupSchema from './schema';
import styles from './SignupForm.module.sass';

const { Text } = Typography;

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  const onSubmit = (data: User, { setErrors }: any) => {
    setIsLoading(true);
    dispatch(signup(data))
      .then(() => console.log('woooow'))
      .catch((err) => setErrors(err.response.data))
      .finally(() => setIsLoading(false));
  };

  return (
    <Formik {...{ validationSchema: SignupSchema, initialValues, onSubmit }}>
      {({ handleSubmit, getFieldProps, errors }) => (
        <form action="" onSubmit={handleSubmit}>
          {Object.keys(errors).map((key, index) => (
            <ErrorMessage name={key} key={`${key}-${index}`}>
              {(msg) => <Alert className={styles.error} type="error" message={msg} />}
            </ErrorMessage>
          ))}
          <Input
            className={styles.input}
            type="email"
            placeholder="Email..."
            {...getFieldProps('email')}
          />
          <Input
            className={styles.input}
            type="username"
            placeholder="Имя..."
            {...getFieldProps('username')}
          />
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
      )}
    </Formik>
  );
};

export default SignupForm;
