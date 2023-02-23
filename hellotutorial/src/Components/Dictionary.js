import { useState, useEffect } from "react";

export default function Dictionary() 
{
    const [word, setWord] = useState('Help');

    useEffect(
        () => {
            console.log('State Updated' + ' ' + word);
        }
    );

    return (
        <>
            <input type="test" onChange={(e) => {
                setWord(e.target.value);
                }}
            />
            <h1> Lets get the definition of the {word} </h1>
        </>
    )
}