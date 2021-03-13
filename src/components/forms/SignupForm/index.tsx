import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Typography } from 'antd';
import { UserDTO } from 'services/models';
import {
  OnSubmitCallback,
  BaseForm,
  BaseInput as Input,
  BaseSubmitButton as Button,
  Hint,
} from 'components/forms/BaseForm';
import { useUser } from 'hooks/useUser';
import SignupSchema from './schema';

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
          <Input type="email" placeholder="Email..." {...getFieldProps('email')} />
          <Input type="text" placeholder="Имя..." {...getFieldProps('username')} />
          <Input type="password" placeholder="Пароль..." {...getFieldProps('password')} />
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Зарегистрироваться
          </Button>
          <Hint>
            <Text>Или</Text>
            <Link to="/login"> войти</Link>
          </Hint>
        </>
      )}
    </BaseForm>
  );
};
