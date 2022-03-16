function TextBox({ text, handleOnChange }) {
  return (
    <textarea
      className="w-full"
      rows="12"
      value={text}
      onChange={handleOnChange}
    ></textarea>
  );
}



export default TextBox;
