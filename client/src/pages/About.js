import React from 'react'
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us - i2Eye"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="about"
            style={{ width: "80%"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          &emsp;&emsp;i2Eye is an internet-first brand of eyewear for people around the world. The product catalog includes customizable eyeglasses, prescription glasses, and more.
          <br></br><br></br>
          <h4>Vision</h4>
          &emsp;&emsp;<i>Creating a sharper world by ensuring that every individual can see better and live better.</i>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About