import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <Input handleName={props.handleName} name={props.name} />
      <button class="form__button">Go</button>
    </form>
  );
};

export default Form;
