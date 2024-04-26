import React from "react";

export default class FirstClass extends React.Component {
  render() {
    const { item1 } = this.props;
    return (
      <div>
        Ime: {item1.name}, Godine: {item1.age}
      </div>
    );
  }
}
