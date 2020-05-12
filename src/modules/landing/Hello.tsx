import { h } from 'preact';
import { useLanding } from './useLanding';

export const Hello = () => {
  const [state, increment] = useLanding();
  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}