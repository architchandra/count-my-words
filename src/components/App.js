import TextBox from './TextBox';



function App() {
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
        <TextBox />
      </div>
    </main>
  );
}



export default App;
