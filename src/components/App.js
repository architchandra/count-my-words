import { useState } from 'react';
import TextBox from './TextBox';
import Results from './Results';



function App() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }

  return (
    <main className="my-20">
      <div className="container text-center">
        <div className="mb-12">
          <h1 className="title-h1">
            Word Limit
          </h1>
          <h3>
            A word and character counter built using React and Tailwind.
          </h3>
        </div>
        <TextBox text={text} handleOnChange={handleOnChange} />
        <Results text={text} />
      </div>
    </main>
  );
}



export default App;
