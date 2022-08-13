import { useEffect } from 'react';
import Counter from '../Counter';



function HomePage() {
  useEffect(() => {
    document.title = 'Count My Words - A free word and character counter';
  });
  
  return (
    <>
      <Counter />
    </>
  );
}



export default HomePage;
