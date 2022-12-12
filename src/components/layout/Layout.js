import { Fragment } from 'react';
import Footer from './Footer';
import MainHeader from './MainHeader';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main
        style={{
          minHeight: '100vh',
          paddingTop: '7.2rem',
          overflow: 'hidden',
        }}
      >
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
