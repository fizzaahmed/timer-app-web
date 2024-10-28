import React, { useState } from 'react';

const Runner = ({ runnerName, currentTime }) => {
    const [name, setName] = useState(runnerName);
    const [mile1, setMile1] = useState({ minutes: 0, seconds: 0 });
    const [hasMile1, setHasMile1] = useState(false);
    const [mile2, setMile2] = useState({ minutes: 0, seconds: 0 });
    const [hasMile2, setHasMile2] = useState(false);
    const [mile3, setMile3] = useState({ minutes: 0, seconds: 0 });
    const [hasMile3, setHasMile3] = useState(false);

    const getTextFromTime = (time) => (time < 10 ? `0${time}` : time);

    const setMile1Time = () => {
        if (!hasMile1) {
            setMile1(currentTime);
            setHasMile1(true);
        }
    };

    const setMile2Time = () => {
        if (!hasMile2) {
            setMile2(currentTime);
            setHasMile2(true);
        }
    };

    const setMile3Time = () => {
        if (!hasMile3) {
            setMile3(currentTime);
            setHasMile3(true);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.runnerRow}>
                <span style={styles.runnerName}>{name}</span>
                <div style={styles.mileButtonRow}>
                    {hasMile1 ? (
                        <div style={styles.mileTimeBox}>
                            <span style={styles.mileTime}>
                                {getTextFromTime(mile1.minutes)}:{getTextFromTime(mile1.seconds)}
                            </span>
                        </div>
                    ) : (
                        <button style={styles.mileButton} onClick={setMile1Time}>
                            Mile 1
                        </button>
                    )}

                    {hasMile2 ? (
                        <div style={styles.mileTimeBox}>
                            <span style={styles.mileTime}>
                                {getTextFromTime(mile2.minutes)}:{getTextFromTime(mile2.seconds)}
                            </span>
                        </div>
                    ) : (
                        <button style={styles.mileButton} onClick={setMile2Time}>
                            Mile 2
                        </button>
                    )}

                    {hasMile3 ? (
                        <div style={styles.mileTimeBox}>
                            <span style={styles.mileTime}>
                                {getTextFromTime(mile3.minutes)}:{getTextFromTime(mile3.seconds)}
                            </span>
                        </div>
                    ) : (
                        <button style={styles.mileButton} onClick={setMile3Time}>
                            Mile 3
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    runnerRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: '12px',
        justifyContent: 'space-between',
    },
    runnerName: {
        flexShrink: 1,
        fontSize: '16px',
        marginTop: '4px',
        paddingRight: '8px',
        fontWeight: 'bold',
    },
    mileButtonRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mileButton: {
        backgroundColor: '#841584',
        padding: '5px 10px',
        margin: '0 5px',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: '#470b47',
        color: 'white',
        cursor: 'pointer',
    },
    mileTimeBox: {
        padding: '5px 10px',
        margin: '0 5px',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: '#470b47',
    },
    mileTime: {
        fontSize: '16px',
    },
};

export default Runner;
