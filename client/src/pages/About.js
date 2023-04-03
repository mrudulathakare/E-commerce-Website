// import React from 'react';
// import { Layout } from './../components/Layout/Layout';

// const About = () => {
//   return (
//     <Layout>
//         <h1>About Us</h1>
//     </Layout>
//   );
// };

// export default About;

import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Shopkart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/about.png" alt="about" style={{ width: "70%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            &emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Cupiditate dignissimos necessitatibus ducimus? Consectetur
            repellat dolore deserunt qui aliquam, enim eveniet error atque
            adipisci nihil. Iusto odio sequi velit possimus cum!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
