import { Route, Switch } from 'wouter';
import Header from './Header';
import HomePage from './pages/HomePage';
import ComparePage from './pages/ComparePage';
import Navigation from './Navigation';



function App() {
  const location = window.location.pathname;
  const isComparePage = /^\/compare\/?$/i.test(location);

  return (
    <main className="my-12 sm:my-16 text-center">
      <Header wrapperClass="container mb-12" />
      <div className={(isComparePage ? 'container-wide' : 'container') + ' mb-6'}>
        <Switch>
          <Route path="/compare" component={ComparePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Navigation />
    </main>
  );
}



export default App;
