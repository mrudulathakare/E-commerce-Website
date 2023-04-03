import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Helmet} from 'react-helmet'
import { Toaster } from 'react-hot-toast';


export const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header/>
        <main style={{minHeight:'68vh'}}>
        <Toaster />
          {children}
          </main>
        <Footer/>   
    </div>
  );
};

Layout.defaultProps = {
  title:"ShopKart -- Shop Now!",
  description:"Mern Stack Project",
  keywords:"Mern,React,Node,Mongodb",
  author:"Nikhil Bhandari",
};
export default Layout;