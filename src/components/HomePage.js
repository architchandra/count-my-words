import { useState } from 'react';
import TextBox from './TextBox';
import Results from './Results';



function HomePage() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }
  
  return (
    <>
      <Results text={text} />
      <TextBox text={text} handleOnChange={handleOnChange} />
    </>
  );
}



export default HomePage;
