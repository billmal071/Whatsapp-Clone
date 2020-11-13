import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from './components/Dashboard';
import { ContactsProvider } from './contexts/ContactProvider'

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return <>{id ? dashboard : <Login onIdSubmit={setId} />}</>;
}

export default App;
