import { Route, Link } from 'wouter';



function Navigation() {
  return (
    <div>
      <Route path="/">
        <Link href="/compare">
          Not nearly enough! I want to check multiple things at the same time.
        </Link>
      </Route>
      <Route path="/compare">
        <Link href="/">
          Too much! Just one thing at a time please.
        </Link>
      </Route>
    </div>
  );
}



export default Navigation;
