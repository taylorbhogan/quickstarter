import { useSelector } from 'react-redux'
import LogoutButton from '../../auth/LogoutButton';
import styles from './Dropdown.module.css'
import DropdownProjectLink from './DropdownProjectLink';

function Dropdown() {

  const user = useSelector(state => state.session.user)
  console.log(user);

  return (
    <div className={styles.dropdown}>
      <div className={styles.topFlex}>
        <section className={styles.yourAccount}>
          <h2 className={styles.yourAccountText}>YOUR ACCOUNT</h2>
          <div className={styles.accountLinks}>
            <div className={styles.accountLink}>Saved projects</div>
            <div className={styles.accountLink}>Recommended for you</div>
            <div className={styles.accountLink}>Profile</div>
          </div>
        </section>
        <section className={styles.projectsColumn}>
            <h2 className={styles.createdProjectsText}>BACKED PROJECTS</h2>
            <div className={styles.createdProjectsList}>
              <DropdownProjectLink />
              <DropdownProjectLink />
            </div>
        </section>
        <section className={styles.projectsColumn}>
            <h2 className={styles.createdProjectsText}>CREATED PROJECTS</h2>
            <div className={styles.createdProjectsList}>
              <DropdownProjectLink />
              <DropdownProjectLink />
              <DropdownProjectLink />
              <DropdownProjectLink />
            </div>
            <div className={styles.newDiv}>
              <div className={styles.plus}>+</div>
            <div className={styles.new}>New</div>
            </div>
        </section>
      </div>
      <section className={styles.bottom}>
        <LogoutButton />
      </section>
    </div>
  )
}

export default Dropdown
