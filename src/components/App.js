import { Route, Switch, useLocation } from 'wouter';
import Header from './Header';
import HomePage from './HomePage';
import ComparePage from './ComparePage';



function App() {
  const [location, setLocation] = useLocation();
  const comparePathRegex = /^\/compare\/?$/i

  return (
    <main className="my-12 sm:my-20 text-center">
      <Header />
      <div className={(comparePathRegex.test(location) ? 'container-wide' : 'container')}>
        <Switch>
          <Route path="/compare" component={ComparePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </main>
  );
}



export default App;
