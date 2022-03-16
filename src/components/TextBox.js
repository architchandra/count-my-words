import { useState } from 'react';



function TextBox() {
  const [text, setText] = useState('');
  
  return (
    <textarea
      className="w-full"
      rows="12"
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
}



export default TextBox;
