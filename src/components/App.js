import { Route, Switch } from 'wouter';
import Header from './Header';
import HomePage from './HomePage';
import ComparePage from './ComparePage';



function App() {
  return (
    <main className="my-12 sm:my-20">
      <div className="container text-center">
        <Header />
        <Switch>
          <Route path="/compare" component={ComparePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </main>
  );
}



export default App;
