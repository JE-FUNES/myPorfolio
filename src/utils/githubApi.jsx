import React, { useEffect, useState } from 'react';
import "./GitHub.css";

const GitHubRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/{TU_USUARIO}/repos')
            .then((response) => response.json())
            .then((data) => {
                console.log("Data: ", data);
                if (Array.isArray(data)) {
                    setRepos(data);
                } else {
                    console.error('La respuesta no es un array:', data);
                }
            })
            .catch((error) => console.error('Error fetching repos:', error));
    }, []);
    

    return (
        <React.Fragment>
        {/*----- Start Github -----*/}
        <section className="py-24 bg-purple-50" id="Github">
        <div className="repos-container">
            {repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        Ver en GitHub
                    </a>
                </div>
            ))}
        </div>
        </section>
        </React.Fragment>
    );
};

export default GitHubRepos;
