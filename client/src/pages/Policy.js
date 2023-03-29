import React from 'react'
import Layout from './../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - i2Eye"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactme.jpg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p>&emsp;&emsp;This Privacy Policy is applicable on You when You access and use Our Website/Stores. We reserve the right to modify or amend this Privacy Policy at any time and for any reason. However, We commit to ensuring that the privacy rights of individuals shall be maintained.<br></br><br></br>BY USING OUR SERVICES OR BY OTHERWISE GIVING US YOUR PERSONAL INFORMATION, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy