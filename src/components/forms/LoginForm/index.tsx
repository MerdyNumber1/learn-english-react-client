import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Button, Input, Typography } from 'antd';
import { OnSubmitCallback, BaseForm } from 'components/forms/BaseForm';
import { UserDTO } from 'services/models';
import { useUser } from 'hooks/useUser';
import LoginSchema from './schema';
import styles from './LoginForm.module.sass';

const { Text } = Typography;

export const LoginForm: React.FC = () => {
  const { login } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit: OnSubmitCallback<UserDTO> = (data, { setErrors }) => {
    setIsLoading(true);
    login({ email: data.email, password: data.password }).catch((err) => {
      setIsLoading(true);
      setErrors(err.response.data);
    });
  };

  return (
    <BaseForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Войти"
      validationSchema={LoginSchema}
    >
      {(getFieldProps) => (
        <>
          <Input className={styles.input} placeholder="Email..." {...getFieldProps('email')} />
          <Input
            className={styles.input}
            placeholder="Пароль..."
            type="password"
            {...getFieldProps('password')}
          />
          <Button className={styles.button} type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
          <div className={styles.signup}>
            <Text>Или</Text>
            <Link to="/signup"> зарегистрироваться</Link>
          </div>
        </>
      )}
    </BaseForm>
  );
};
