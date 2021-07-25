import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import DiscoverList from './DiscoverList';
import styles from './Discover.module.css'


function Discover({setShowDiscoverModal}) {
  const dispatch = useDispatch();

  const projects = useSelector(state => Object.values(state.projects))

  const handleClick = () => {
    setShowDiscoverModal(false)
  }

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <div className={styles.document}>
      <button
        onClick={handleClick}
      >Close</button>
      <DiscoverList
        projects={projects}
      />
    </div>
  )
}

export default Discover
