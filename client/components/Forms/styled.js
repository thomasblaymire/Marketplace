import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  background: #fff;
  margin: 0 auto;
  border: 5px solid white;
  text-align: center;
  padding: 4rem 0;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 600px;
  label {
    display: block;
    margin-bottom: 1rem;
    text-align: left;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid #eff3f5;
    &:focus {
      outline: 0;
      border-color: #2196f3;
    }
    &::placeholder {
      color: #b1b1b1;
      font-size: 0.9rem;
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: #2d2d2d;
    margin-top: 2rem;
    color: white;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.65;
    }
  }
  fieldset {
    border: 0;
    padding: 0rem 6rem;

    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
    }
  }
  .form-title {
    padding-bottom: 1.5rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1px;
    color: #222222;
  }

  .account-actions {
    padding-top: 1rem;
    a {
      color: #2d2d2d;
    }
  }
`;

export const FormError = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  padding-bottom: 2rem;
  text-align: left;
  background: #fae7ec;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 14px;

  span {
    padding-right: 5px;
    display: block;
  }

  ul {
    padding: 0;
  }
`;

export const FieldError = styled.div`
  font-size: 0.8rem;
  color: red;
  padding-top: 5px;
  padding-left: 1px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const StyledText = styled.span`
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  line-height: 30px;
`;
