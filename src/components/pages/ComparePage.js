import { useEffect } from 'react';
import Counter from '../Counter';
import firePageViewEvent from '../../helpers/firePageViewEvent';



function ComparePage() {
  const pageMeta = {
    title: 'Compare Multiple Texts - Count My Words',
    description: 'Compare word and character counts for multiple texts side by side.',
    canonicalUrl: 'https://countmywords.in/compare',
  };
  
  useEffect(() => {
    firePageViewEvent(pageMeta);
  });

  return (
    <div className="md:grid grid-cols-2 gap-12">
      <Counter wrapperClass="mb-12 md:mb-0" />
      <Counter />
    </div>
  );
}



export default ComparePage;
