import { useState } from 'preact/hooks';

export const useLanding = () => {
  const [state, setState] = useState(2);

  return [state, () => {
    setState(() => state + 44)
  }]
}