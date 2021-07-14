import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LinkingGithub.module.css"

export function LinkinGithub() {
  const { addUserData } = useContext(ChallengesContext);
  const [user, setUser] = useState("");

  function handleUser(event) {
    setUser(`https://api.github.com/users/${event.target.value}`);
    
  }

  {console.log(user)}

  // function handleSubmitUser() {
  //   addUserData("https://api.github.com/users/{user}");
  // }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="/icons/github.svg" alt="Github" />
          <input type="text" id="github_username" onChange={handleUser} placeholder="Github username" />
          <button type="button" onClick={handleUser}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}