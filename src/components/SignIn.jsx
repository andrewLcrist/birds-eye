import React from 'react'
import { signIn } from '../firebase'
import { split } from 'lodash';

const SignIn = ({ user }) => {

  return (
    <div className="sign-in-container">
      <button className='sign-in-btn' onClick={() => signIn()}>Click to sign in with Google</button>
    </div>
  );
};

export default SignIn;
