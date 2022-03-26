function Results({ text }) {
  function getCharCount(text) {
    return text.length;
  }
  function getWordCount(text) {
    return text.split(/\W/).filter(word => !!word).length;
  }
  
  return (
    <div class="flex mb-6">
      <p class="mr-4 last:mr-0">
        {getCharCount(text)} characters
      </p>
      <p class="mr-4 last:mr-0">
        {getWordCount(text)} words
      </p>
    </div>
  );
}



export default Results;
