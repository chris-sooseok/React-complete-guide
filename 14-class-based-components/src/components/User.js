import { Component  } from 'react';
import classes from './User.module.css';

class User extends Component {

  // will be called when users are hidden
  componentWillUnmount() {
    console.log("User component is being removed from the DOM");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
