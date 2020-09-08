import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isRouterReady } from '../../../hooks/router-ready';
import Header from '../../../components/Header';

const ItemPage = () => {
  const [item, setItem] = useState();
  const router = useRouter();

  useEffect(() => {
    if (isRouterReady(router)) {
      fetch(`/api/items/${'5f57833e36923c0023a15c10'}`)
        .then((res) => res.json())
        .then((data) => setItem(data))
        .catch((err) => console.log(err));
    }
  }, [router]);

  return (
    <>
      <Header />
      {item && (
        <div>
          {item.title}
          <br></br>
          {item.description}
        </div>
      )}
    </>
  );
};

export default ItemPage;
