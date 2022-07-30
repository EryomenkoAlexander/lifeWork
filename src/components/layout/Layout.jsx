import React from 'react'
import Footer from '../footer/footer-assembly/Footer';
import Header from '../header/header-assembly/Header';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
            <div>
                {children}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout