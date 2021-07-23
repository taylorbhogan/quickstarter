import styles from './ProjectMainContentRight.module.css'

function ProjectMainContentRight({ addABacking, amount, setAmount, project }) {
  return (
    <div>
      <form>
        <label>Want to back this project?</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button
          type='submit'
          // id={17}
          // id='hello'
          // DEFAULT BACKING DOES NOT GET AN ID; REWARDS DO
          onClick={addABacking}
        >Add a backing</button>
      </form>
    </div>
  )
}

export default ProjectMainContentRight
