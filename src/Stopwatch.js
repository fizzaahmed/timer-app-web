import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = ({ onTimeChange }) => {
    const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    const startTimeRef = useRef({ minutes: 0, seconds: 0, milliseconds: 0 });

    useEffect(() => {
        if (onTimeChange) {
            onTimeChange(minutes, seconds);
        }
    }, [minutes, seconds]);

    const startStopwatch = () => {
        startTimeRef.current = Date.now() - time * 10;
        intervalRef.current = setInterval(() => {
            const thisTime = Math.floor((Date.now() - startTimeRef.current) / 10);
            setTime(thisTime);
            const thisMinutes = Math.floor(thisTime / 6000);
            setMinutes(thisMinutes);
            const thisSeconds = Math.floor((thisTime - thisMinutes * 6000) / 100);
            setSeconds(thisSeconds);
        }, 1000);
        setRunning(true);
    };

    const pauseStopwatch = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
    };

    const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setMinutes(0);
        setSeconds(0);
        setRunning(false);
    };

    return (
        <div style={styles.container}>
            <div style={styles.timeDisplay}>
                <span style={styles.timeText}>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
            </div>
            <div style={styles.buttonContainer}>
                {running ? (
                    <button style={{ ...styles.button, ...styles.pauseButton }} onClick={pauseStopwatch}>
                        Pause
                    </button>
                ) : (
                    <button style={{ ...styles.button, ...styles.startButton }} onClick={startStopwatch}>
                        Start
                    </button>
                )}
                <button style={{ ...styles.button, ...styles.resetButton }} onClick={resetStopwatch}>
                    Reset
                </button>
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
    timeDisplay: {
        margin: 20,
        fontSize: 24,
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: 5,
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    startButton: {
        backgroundColor: '#2ecc71',
    },
    resetButton: {
        backgroundColor: '#e74c3c',
    },
    pauseButton: {
        backgroundColor: '#f39c12',
    },
    timeText: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
};

export default Stopwatch;
