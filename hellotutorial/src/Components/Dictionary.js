import { useState, useEffect } from "react";

export default function Dictionary() 
{
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(
        () => {
            console.log('State Updated ' + 'word: ' + word);
        }
    , [word]);

    useEffect(
        () => {
            console.log('State Updated ' + ' word2: ' +word2);
        }
    , [word2]);

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
            <h1> Lets get the definition of the {word} </h1>

            <input type="test" onChange={(e) => {
                setWord2(e.target.value);
                }}
            />
            <h1> Lets get the definition of the {word2} </h1>
        </>
    )
}