import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-8 text-center text-gray-500">
      © 2024 Adityan Verma |&nbsp;
      <Link
        to={'https://github.com/AdityanVerma'}
        className="underline"
        target="_blank"
      >
        GitHub
      </Link>{' '}
      &nbsp;|&nbsp;
      <Link
        to={'https://www.linkedin.com/in/adityan-verma/'}
        className="underline"
        target="_blank"
      >
        LinkedIn
      </Link>
      &nbsp;| adityanvermaa@gmail.com
    </footer>
  );
}
