import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <div>
      UserList
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id}>
              <span>{user.name}</span>
            </div>
          ))
        ) : (
          <span>No Users</span>
        )}
      </div>
    </div>
  );
};

export default UserList;
