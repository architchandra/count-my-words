import { useEffect } from 'react';
import Counter from '../Counter';



function HomePage() {
  const pageMeta = {
    title: 'Count My Words - A free word and character counter',
    description: 'Free to use online tool to count the number of words and characters in any piece of text.',
    canonicalUrl: 'https://countmywords.in',
  };
  
  useEffect(() => {
    document.title = pageMeta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', pageMeta.description);
    document.querySelector('link[rel="canonical"]').setAttribute('href', pageMeta.canonicalUrl);
  });
  
  return (
    <>
      <Counter />
    </>
  );
}



export default HomePage;
