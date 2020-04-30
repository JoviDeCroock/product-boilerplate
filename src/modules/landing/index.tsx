import { h } from 'preact';
import { useState } from 'preact/hooks';

const Landing = () => {
  const [earth, setEarth] = useState(true);

  return (
    <div>
      <h1>Welcome to the reloading experience!</h1>
      <p>{earth ? 'Hello Earth!' : 'Hello World!'}</p>
      <button onClick={() => setEarth(!earth)}>Toggle</button>
    </div>
  )
}

export default Landing;
