export default function FirstFunct(props) {
  const { item3 } = props;

  return (
    <div>
      Ime: {item3.name}, Godine: {item3.age}
    </div>
  );
}
