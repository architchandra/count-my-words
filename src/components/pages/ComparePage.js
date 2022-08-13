import { useEffect } from 'react';
import Counter from '../Counter';



function ComparePage() {
  useEffect(() => {
    document.title = 'Compare multiple texts - Count My Words';
  });

  return (
    <div className="md:grid grid-cols-2 gap-12">
      <Counter wrapperClass="mb-12 md:mb-0" />
      <Counter />
    </div>
  );
}



export default ComparePage;
