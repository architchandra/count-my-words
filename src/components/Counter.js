import { useState } from 'react';
import TextBox from './TextBox';
import Results from './Results';



function Counter() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div>
      <Results text={text} />
      <TextBox text={text} handleOnChange={handleOnChange} />
    </div>
  );
}



export default Counter;
