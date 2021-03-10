import React, { useState } from 'react';
import { useDispatch } from 'store';
import { Formik } from 'formik';
import { Link } from '@reach/router';
import { Input, Button, Typography } from 'antd';
import { signup, login } from 'store/user/actions';
import { UserDTO } from 'services/models';
import FormErrors from 'components/forms/FormErrors';
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

  const onSubmit = (data: UserDTO, { setErrors }: any) => {
    setIsLoading(true);
    dispatch(signup(data))
      .then(() => dispatch(login({ email: data.email, password: data.password })))
      .catch((err) => {
        setIsLoading(false);
        setErrors(err.response.data);
      });
  };

  return (
    <Formik {...{ validationSchema: SignupSchema, initialValues, onSubmit }}>
      {({ handleSubmit, getFieldProps, errors }) => (
        <form action="" onSubmit={handleSubmit}>
          <FormErrors errors={errors} />
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
            <Link to="/login"> войти</Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
