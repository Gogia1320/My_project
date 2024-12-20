import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Fileclaimform from "./Components/Fileclaimform/Fileclaimform";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Fileclaimform />
      </div>
    </div>
  );
}

export default App;
