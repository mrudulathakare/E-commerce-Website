import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import '../../styles/UserStyles.css';

const Profile = () => {
  return (
    <Layout title={"Your Profile - i2Eye"}>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9'>
                    <h1 id="heading">Your profile</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile;