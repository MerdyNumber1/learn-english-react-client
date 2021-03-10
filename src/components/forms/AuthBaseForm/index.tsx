import React, { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { UserDTO } from 'services/models';
import { Formik } from 'formik';
import { Link } from '@reach/router';
import FormErrors from '../FormErrors';
import styles from '../LoginForm/LoginForm.module.sass';

const { Title, Text } = Typography;

interface AuthBaseFormProps {
  title: string;
  onSubmitParentCallback: OnSubmitCallback;
  initialValues: any;
  validationSchema: any;
}

export type OnSubmitCallback = (data: UserDTO, { setErrors }: any) => Promise<any>;

const AuthBaseForm: React.VFC<AuthBaseFormProps> = ({
  title,
  onSubmitParentCallback,
  initialValues,
  validationSchema,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: OnSubmitCallback = (data, { setErrors }) => {
    setIsLoading(true);
    return onSubmitParentCallback(data, { setErrors }).then(() => setIsLoading(false));
  };

  return (
    <div>
      <Title level={3}>{title}:</Title>
      <Formik {...{ onSubmit, initialValues, validationSchema }}>
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
            <Button className={styles.button} type="primary" htmlType="submit" loading={isLoading}>
              Войти
            </Button>
            <div className={styles.signup}>
              <Text>Или</Text>
              <Link to="/signup"> зарегистрироваться</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AuthBaseForm;
