import React from "react";
export default class SecondClass extends React.Component {
  render() {
    const { item2 } = this.props;
    return (
      <div>
        Ime: {item2.name}, Godine: {item2.age}
      </div>
    );
  }
}
