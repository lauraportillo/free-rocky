// Components
import HeaderEs from './HeaderEs';
import Footer from './Footer';
// Styles
import '../stylesheets/Rocky.scss';
const RockyEs = (props) => {
  return (
    <div className="containerRocky">
      <HeaderEs />
      <main className="containerMainRocky">
        <div className="rocky">
          <h1 className="rocky__title">rocky el perro</h1>

          <section className="rocky__description">
            <p className="rocky__description--p">
              Rocky no es un perro normal. Es un perro muy especial. Es un Bulldog con una carita entrañable y
              achuchable. El perro perfecto con el que todo el mundo querría vivir.
            </p>
            <p className="rocky__description--p">
              <span className="bold">Rocky</span> parece completamente real, sin embargo no es de carne y hueso, es un
              <span className="bold"> perro modelado en 3d</span>, obra del genial artista
              <span className="bold"> Luis Yrisarry Labadía</span>.
            </p>
            <p className="rocky__description--p">
              Luis es Artista 3D y Director de Arte especializado en personajes y escultura digital, con un enorme
              talento.
            </p>
            <p className="rocky__description--p">
              Gracias Luis por cederme a Rocky como protagonista de esta gran aventura!
            </p>
          </section>

          <ul className="menu">
            <li className="menu__item">
              <a
                className="menu__item--icon"
                href="http://bilfrok.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="bilfrok.com"
              >
                Luis Yrisarry
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__item--icon"
                href="https://www.artstation.com/bilfrok"
                target="_blank"
                rel="noopener noreferrer"
                title="artstation"
              >
                <i className="fa fa-artstation" aria-hidden="true"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__item--icon"
                href="https://www.behance.net/Bilfrok"
                target="_blank"
                rel="noopener noreferrer"
                title="behance"
              >
                <i className="fab fa-behance" alt="behance icon"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__item--icon"
                href="https://www.linkedin.com/in/bilfrok/"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
              >
                <i className="fa fa-linkedin" alt="linkedin icon"></i>
              </a>
            </li>
          </ul>
          <div className="rocky__image"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RockyEs;
