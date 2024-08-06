import React, { useState } from 'react';

function JokePage() {
    const [jokes, setJokes] = useState([]);

    const fetchData = async () => {
        const url = 'https://official-joke-api.appspot.com/random_joke';
        const options = {
            method: 'GET'
        };

        try {
            const jokePromises = Array.from({ length: 10 }, () => fetch(url, options).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            }));

            const jokeResults = await Promise.all(jokePromises);
            setJokes(jokeResults);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <h2>Jokes</h2>
            <div className="jokeButtonContainer">
                <button className = "jokeButton" type="submit" onClick={fetchData}>Fetch Jokes</button>
            </div>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th>Joke</th>
                            <th>Punchline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jokes.map((joke, index) => (
                            <tr key={index}>
                                <td>{joke.setup}</td>
                                <td>{joke.punchline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </article>
        </>
    );
}

export default JokePage;
