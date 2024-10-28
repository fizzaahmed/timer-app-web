import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StopwatchScreen from './StopwatchScreen';
import Welcome from './Welcome';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/stopwatch" element={<StopwatchScreen />} />
            </Routes>
        </Router>
    );
};

export default App;
