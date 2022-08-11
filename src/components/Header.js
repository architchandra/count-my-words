import { Route, Link } from 'wouter';
import Logo from '../assets/images/logo.svg';



function Header() {
  return (
    <div className="container mb-12">
      <div className="flex justify-center items-end mb-2">
        <img className="w-12 h-12 mr-2" src={Logo} alt="Count My Words logo" />
        <h1 className="title-h1 text-orange">
          Count My Words
        </h1>
      </div>
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
