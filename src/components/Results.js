function Results({ text }) {
  function getCharCount(text) {
    return text.length;
  }
  function getWordCount(text) {
    return text.split(/\W/).filter(word => !!word).length;
  }
  function getSentenceCount(text) {
    if(!text) {
      return 0;
    }

    return text.split(/\.|\r\n|\r|\n/gm).filter(phrase => phrase).length;
  }
  function getParagraphCount(text) {
    if(!text) {
      return 0;
    }

    return text.split(/\r\n|\r|\n/gm).filter(para => para).length;
  }

  const resultsList = [{
    label: 'words',
    count: getWordCount(text),
  },{
    label: 'characters',
    count: getCharCount(text),
  },{
    label: 'sentences',
    count: getSentenceCount(text),
  },{
    label: 'paragraphs',
    count: getParagraphCount(text),
  }];
  
  return (
    <div className="grid sm:flex grid-rows-2 grid-cols-3 flex-wrap gap-3 mb-2 px-2 py-3 rounded-md border border-dark-grey bg-light-grey">
      {resultsList.map((result, index) => 
        <p className="flex-1 text-sm" key={index}>
          <span className="block text-3xl">
            {result.count}
          </span>
          <span className="uppercase">
            {result.label}
          </span>
        </p>
      )}
    </div>
  );
}



export default Results;
