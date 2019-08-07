import React, { PureComponent, Fragment } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header: Header, footer: Footer, children } = this.props;

    return (
      <Fragment>
        {Header && (
          <header className="header">
            <SectionTitle className="header__title">Header</SectionTitle>
            <div className="header__content">
              <Header />
            </div>
          </header>
        )}

        <main
          className={`main ${Header ? 'main--with-header' : ''} ${
            Footer ? 'main--with-footer' : ''
          }`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {Footer && (
          <footer className="footer">
            <SectionTitle className="header__title">Footer</SectionTitle>
            <Footer />
          </footer>
        )}
      </Fragment>
    );
  }
}

export default Layout;
