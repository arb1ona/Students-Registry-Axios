import tree from "./tree.jpg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
