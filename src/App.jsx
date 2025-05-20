// import Title from './components/Title';
// import Button from './components/Button';
// import Card from "./components/Card";
import UserProfile from "./components/UserProfile";

function App() {

    const usuario = {
      nome: "luh",
      Status: "Ativo"
    }

  return (
    <>
      <UserProfile profile={usuario}/>
    </>
  );
}
export default App
