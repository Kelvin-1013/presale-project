import React from 'react'
import AnimatedPage from '../animated/AnimatedPage';
// import AdminFooter from './AdminFooter';
import Navbar from './BasicNavbar';
import ScrollToTopButton from '../other/ScrollToTopButton';

function BasicPage(props) {
  return (

    <AnimatedPage>
      <div className='bg-gray-200 min-w-[374px] min-h-[100vh]'>
        <Navbar activePage={props.activePage} />
        {props.children}
        {/* <AdminFooter /> */}
        <ScrollToTopButton />
      </div>
    </AnimatedPage>
  );
}

export default BasicPage;

