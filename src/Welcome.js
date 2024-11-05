import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const Welcome = () => {  
    const [runners, setRunners] = useState([]);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const addRunner = () => { 
        if (runners.length === 0) {
            setRunners([name]);
        } else {
            const combinedNames = runners.concat([name]);
            setRunners(combinedNames);
        }
        setName("");
    };

    const clearRunners = () => {
        setRunners([]);
    };

    const handleStopwatchRedirect = () => {
        navigate('/stopwatch', { state: { runners } });
    };

    return (
        <div style={styles.container}> 
            <header
                style={styles.header}>
                Team Race Timer App
            </header>
            <input
                style={styles.input}
                placeholder="Add new runner!"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <button
                style={styles.button}
                onClick={addRunner}>
                <span style={styles.buttonText}>Add</span> 
            </button>
            <button
                style={styles.startButton}
                onClick={handleStopwatchRedirect}>
                <span style={styles.buttonText}>Start Session</span> 
            </button>
            <div style={styles.horizontalLine} />
            <h2 style={styles.todaysRunnersText}>Today's Runners:</h2>
            <div>
                {runners.map((runner, index) => (
                    <div key={index} style={styles.runnerItem}>
                        <span style={styles.runnerName}>{runner}</span>
                    </div>
                ))}
            </div>
            <button
                style={styles.clearButton}
                onClick={clearRunners}>
                <span style={styles.buttonText}>Clear Runner List</span>
            </button>
        </div>
    );
};

const styles = {
    container: { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px',
    }, 
    header: {
        fontSize: '30px',
        color: 'green',
        marginTop: '60px',
    },
    button: { 
        padding: '10px 20px', 
        borderRadius: '5px', 
        backgroundColor: '#2ecc71', 
        marginRight: '10px', 
        marginTop: '10px',
        border: 'none',
        cursor: 'pointer',
    },
    startButton: { 
        padding: '10px 20px', 
        borderRadius: '5px', 
        backgroundColor: '#2170c4', 
        marginRight: '10px', 
        marginTop: '10px',
        border: 'none',
        cursor: 'pointer',
    },
    clearButton: { 
        padding: '10px 20px', 
        borderRadius: '5px', 
        backgroundColor: 'red', 
        marginRight: '10px', 
        marginTop: '10px',
        border: 'none',
        cursor: 'pointer',
    },
    buttonText: { 
        color: 'white', 
        fontSize: '16px', 
    }, 
    input: {
        margin: '15px',
        padding: '5px',
        height: '40px',
        width: '200px',
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
    },
    todaysRunnersText: {
        margin: '15px',
        fontSize: '20px',
    },
    runnerItem: {
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
    },
    runnerName: {
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
    },
    horizontalLine: {
        width: '100%',
        height: '1px',
        backgroundColor: '#000',
        marginTop: '30px',
    }
};

export default Welcome;
