import { Fragment } from 'react';
import Footer from './Footer';
import MainHeader from './MainHeader';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
