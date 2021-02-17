import React from 'react';
import { Formik } from 'formik';
import { Link } from '@reach/router';
import { Input, Button, Typography } from 'antd';
import { UserDTO } from 'services/models';
import FormErrors from 'components/forms/FormErrors';
import { useDispatch } from 'store';
import { login } from 'store/modules/user/actions';
import LoginSchema from './schema';
import styles from './LoginForm.module.sass';

const { Text } = Typography;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (data: UserDTO) => dispatch(login(data));

  return (
    <Formik {...{ initialValues, onSubmit, validationSchema: LoginSchema }}>
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
            type="password"
            placeholder="Пароль..."
            {...getFieldProps('password')}
          />
          <Button className={styles.button} type="primary" htmlType="submit">
            Войти
          </Button>
          <div className={styles.signup}>
            <Text>Или</Text>
            <Link to="/signup"> зарегистрироваться</Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
