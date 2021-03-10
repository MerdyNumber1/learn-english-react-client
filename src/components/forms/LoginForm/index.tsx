import React from 'react';
import { Formik } from 'formik';
import { Link } from '@reach/router';
import { Input, Typography } from 'antd';
import FormErrors from 'components/forms/FormErrors';
import { useDispatch } from 'store';
import AuthBaseForm, { OnSubmitCallback } from 'components/forms/AuthBaseForm';
import { login } from 'store/user/actions';
import LoginSchema from './schema';
import styles from './LoginForm.module.sass';

const { Text } = Typography;

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit: OnSubmitCallback = (data, { setErrors }) =>
    dispatch(login({ email: data.email, password: data.password })).catch((err) => {
      setErrors(err.response.data);
    });

  return (
    <AuthBaseForm
      initialValues={initialValues}
      onSubmitParentCallback={onSubmit}
      title="Войти"
      validationSchema={LoginSchema}
    >
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
            <div className={styles.signup}>
              <Text>Или</Text>
              <Link to="/signup"> зарегистрироваться</Link>
            </div>
          </form>
        )}
      </Formik>
    </AuthBaseForm>
  );
};

export default LoginForm;
