import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import AgentList from "./components/agent-list.component";
import CreateJoinToken from "./components/agent-create-join-token.component";
import EntryList from "./components/entry-list.component";



function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={AgentList} />
                <Route path="/agents" exact component={AgentList} />
                <Route path="/entries" exact component={EntryList} />
                <Route path="/agent/createjointoken" exact component={CreateJoinToken} />
            </div>
        </Router>
    );
}

export default App;
