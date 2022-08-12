import { Route, Switch, useLocation } from 'wouter';
import Header from './Header';
import Counter from './Counter';
import Compare from './Compare';
import Navigation from './Navigation';



function App() {
  const [location, setLocation] = useLocation();
  const comparePathRegex = /^\/compare\/?$/i

  return (
    <main className="my-12 sm:my-16 text-center">
      <Header wrapperClass="container mb-8" />
      <div className={(comparePathRegex.test(location) ? 'container-wide' : 'container') + ' mb-8'}>
        <Switch>
          <Route path="/compare" component={Compare} />
          <Route path="/" component={Counter} />
        </Switch>
      </div>
      <Navigation />
    </main>
  );
}



export default App;
