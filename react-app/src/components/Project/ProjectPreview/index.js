import styles from './ProjectPreview.module.css'

function ProjectPreview() {
  return (
    <div>
      <div className={styles.imageDiv}>I am an image</div>
      <div>I am a title</div>
      <div>I am a subTitle</div>
      <div>I am the creator</div>
    </div>
  )
}

export default ProjectPreview
