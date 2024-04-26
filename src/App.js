import "./App.css";
import FirstClass from "./components/class_cmp/class_cmp1";
import SecondClass from "./components/class_cmp/class_cmp2";
import FirstFunct from "./components/funct_cmp/funct_cmp1";
import SecondFunct from "./components/funct_cmp/funct_cmp2";

function App() {
  const users = [
    { name: "Marko", age: 25 },
    { name: "Goran", age: 30 },
    { name: "Iva", age: 35 },
    { name: "Ana", age: 40 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <FirstClass user={users[0]} />
        <SecondClass user={users[1]} />
        <FirstFunct user={users[2]} />
        <SecondFunct user={users[3]} />
      </header>
    </div>
  );
}

export default App;
