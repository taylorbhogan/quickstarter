import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProjectView from './UserProjectView';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  const projects = user.projects
  console.log(projects);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>User Info</h2>
        <ul>
          <li>
            <strong>User Id</strong> {userId}
          </li>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
        </ul>
      </div>
      <div>
      {projects?.map((project) => <UserProjectView key={project.id} project={project} />)}
      </div>
    </div>

  );
}
export default User;
