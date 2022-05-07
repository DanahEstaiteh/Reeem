import React, { useState } from 'react'
import AgeChart from './AgeChart';
import PreferredFoot from './PreferredFoot';
import GoalsChart from './GoalsChart';
import './Style.css'
//you can replace player id with player name
const dummyData = [
    { id: 1, goals: 12, preferredFoot: "Left", age: 20 },
    { id: 2, goals: 23, preferredFoot: "Left", age: 22 },
    { id: 3, goals: 34, preferredFoot: "Left", age: 32 },
    { id: 4, goals: 4, preferredFoot: "Left", age: 39 },
    { id: 5, goals: 1, preferredFoot: "Right", age: 40 },
    { id: 6, goals: 15, preferredFoot: "Right", age: 50 },
    { id: 7, goals: 6, preferredFoot: "Right", age: 18 },
    { id: 8, goals: 30, preferredFoot: "Right", age: 30 },
    { id: 9, goals: 44, preferredFoot: "Right", age: 16 }
];

const getPalyerData = () => {
    //call api to get data from backend
    //setPlayers(dataReturnedFromBackend)
}



function MainPage() {
    const [players, setPlayers] = useState(dummyData);
    React.useEffect(() => {
        getPalyerData()
    }, [])

    return (
        <div className='mainDiv'><AgeChart data={players} /><PreferredFoot data={players} /><GoalsChart data={players} /></div>
    )
}

export default MainPage