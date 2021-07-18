import ProjectCreateModal from '../ProjectCreateModal';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getProjects } from '../../store/project';


function Learn() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("inside the SpotsList useEffect");
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <h1>Bring your creative project to life.</h1>
      <ProjectCreateModal />
    </>
  )
}

export default Learn
