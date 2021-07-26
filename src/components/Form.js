import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="form">
      <Input handleName={props.handleName} name={props.name} />
      <input type="submit" value="Submit" class="form__button" />
    </form>
  );
};

export default Form;
