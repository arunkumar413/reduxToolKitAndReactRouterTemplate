import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="About">
      <h2> About </h2>
      <Link to="/"> Home </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
}
