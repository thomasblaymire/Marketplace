import { StyledSignin } from '../styled/SigninStyles';
import LoginForm from '../components/Forms/LoginForm';

const Signin = () => {
  const error = null;
  const loading = null;

  return (
    <StyledSignin>
      <LoginForm error={error} loading={loading} />
    </StyledSignin>
  );
};

export default Signin;
