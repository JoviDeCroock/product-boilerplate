import { h, Component } from 'preact';
import { useState } from 'preact/hooks';

// class Landing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { i: 0 };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState({ i: this.state.i + 3 });
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
  const [state, setState] = useState(2);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => setState(state + 4)}>Increment</button>
    </div>
  )
}

export default Landing;
