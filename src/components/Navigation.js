import { Route, Link } from 'wouter';



function Navigation() {
  return (
    <nav>
      <h3 className="title-h3 text-orange mb-1">
        So, is this fine?
      </h3>
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
    </nav>
  );
}



export default Navigation;
