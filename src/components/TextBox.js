function TextBox({ text, handleOnChange }) {
  return (
    <textarea
      className="w-full p-3 rounded-md border border-dark-grey bg-light-grey placeholder:text-darker-grey"
      rows="16"
      value={text}
      onChange={handleOnChange}
      placeholder="Type or paste your text here. We don't save or share any data with anyone."
    ></textarea>
  );
}



export default TextBox;
