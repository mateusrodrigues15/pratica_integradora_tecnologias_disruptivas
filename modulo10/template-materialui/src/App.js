import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Modal from "./pages/modal/Modal.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Modal/>
    </div>
  );
}

export default App;
