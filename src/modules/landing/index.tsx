import { h, Component } from 'preact';
import { useLanding } from './useLanding';
import { Hello } from './Hello';

// class Landing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { i: 0 };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState({ i: this.state.i + 2 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Counter: {this.state.i}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

const Landing = () => {
  const [state, increment] = useLanding();

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={increment}>Increment</button>
      <Hello />
    </div>
  )
}

export default Landing;
