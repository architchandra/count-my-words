import { useEffect } from 'react';
import Counter from '../Counter';
import firePageViewEvent from '../../helpers/firePageViewEvent';



function HomePage() {
  const pageMeta = {
    title: 'Count My Words - A free word and character counter',
    description: 'Free to use online tool to count the number of words and characters in any piece of text.',
    canonicalUrl: 'https://countmywords.in',
  };
  
  useEffect(() => {
    firePageViewEvent(pageMeta);
  });
  
  return (
    <>
      <Counter />
    </>
  );
}



export default HomePage;
