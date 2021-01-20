import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import AgentList from "./components/agent-list.component";
import CreateJoinToken from "./components/agent-create-join-token.component";



function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={AgentList} />
                <Route path="/agents" exact component={AgentList} />
                <Route path="/agent/createjointoken" exact component={CreateJoinToken} />
            </div>
        </Router>
    );
}

export default App;
