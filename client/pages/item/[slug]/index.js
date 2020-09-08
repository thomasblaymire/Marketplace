import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isRouterReady } from '../../../hooks/router-ready';
import Header from '../../../components/Header';

const ItemPage = () => {
  const [item, setItem] = useState();
  const router = useRouter();

  useEffect(() => {
    if (isRouterReady(router)) {
      fetch(`/api/items/${'5f5784e4cfecc6002445ec34'}`)
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
