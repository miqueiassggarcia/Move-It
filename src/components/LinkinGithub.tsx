import axios from "axios";
import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import styles from "../styles/components/LinkingGithub.module.css"

export function LinkinGithub() {
  const { addUserData } = useContext(ProfileContext);
  const [user, setUser] = useState("");

  function handleUser(event) {
    setUser(event.target.value);
  }

  async function getUserData() {
    const githubData: JSON = await axios.get(`https://api.github.com/users/${user}`)
    addUserData(githubData);
    console.log(githubData);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="/icons/github.svg" alt="Github" />
          <input type="text" id="github_username" onChange={handleUser} placeholder="Github username" />
          <button type="button" onClick={getUserData}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}