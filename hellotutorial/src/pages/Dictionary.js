import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    // 3 ways of using useEffect
    // no dependancy array =>  for any state change
    // empty dependacny array --> execute once
    // one or more entry's in the array --> execute for those in the array

    return (
        <>
            <input type="test" onChange={(e) => {
                setWord(e.target.value);
            }}
            />
            <button
                onClick={() => {
                    console.log("Click");
                    navigate('/Definition/' + word);
                }}>Search
            </button>
        </>
    )
}