import React from "react";
export default class SecondClass extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        Ime: {user.name}, Godine: {user.age}
      </div>
    );
  }
}
