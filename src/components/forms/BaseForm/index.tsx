import React from 'react';
import { Typography } from 'antd';
import { Formik, FormikHandlers } from 'formik';
import FormErrors from '../FormErrors';

const { Title } = Typography;

interface AuthBaseFormProps {
  title: string;
  onSubmit: OnSubmitCallback<any>;
  initialValues: any;
  validationSchema: any;
  children: (getFieldProps: FormikHandlers['getFieldProps']) => React.ReactElement;
}

export type OnSubmitCallback<T> = (data: T, { setErrors }: any) => any;

export const BaseForm: React.FC<AuthBaseFormProps> = ({
  title,
  onSubmit,
  initialValues,
  validationSchema,
  children,
}) => (
  <div>
    <Title level={3}>{title}:</Title>
    <Formik {...{ onSubmit, initialValues, validationSchema }}>
      {({ handleSubmit, errors, getFieldProps }) => (
        <form action="" onSubmit={handleSubmit}>
          <FormErrors errors={errors} />
          {children(getFieldProps)}
        </form>
      )}
    </Formik>
  </div>
);
