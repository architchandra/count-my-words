function Results({ text }) {
  function getCharCount(text) {
    return text.length;
  }
  
  return (
    <div>
      {getCharCount(text)} characters
    </div>
  );
}



export default Results;
