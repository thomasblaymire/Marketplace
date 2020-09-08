import buildClient from '../api/build-client';
import Products from '../components/Products';
import Header from '../components/Header';

const LandingPage = ({ currentUser }) => (
  <>
    <Header currentUser={currentUser} />
    <Products />
  </>
);

// Call function during render on server, this will be provider to component as prop
// Build client will determine what URL client vs server
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
