import { Link } from 'wouter';



function Header() {
  return (
    <div className="mb-12">
      <h1 className="mb-1 title-h1 text-orange">
        Count My Words
      </h1>
      <h3>
        A simple word and character counter. Free to use.
      </h3>
      <Link href="/compare">Compare multiple texts</Link>
    </div>
  );
}



export default Header;
