import { Route, Switch, useLocation } from 'wouter';
import Header from './Header';
import Counter from './Counter';
import Compare from './Compare';



function App() {
  const [location, setLocation] = useLocation();
  const comparePathRegex = /^\/compare\/?$/i

  return (
    <main className="my-12 sm:my-20 text-center">
      <Header />
      <div className={(comparePathRegex.test(location) ? 'container-wide' : 'container')}>
        <Switch>
          <Route path="/compare" component={Compare} />
          <Route path="/" component={Counter} />
        </Switch>
      </div>
    </main>
  );
}



export default App;
