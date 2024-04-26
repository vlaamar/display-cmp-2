import PropTypes from "prop-types";

SecondFunct.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default function SecondFunct({ user }) {
  return (
    <div>
      Ime: {user.name}, Godine: {user.age}
    </div>
  );
}
