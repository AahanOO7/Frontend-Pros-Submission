import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Courses from './Courses';
import Header from './Header';
import Landing from './Landing';
import Course from './Course';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="app">
            <Router>
                <Header
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSidebarOpen={isSidebarOpen}
                />
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Switch>
                    <Route path="/" exact>
                        <Landing />
                    </Route>
                    <Route path="/courses" exact>
                        <Courses />
                    </Route>
                    <Route path="/course/:id" component={Course} exact />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
