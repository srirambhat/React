import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "../Components/NotFound";

export default function Definition() {
    const [word, setWord] = useState();
    console.log(useParams());

    let { search } = useParams();
    const navigate = useNavigate();
    const [notFound, setNotfound] = useState(false);

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    //navigate('/404');
                    setNotfound(true);
                }

                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });
    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>

        );
    }

    return (
        <>
            {word ? (
                <>
                    <h1>Here is the definition: </h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                </>

            ) : null
            }
        </>
    );
}