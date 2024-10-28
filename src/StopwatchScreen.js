import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import Runner from './Runner';

const StopwatchScreen = () => {
    //const [runnerList, setRunnerList] = useState(runners);
    const location = useLocation();
    const { runners } = location.state || {};
    const [currentTime, setCurrentTime] = useState({ minutes: 0, seconds: 0 });
    const RUNNER_HEIGHT = 10;


    const deleteRunner = (runnerName) => {
        const filteredRunners = runners.filter(runner => runner !== runnerName);
        this.setState({runners: filteredRunners});
    };

    const updateTime = (minutes, seconds) => {
        setCurrentTime({ minutes, seconds });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Stopwatch App</h1>
            <Stopwatch onTimeChange={updateTime} />
            <div style={styles.runners}>
                {runners.map((runner, index) => (
                    <div key={index} style={styles.runnerItem}>
                        <Runner runnerName={runner} currentTime={currentTime} 
                        onDelete={() => deleteRunner(runner)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: '30px',
        color: 'green',
        marginTop: '60px',
    },
    runnerList: {
        width: '100%',
        maxWidth: '400px',
        marginTop: '20px',
    },
    runnerItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    deleteButton: {
        backgroundColor: 'red',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default StopwatchScreen;
