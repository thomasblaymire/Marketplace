import * as Yup from 'yup';
import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Button from '../Button';
import useRequest from '../../hooks/use-request';
import { Formik, Field } from 'formik';
import { FormWrapper, FormError, StyledText } from './styled';

const LoginForm = () => {
  const [formValues, setFormValues] = useState(''); // TODO: Improve this with Formik Hooks

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16).required(),
  });

  const onSubmit = async (values) => {
    setFormValues(values);
    console.log(values);
    doRequest();
  };

  const { doRequest, loading } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      ...formValues,
    },
    onSuccess: () => Router.push('/'),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, handleChange, errors, touched, values }) => (
        <FormWrapper>
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="email">
              <StyledText>Email:</StyledText>
              <Field type="text" name="email" placeholder="yourname@example.com" onChange={handleChange} />
              {errors.email && touched.email ? <FormError>{errors.email}</FormError> : null}
            </label>
            <label htmlFor="password">
              <StyledText>Password:</StyledText>
              <Field type="password" name="password" onChange={handleChange} placeholder="Password" />
              {errors.password && touched.password ? <FormError>{errors.password}</FormError> : null}
            </label>
            <Button size="lg" disabled={isSubmitting} loading={isSubmitting}>
              Log In
            </Button>
          </fieldset>

          {/* {apiError && <FormError error={apiError} />} */}

          <div className="account-actions">
            <Link href="/">
              <a>Forgot password?</a>
            </Link>

            <div className="new-account">
              Don't have an account?
              <Link href="/signup"> Sign up</Link>
            </div>
          </div>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default LoginForm;
