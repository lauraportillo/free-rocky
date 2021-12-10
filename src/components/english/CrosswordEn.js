// React
import { useRef } from 'react';
// Components
import CrosswordInputDisabled from '../CrosswordInputDisabled';
// Styles
import '../../stylesheets/Crossword.scss';

const CrosswordEn = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const md01Ref = useRef();
  const md02Ref = useRef();
  const md03Ref = useRef();
  const md04Ref = useRef();
  const md05Ref = useRef();
  const md06Ref = useRef();

  const bu01Ref = useRef();
  const bu02Ref = useRef();
  const bu03Ref = useRef();
  const bu04Ref = useRef();
  const bu05Ref = useRef();
  const bu06Ref = useRef();
  const bu07Ref = useRef();
  const bu08Ref = useRef();

  return (
    <form onSubmit={handleForm} className="crossword">
      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="p01">
          3
        </label>
        <input
          onChange={handleChange}
          className={
            props.p01.toLowerCase() === props.city[6].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="p01"
          id="p01"
          autoComplete="off"
        />
      </div>
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}

      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="md01">
          2
        </label>
        <input
          autoFocus={true}
          onChange={(ev) => {
            props.handleCrosswordInput(ev.target.name, ev.target.value);
            md02Ref.current.focus();
          }}
          className={
            props.md01.toLowerCase() === props.city[0].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="md01"
          id="md01"
          autoComplete="off"
          ref={md01Ref}
        />
      </div>
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          md03Ref.current.focus();
        }}
        className={
          props.md02.toLowerCase() === props.city[0].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="md02"
        id="md02"
        autoComplete="off"
        ref={md02Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          md04Ref.current.focus();
        }}
        className={
          props.md03.toLowerCase() === props.city[0].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="md03"
        id="md03"
        autoComplete="off"
        ref={md03Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          md05Ref.current.focus();
        }}
        className={
          props.md04.toLowerCase() === props.city[0].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="md04"
        id="md04"
        autoComplete="off"
        ref={md04Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          md06Ref.current.focus();
        }}
        className={
          props.md05.toLowerCase() === props.city[0].letter5
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="md05"
        id="md05"
        autoComplete="off"
        ref={md05Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          // Ref.current.focus();
        }}
        className={
          props.md06.toLowerCase() === props.city[0].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="md06"
        id="md06"
        autoComplete="off"
        ref={md06Ref}
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="g01">
          2
        </label>
        <input
          onChange={handleChange}
          className={
            props.g01.toLowerCase() === props.city[5].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="g01"
          id="g01"
          autoComplete="off"
        />
      </div>
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.p03.toLowerCase() === props.city[6].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="p03"
        id="p03"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}

      {/* <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.g02.toLowerCase() === props.city[5].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="g02"
        id="g02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.p04.toLowerCase() === props.city[6].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="p04"
        id="p04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}

      <div className="containerInput">
        <label className="containerInput__label" htmlFor="bu01">
          1
        </label>
        <input
          onChange={(ev) => {
            props.handleCrosswordInput(ev.target.name, ev.target.value);
            bu02Ref.current.focus();
          }}
          className={
            props.bu01.toLowerCase() === props.city[1].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="bu01"
          id="bu01"
          autoComplete="off"
          ref={bu01Ref}
        />
      </div>
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          bu03Ref.current.focus();
        }}
        className={
          props.bu02.toLowerCase() === props.city[1].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="bu02"
        id="bu02"
        autoComplete="off"
        ref={bu02Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          bu04Ref.current.focus();
        }}
        className={
          props.bu03.toLowerCase() === props.city[1].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="bu03"
        id="bu03"
        autoComplete="off"
        ref={bu03Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          bu05Ref.current.focus();
        }}
        className={
          props.bu04.toLowerCase() === props.city[1].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="bu04"
        id="bu04"
        autoComplete="off"
        ref={bu04Ref}
      />
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          bu06Ref.current.focus();
        }}
        className={
          props.bu05.toLowerCase() === props.city[1].letter5
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="bu05"
        id="bu05"
        autoComplete="off"
        ref={bu05Ref}
      />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="bu06">
          6
        </label>
        <input
          onChange={(ev) => {
            props.handleCrosswordInput(ev.target.name, ev.target.value);
            bu07Ref.current.focus();
          }}
          className={
            props.bu06.toLowerCase() === props.city[1].letter6
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="bu06"
          id="bu06"
          autoComplete="off"
          ref={bu06Ref}
        />
      </div>
      <input
        onChange={(ev) => {
          props.handleCrosswordInput(ev.target.name, ev.target.value);
          bu08Ref.current.focus();
        }}
        className={
          props.bu07.toLowerCase() === props.city[1].letter7
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="bu07"
        id="bu07"
        autoComplete="off"
        ref={bu07Ref}
      />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="bu08">
          7
        </label>
        <input
          onChange={(ev) => {
            props.handleCrosswordInput(ev.target.name, ev.target.value);
            // Ref.current.focus();
          }}
          className={
            props.bu08.toLowerCase() === props.city[1].letter8
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="bu08"
          id="bu08"
          autoComplete="off"
          ref={bu08Ref}
        />
      </div>
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />

      {/* <input
        onChange={handleChange}
        className={
          props.b02.toLowerCase() === props.city[4].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="b02"
        id="b02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.g04.toLowerCase() === props.city[5].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="g04"
        id="g04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.t02.toLowerCase() === props.city[7].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="t02"
        id="t02"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
      {/* 
      <input
        onChange={handleChange}
        className={
          props.b03.toLowerCase() === props.city[4].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="b03"
        id="b03"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="g05">
          8
        </label>
        <input
          onChange={handleChange}
          className={
            props.g05.toLowerCase() === props.city[5].letter5
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="g05"
          id="g05"
          autoComplete="off"
        />
      </div>
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="ca01">
          3
        </label>
        <input
          onChange={handleChange}
          className={
            props.ca01.toLowerCase() === props.city[2].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="ca01"
          id="ca01"
          autoComplete="off"
        />
      </div>
      <input
        onChange={handleChange}
        className={
          props.ca02.toLowerCase() === props.city[2].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="ca02"
        id="ca02"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.ca03.toLowerCase() === props.city[2].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="ca03"
        id="ca03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.ca04.toLowerCase() === props.city[2].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="ca04"
        id="ca04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.ca05.toLowerCase() === props.city[2].letter5
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="ca05"
        id="ca05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.ca06.toLowerCase() === props.city[2].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="ca06"
        id="ca06"
        autoComplete="off"
      />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="ca07">
          5
        </label>
        <input
          onChange={handleChange}
          className={
            props.ca07.toLowerCase() === props.city[2].letter7
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="ca07"
          id="ca07"
          autoComplete="off"
        />
      </div>
      <CrosswordInputDisabled /> */}

      {/* <input
        onChange={handleChange}
        className={
          props.b04.toLowerCase() === props.city[4].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="b04"
        id="b04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.g06.toLowerCase() === props.city[5].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="g06"
        id="g06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.t04.toLowerCase() === props.city[7].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="t04"
        id="t04"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
      {/* 
      <input
        onChange={handleChange}
        className={
          props.b05.toLowerCase() === props.city[4].letter5
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="b05"
        id="b05"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.g07.toLowerCase() === props.city[5].letter7
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="g07"
        id="g07"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <div className="containerInput">
        <label className="containerInput__label" htmlFor="mn01">
          4
        </label>
        <input
          onChange={handleChange}
          className={
            props.mn01.toLowerCase() === props.city[3].letter1
              ? 'containerInput__inputCorrect'
              : 'containerInput__inputFull'
          }
          type="text"
          maxLength="1"
          name="mn01"
          id="mn01"
          autoComplete="off"
        />
      </div>
      <input
        onChange={handleChange}
        className={
          props.mn02.toLowerCase() === props.city[3].letter2
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="mn02"
        id="mn02"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.mn03.toLowerCase() === props.city[3].letter3
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="mn03"
        id="mn03"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.mn04.toLowerCase() === props.city[3].letter4
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="mn04"
        id="mn04"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.mn05.toLowerCase() === props.city[3].letter5
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="mn05"
        id="mn05"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        className={
          props.mn06.toLowerCase() === props.city[3].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="mn06"
        id="mn06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
      {/* 
      <input
        onChange={handleChange}
        className={
          props.b06.toLowerCase() === props.city[4].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="b06"
        id="b06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <input
        onChange={handleChange}
        className={
          props.t06.toLowerCase() === props.city[7].letter6
            ? 'containerInput__inputCorrect'
            : 'containerInput__inputFull'
        }
        type="text"
        maxLength="1"
        name="t06"
        id="t06"
        autoComplete="off"
      />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled />
      <CrosswordInputDisabled /> */}
    </form>
  );
};
export default CrosswordEn;
