function TextBox({ text, handleOnChange }) {
  return (
    <textarea
      className="w-full mb-8 p-4 rounded-md border border-dark-grey bg-light-grey placeholder:text-darker-grey"
      rows="12"
      value={text}
      onChange={handleOnChange}
      placeholder="Type or paste your text here. We don't save or share any data with anyone."
    ></textarea>
  );
}



export default TextBox;
