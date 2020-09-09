import * as Yup from 'yup';
import { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Button from '../Button';
import { AuthContext } from '../../context/Auth';
import { Formik, Field } from 'formik';
import { FormWrapper, FormError, FieldError, StyledText } from './styled';

const Login = () => {
  const { signIn, error: apiError, user } = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16).required(),
  });

  const onSubmit = async (values) => {
    signIn(values);
    if (user !== null) Router.push('/');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, handleChange, errors, touched }) => (
        <FormWrapper>
          <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
            <h3 className="form-title">Sign In</h3>
            {apiError && <FormError>{apiError}</FormError>}

            <label htmlFor="email">
              <StyledText>Email:</StyledText>
              <Field type="text" name="email" placeholder="yourname@example.com" onChange={handleChange} />
              {errors.email && touched.email ? <FieldError>{errors.email}</FieldError> : null}
            </label>
            <label htmlFor="password">
              <StyledText>Password:</StyledText>
              <Field type="password" name="password" onChange={handleChange} placeholder="Password" />
              {errors.password && touched.password ? <FieldError>{errors.password}</FieldError> : null}
            </label>
            <Button size="lg" disabled={isSubmitting} loading={isSubmitting}>
              Log In
            </Button>
          </fieldset>

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

export default Login;
