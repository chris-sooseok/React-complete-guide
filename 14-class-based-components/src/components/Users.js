import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";


class Users extends Component {
  constructor() {
    super();
    // in class components, state has to be named 'state' and be assigned an object value always
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    // ? what if you want to handle the error from parent component?
    // try {
    //   someCodeThatMightFail();
    // } catch (error) {
    //   console.error(error);
    // }
    if (this.props.users.length === 0){
      throw new Error("No users provided");
    }
  }

  toggleUsersHandler() {
    // merge the passed object with the current state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
