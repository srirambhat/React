import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import DefinitionSearch from '../Components/DefinitionSearch';

export default function Definition() {
    const [word, setWord] = useState();
    console.log(useParams());

    let { search } = useParams();
    const navigate = useNavigate();
    const [notFound, setNotfound] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
                console.log(response.status);

                if (response.status === 404) {
                    //navigate('/404');
                    setNotfound(true);
                } else if (response.status === 401) {
                    //navigate('/login');
                } else if (response.status === 500) {
                    navigate('/servererror');
                }

                if (!response.ok) {
                    setError(true);
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            })
            .catch((e) => {
                console.log(e.message);
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

    if (error === true) {
        return (
            <>
                <p>Something went wrong, try again ?</p>
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
                    <p>Search Again: </p>
                    <DefinitionSearch />
                </>
            ) : null}
        </>
    );
}
