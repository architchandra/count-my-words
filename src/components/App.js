import { useState } from 'react';
import Header from './Header';
import TextBox from './TextBox';
import Results from './Results';



function App() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }

  return (
    <main className="my-12 sm:my-20">
      <div className="container text-center">
        <Header />
        <Results text={text} />
        <TextBox text={text} handleOnChange={handleOnChange} />
      </div>
    </main>
  );
}



export default App;
