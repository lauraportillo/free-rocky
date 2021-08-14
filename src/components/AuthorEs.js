// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEs = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages />

        <section className="author__description">
          <p className="author__description--p">
            <span className="bold">Lorem</span> TEXTO EN CASTELLANO
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEs;
