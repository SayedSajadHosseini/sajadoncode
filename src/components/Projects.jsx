import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Projects(props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    function getRepos(username) {
      return fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((result) => setRepos(result))
        .catch((err) => console.log(err.message));
    }
    getRepos("SayedSajadHosseini");
  }, []);

  return (
    <div>
      <h3 className="pt-5 font-bold text-2xl mb-2 text-yellow-500">
        Open Source work
      </h3>
      <ul className="space-y-1 pl-3">
        {repos.map((repo) => (
          <li className="hover:text-yellow-600" key={repo.id}>
            <a href={repo.svn_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
