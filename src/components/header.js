import React from 'react'
import { Link } from 'gatsby'

import logoSvg from '../assets/color_logo_transparent.svg'
import commonStyles from './common.scss'
import './header.scss'

const NavLink = props => (
  <Link to={props.to} activeClassName="selected" className="px-md-1 px-lg-2">
    {props.children}
  </Link>
)

const Header = ({ siteTitle }) => (
  <div
    className="header-container d-flex flex-justify-between px-5 pl-md-6 pr-md-6 py-3 box-shadow"
    style={{
      backgroundColor: commonStyles.brandDarkGray,
      zIndex: 5,
    }}
  >
    <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
      <h1 className="pt-2" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            display: 'block',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            src={logoSvg}
            alt={siteTitle}
            height="48"
            style={{ marginBottom: 0 }}
          />
        </Link>
      </h1>
    </div>
    <div className="d-none d-lg-flex flex-justify-end">
      <nav className="flex-self-center flex-shrink-0 text-white" aria-label="Primary">
        {/* <NavLink to="/blog">blog</NavLink> */}
        <NavLink to="/open-source">open source</NavLink>
        <NavLink to="/success-stories/">success stories</NavLink>
        <NavLink to="/why">why atomweight</NavLink>
        <NavLink to="/about">about us</NavLink>
      </nav>
    </div>
  </div>
)

export default Header
