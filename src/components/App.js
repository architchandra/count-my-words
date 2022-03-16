import TextInput from './TextInput';



function App() {
  return (
    <main className="my-12">
      <div className="container text-center">
        <div className="mb-6">
          <h1 className="title-h1">
            Word Limit
          </h1>
          <h3>
            A word and character counter built using React and Tailwind.
          </h3>
        </div>
        <TextInput />
      </div>
    </main>
  );
}



export default App;
