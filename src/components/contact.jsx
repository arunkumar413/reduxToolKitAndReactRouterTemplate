import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="About">
      <h2> Contact </h2>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
    </div>
  );
}
