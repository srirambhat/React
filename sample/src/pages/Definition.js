import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import DefinitionSearch from '../Components/DefinitionSearch';
import useFetch from '../Hooks/UseFetch';

export default function Definition() {
    let { search } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        request,
        data: [{ meanings: word }] = [{}],
        errorStatus,
    } = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search);

    useEffect(() => {
        request();
    });

    if (errorStatus === 404) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }

    if (errorStatus) {
        return (
            <>
                <p>There was a problem with the server, try again later ?</p>
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
