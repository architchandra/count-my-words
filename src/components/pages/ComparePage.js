import { useEffect } from 'react';
import Counter from '../Counter';



function ComparePage() {
  const pageMeta = {
    title: 'Compare - Count My Words',
    description: 'Compare word and character counts for multiple texts side by side.',
    canonicalUrl: 'https://countmywords.in/compare',
  };
  
  useEffect(() => {
    document.title = pageMeta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', pageMeta.description);
    document.querySelector('link[rel="canonical"]').setAttribute('href', pageMeta.canonicalUrl);
  });

  return (
    <div className="md:grid grid-cols-2 gap-12">
      <Counter wrapperClass="mb-12 md:mb-0" />
      <Counter />
    </div>
  );
}



export default ComparePage;
