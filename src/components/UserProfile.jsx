import React from 'react';

const UserProfile = ({
  displayName,
  username,
  //   photoURL,
  emailAddress,
  isEmailVerified,
}) => {
  return (
    <div>
      <div>
        <span>
          Display Name:{' '}
          {displayName.length > 6
            ? displayName.slice(0, 7).concat('...')
            : displayName}
        </span>
      </div>
      <div>User Name: {username}</div>
      {/* <div>
        Photo: <img src={photoURL} width={50} height={50} />
      </div> */}
      <div>Email: {emailAddress}</div>
      <div>
        VerifyEmail: {isEmailVerified ? 'Email Verified' : 'Email Not Verified'}
      </div>
    </div>
  );
};

export default UserProfile;
