import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';
 
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <Header/>
        <main style={{minHeight:"73.8vh"}}>
        {children}
        </main>
        <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  title: "i2Eye - Shop Now",
  description: "mern stack project",
  keywords: "mern,react,node,mongoDB",
  author: "Nirali Mamaniya"
}
export default Layout;