// Components
import Header from './Header';
import Languages from './Languages';
import Footer from './Footer';
// Styles
import '../stylesheets/Author.scss';
const AuthorEn = (props) => {
  return (
    <>
      <Header />
      <main className="author">
        <h1 className="author__title">just me</h1>

        <Languages languageEn={props.languages[4]} languageEs={props.languages[5]} />

        <section className="author__description">
          <p className="author__description--p">
            <span className="bold">English:</span> English text
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AuthorEn;
