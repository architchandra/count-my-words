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

    return text.split(/\./g).filter(phrase => phrase).length;
  }
  function getParagraphCount(text) {
    if(!text) {
      return 0;
    }

    return text.split(/[\r\n]/g).filter(para => para).length;
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
    <div className="flex mb-6 p-4 rounded-md border border-dark-grey bg-light-grey">
      {resultsList.map((result, index) => 
        <p className="mr-4 pr-4 last:mr-0 last:pr-0 border-r last:border-none border-dark-grey text-sm" key={index}>
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
