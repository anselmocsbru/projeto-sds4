import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Olá pessoal da Semana Spring React 4.0</h1>

        <DataTable />
    </div>
    <Footer />
    </>
        );
}

export default App;
