import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import todolist from "./Pages/to-do/to-do-list";
import calender from "./Pages/calender";
import diary from "./Pages/diary";
import medicinealert from "./Pages/medicine-alert";
import prayeralert from "./Pages/prayer-alert";
import classalert from "./Pages/class-alert";
import meetingalert from "./Pages/meeting-alert";
import Signup from "./Pages/sign-up";
import signin from "./Pages/sign-in";
import Todoform from "./Pages/to-do/todoform";
import TodoList from "./Pages/to-do/todolist";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/to-do/todolist" component={TodoList} />
        <Route path="/calender" component={calender} />
        <Route path="/diary" component={diary} />
        <Route path="/medicine-alert" component={medicinealert} />
        <Route path="/prayer-alert" component={prayeralert} />
        <Route path="/class-alert" component={classalert} />
        <Route path="/meeting-alert" component={meetingalert} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/sign-in" component={signin} />
      </Switch>
    </Router>
  );
}

export default App;
