import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in </h1> : <h1>You are not signed in</h1>;
};

// Call function during render on server, this will be provider to component as prop
// Build client will determine what URL client vs server
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
