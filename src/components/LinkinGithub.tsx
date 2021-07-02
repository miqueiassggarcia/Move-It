import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModel.module.css"

export function LinkinGithub() {
  const { addUserData } = useContext(ChallengesContext);
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");

  function handleUsername(event) {
    setName(event.target.value);
  }
  function handleGithubUsername(event) {
    setGithub(event.target.value);
  }

  function handleSubmitUser() {
    addUserData(name, github);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
          <img src="" alt="" />
          <label htmlFor="username">Nome</label><input type="text" id="username" onChange={handleUsername}/>
          <label htmlFor="github_username">github.com/</label><input type="text" id="github_username" onChange={handleGithubUsername}/>
          <button type="button" onClick={handleSubmitUser}></button>
      </div>
    </div>
  )
}