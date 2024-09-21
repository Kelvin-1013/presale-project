import React from 'react'
import AnimatedPage from '../animated/AnimatedPage';
import Footer from './BasicFooter';
import Navbar from './BasicNavbar';
import ScrollToTopButton from '../other/ScrollToTopButton';


function BasicPage(props) {
  return ( 
    
      <AnimatedPage>
        <div>
            <Navbar activePage={props.activePage}/>
            {props.children}
            <Footer />
            <ScrollToTopButton />
        </div>
      </AnimatedPage>
  );
}

export default BasicPage;
