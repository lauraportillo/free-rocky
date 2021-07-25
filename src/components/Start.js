// React
import { Link } from 'react-router-dom';
// Components
import Clue01 from './Clue01';
import Footer from './Footer';
// Styles
import '../stylesheets/Start.scss';

const Start = (props) => {
  return (
    <>
      <header className="startHeader">
        <h1 className="startHeader__title">free rocky!</h1>
        <div>
          <h2>time remaining</h2>
          <div>00.00</div>
        </div>
      </header>
      <main className="startMain">
        <Clue01 />
      </main>
      <Footer />
    </>
  );
};

export default Start;
