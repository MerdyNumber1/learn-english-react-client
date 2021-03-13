import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Typography } from 'antd';
import {
  BaseForm,
  BaseInput as Input,
  BaseSubmitButton as Button,
  Hint,
} from 'components/forms/BaseForm';
import { UserDTO } from 'services/models';
import { useUser } from 'hooks/useUser';
import { FormikConfig } from 'formik';
import LoginSchema from './schema';

const { Text } = Typography;

export const LoginForm: React.FC = () => {
  const { login } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit: FormikConfig<UserDTO>['onSubmit'] = (data, { setErrors }) => {
    setIsLoading(true);
    login({ email: data.email, password: data.password }).catch((err) => {
      setIsLoading(false);
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
          <Input placeholder="Email..." {...getFieldProps('email')} />
          <Input placeholder="Пароль..." type="password" {...getFieldProps('password')} />
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
          <Hint>
            <Text>Или</Text>
            <Link to="/signup"> зарегистрироваться</Link>
          </Hint>
        </>
      )}
    </BaseForm>
  );
};
