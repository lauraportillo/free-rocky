// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEn = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <ul className="author__lang">
          <li className="author__lang--en">
            <Link to="/authorEn" title="english">
              En
            </Link>
          </li>
          <li className="author__lang--item">|</li>
          <li className="author__lang--es">
            <Link to="/authorEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="author__description">
          <p className="author__description--p">
            <span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quibusdam
            nam voluptates numquam quaerat distinctio molestiae accusantium facilis corrupti omnis blanditiis sapiente,
            laudantium quod impedit sit tempora harum beatae aspernatur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint pariatur, possimus, eligendi dolorum, iure explicabo repellat ratione beatae ipsam
            maiores fugiat sequi architecto adipisci cumque temporibus perspiciatis repudiandae illo aperiam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis est illo deleniti ab quas incidunt ea quia
            sapiente officiis nisi fugit obcaecati, aspernatur velit accusamus quidem id sequi. Libero, laborum.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEn;
