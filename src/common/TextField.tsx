import { h, Fragment } from 'preact';

const Input = () => {
  return (
    <Fragment>
      <label htmlFor="input-todo">Todo:</label>
      <input id="input-todo" />
    </Fragment>
  )
}

export default Input;
