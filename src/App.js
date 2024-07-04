import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Component/Login";
import HRRouting from "./HR/HRRouting";
import EmpRouting from "./Employees/EmpRouting";
import ManagerRouting from "./Manager/ManagerRouting";
import "./Allcss/HROffcanva.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <HRRouting/> */}
      {/* <EmpRouting/> */}
      {/* <ManagerRouting/>  */}
      <AppRoutes />
    </div>
  );
}

export default App;
