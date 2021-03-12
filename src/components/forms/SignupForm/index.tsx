import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Input, Button, Typography } from 'antd';
import { UserDTO } from 'services/models';
import { BaseForm, OnSubmitCallback } from 'components/forms/BaseForm';
import { useUser } from 'hooks/useUser';
import SignupSchema from './schema';
import styles from './SignupForm.module.sass';

const { Text } = Typography;

export const SignupForm: React.FC = () => {
  const { signup, login } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: '',
    username: '',
    password: '',
  };

  const onSubmit: OnSubmitCallback<UserDTO> = (data, { setErrors }) => {
    setIsLoading(true);
    signup(data)
      .then(() => login({ email: data.email, password: data.password }))
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.response.data);
      });
  };

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Зарегистрироваться"
      validationSchema={SignupSchema}
    >
      {(getFieldProps) => (
        <>
          <Input
            className={styles.input}
            type="email"
            placeholder="Email..."
            {...getFieldProps('email')}
          />
          <Input
            className={styles.input}
            type="text"
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
            <Link to="/login"> войти</Link>
          </div>
        </>
      )}
    </BaseForm>
  );
};
