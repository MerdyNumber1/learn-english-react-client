import React from 'react';
import { Typography, Input, Button } from 'antd';
import { Formik, FormikConfig, FormikHandlers } from 'formik';
import styled from 'styled-components';
import { FormErrors } from 'components/forms/FormErrors';

const { Title } = Typography;

interface AuthBaseFormProps {
  title: string;
  onSubmit: FormikConfig<any>['onSubmit'];
  initialValues: any;
  validationSchema: any;
  children: (getFieldProps: FormikHandlers['getFieldProps']) => React.ReactElement;
}

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

export const BaseInput = styled(Input)`
  margin: 5px 0;
`;

export const BaseSubmitButton = styled(Button)`
  margin-top: 15px;
  margin-right: 10px;
`;

export const Hint = styled.div`
  margin-left: 10px;
  display: inline-block;
`;
