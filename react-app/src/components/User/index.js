import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SlideProject from "../ViewComponents/Slides/SlideProject";
import styles from "./User.module.css";
import LargeUserImage from "./LargeUserImage";
import PageNotFound from '../PageNotFound'
import { editUser } from "../../store/session";

function User() {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [showBackedProjects, setShowBackedProjects] = useState(true);
  const [backings, setBackings] = useState([]);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [showEditImage, setShowEditImage] = useState(false)
  const [showSaveImage, setShowSaveImage] = useState(false)
  const [saveChangesText, setSaveChangesText] = useState('Save changes')
  const [formErrors, setFormErrors] = useState([])

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

    const res = await fetch('/api/images', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const url = await res.json();
      user.user_image_url = url.url
      setUser(user)
      setShowSaveImage(true)
      setImageLoading(false);
    } else {
      setImageLoading(false);
      console.log("error");
    }
  }

  const handleSave = async (e) => {
    const errors = await dispatch(editUser(user))

    if (errors) {
      setFormErrors(errors)
    } else {
      setSaveChangesText('Image saved!');
      setTimeout(() => {
        setSaveChangesText('Save changes')
      }, 7000)
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  if (!user) {
    return null;
  }

  if (sessionUser.id !== +userId) {
    return <PageNotFound />;
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
          <div className={styles.privacyDiv}>
          <button style={{'cursor': 'not-allowed'}} className={styles.btn}>Manage your privacy settings</button>
          </div>
        </div>
        <div className={styles.userImageDiv}>
          {user.user_image_url
            ?
            <img
              alt='user profile'
              src={user.user_image_url}
              className={styles.userImage}
            ></img>
            :
            <LargeUserImage />
          }
        </div>
        <div className={styles.userInfoDiv}>
        {formErrors &&
              formErrors.map((error, ind) => (
                <div style={{ color: "red", marginTop: '5px', marginBottom: '5px', display: 'flex', justifyContent: 'center' }} key={ind}>
                  {error}
                </div>
              ))}
          <div className={styles.usernameDiv}>{user.username}</div>
          {
            showEditImage
            ?
            <form
              className={styles.form}
              onSubmit={handleSubmit}>
              <input
                type='file'
                id={'imageFile'}
                accept='image/*'
                onChange={updateImage}
              />
              <label
                htmlFor={'imageFile'}
              >{image ? 'Select different image file' : 'Select image file'}</label>
              {!showSaveImage &&
              <button
              className={styles.btn}
              type='submit'>Upload</button>}
              {(imageLoading) && <div className={styles.loading}>Loading...</div>}
            </form>
            :
            <button
              className={styles.btn}
              onClick={() => setShowEditImage(!showEditImage)}
            >Edit Profile Image</button>
          }
          {
            showSaveImage
            ?
            <button
              onClick={handleSave}
              className={styles.btn}
            >{saveChangesText}</button>
            :
            null
          }
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
