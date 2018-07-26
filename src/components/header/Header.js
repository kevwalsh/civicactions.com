import React from 'react'

import Logo from './../atoms/logo/Logo';

const Header = ({ data, siteTitle }) => {

  return(
    <div className = "usa-grid header__inner">
      <h1 className = "usa-width-one-third">
        <Logo siteTitle = { siteTitle } />
      </h1>
    </div>
  )
};

export default Header