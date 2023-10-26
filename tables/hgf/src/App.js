import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchModels() {
            try {
                const response = await axios.get(
                    'https://huggingface.co/api/models'
                );
                setModels(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching models:', error);
                setLoading(false);
            }
        }

        fetchModels();
    }, []);

    return (
        <div>
            <h1>HuggingFace Models</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <tbody>
                    {/*
                    <tr>
                        <th>Model Name</th>
                        <th>Likes</th>
                        <th>Downloads</th>
                        <th>TaskType</th>
                        <th>Author</th>
                    </tr>*/}
                    <ul>
                        {models.map((model) => (
                            <tr key={model.id}>
                                <td>{model.id}</td>
                                <td>{model.likes}</td>
                                <td>{model.downloads}</td>
                                <td>{model.pipeline_tag}</td>
                            </tr>
                        ))}
                    </ul>
                </tbody>
            )}
        </div>
    );
}

export default App;
