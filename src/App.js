import react from "react";
import './App.css';
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";

function App() {
  return (
    <div className="_main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
