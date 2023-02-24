import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    // 3 ways of using useEffect
    // no dependancy array =>  for any state change
    // empty dependacny array --> execute once
    // one or more entry's in the array --> execute for those in the array

    return (
        <form className="flex space-between space-x-3 max-w-[300px]"
            onSubmit={() => {
                navigate('/Dictionary/' + word);
            }}>
            <input
                className="shrink min-w-0 px-2 rounded py-1"
                placeholder="Dinosaur"
                type="test" onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded py-1 px-2">
                Search</button>
        </form>
    )
}