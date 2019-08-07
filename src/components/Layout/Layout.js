import React, { PureComponent, Fragment } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  get renderHeader() {
    const { header: Header } = this.props;

    return (
      Header && (
        <header className="header">
          <SectionTitle className="header__title">Header</SectionTitle>
          <div className="header__content">
            <Header />
          </div>
        </header>
      )
    );
  }

  get renderMain() {
    const { header, footer, children } = this.props;
    return (
      <main
        className={`main ${header ? 'main--with-header' : ''} ${
          footer ? 'main--with-footer' : ''
        }`}
      >
        <SectionTitle className="main__title">Main</SectionTitle>
        {children}
      </main>
    );
  }

  get renderFooter() {
    const { footer: Footer } = this.props;

    return (
      Footer && (
        <footer className="footer">
          <SectionTitle className="header__title">Footer</SectionTitle>
          <Footer />
        </footer>
      )
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderHeader}
        {this.renderMain}
        {this.renderFooter}
      </Fragment>
    );
  }
}

export default Layout;
