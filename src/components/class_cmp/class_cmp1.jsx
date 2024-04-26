import React from "react";

export default class FirstClass extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        Ime: {user.name}, Godine: {user.age}
      </div>
    );
  }
}
