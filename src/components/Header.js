import { Route, Link } from 'wouter';



function Header() {
  return (
    <div className="container mb-12">
      <h1 className="mb-1 title-h1 text-orange">
        Count My Words
      </h1>
      <h3 className="title-h3 mb-4">
        A simple word and character counter. Free to use.
      </h3>
      <Route path="/">
        <Link href="/compare">
          Compare multiple texts
        </Link>
      </Route>
      <Route path="/compare">
        <Link href="/">
          Take me back
        </Link>
      </Route>
    </div>
  );
}



export default Header;
