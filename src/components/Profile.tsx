import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext"
import { ProfileContext } from "../contexts/ProfileContext";
import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { user } = useContext(ProfileContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.data.avatar_url} alt="Diego Fernandes" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}