import Counter from './Counter';



function Compare() {
  return (
    <div>
      <h2 className="title-h2">Compare</h2>
      <h3 className="title-h3">Compare multiple pieces of text side by side</h3>
      <div className="md:grid grid-cols-2 gap-12">
        <Counter />
        <Counter />
      </div>
      
    </div>
  );
}



export default Compare;
