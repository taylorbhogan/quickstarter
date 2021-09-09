import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SlideProject from "../ViewComponents/Slides/SlideProject";
import styles from "./User.module.css";
import LargeUserImage from "./LargeUserImage";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [showBackedProjects, setShowBackedProjects] = useState(true);
  const [backings, setBackings] = useState([]);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const projects = user.projects;
  console.log(projects);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);

      const backingsResponse = await fetch(`/api/backings/users/${userId}`);
      const backingsData = await backingsResponse.json();
      setBackings(backingsData.user_backed_projects);
    })();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    setImageLoading(true);

    const res = await fetch('api/images', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
    } else {
      setImageLoading(false);
      console.log("error");
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className={styles.topColumnFlex}>
        <div className={styles.headsUpDiv}>
          <div className={styles.visibilityText}>
            <span>
              <i className="fas fa-eye" />
            </span>{" "}
            This profile page is visible only to you.
          </div>
          <button className={styles.btn}>Manage your privacy settings</button>
        </div>
        <div className={styles.avatarDiv}>
          <div className={styles.dummyAvatar}>
            <LargeUserImage />
          </div>
        </div>
        <div className={styles.userInfoDiv}>
          <div className={styles.usernameDiv}>{user.username}</div>
          <form onSubmit={handleSubmit}>
            <input
              type='file'
              accept='image/*'
              onChange={updateImage}
            />
            <button type='submit'>Submit</button>
            {(imageLoading) && <p>Loading...</p>}
          </form>
          <div className={styles.userInfo}>
            {backings.length === 1 && (
              <span>Backed {backings.length} project · Joined Jul 2021</span>
            )}
            {backings.length > 1 && (
              <span>Backed {backings.length} projects · Joined Jul 2021</span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomColumnFlex}>
        <div className={styles.aboutOrBacked}>
          <div>
            <button
              onClick={() => setShowBackedProjects(false)}
              className={styles.setShowBackedProjectsButton}
            >
              <div className={styles.greenBarTopper}>About</div>
              {!showBackedProjects && <div className={styles.greenBar}></div>}
            </button>
          </div>
          <div>
            <button
              onClick={() => setShowBackedProjects(true)}
              className={styles.setShowBackedProjectsButton}
            >
              <div className={styles.greenBarTopper}>Backed</div>
              {showBackedProjects && <div className={styles.greenBar}></div>}
            </button>
          </div>
        </div>
        {!showBackedProjects && (
          <div className={styles.showUser}>
            <div className={styles.showUserInnerDiv}>
              <div className={styles.showUserInnerDivHeader}>Biography</div>
              <div>
                <div className={styles.showUserInnerDivText}>
                  Let people know more about you.
                </div>
                <div>Add a biography</div>
              </div>
            </div>
            <div className={styles.showUserInnerDiv} id={styles.websites}>
              <div className={styles.showUserInnerDivHeader}>Websites</div>
              <div>Add websites</div>
            </div>
          </div>
        )}
        {showBackedProjects && (
          <div className={styles.slideProjectDiv}>
            {backings?.map((project) => (
              <SlideProject key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default User;
