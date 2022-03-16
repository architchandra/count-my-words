function TextBox({ text, handleOnChange }) {
  return (
    <textarea
      className="w-full mb-8 rounded-md border border-dark-grey"
      rows="12"
      value={text}
      onChange={handleOnChange}
    ></textarea>
  );
}



export default TextBox;
