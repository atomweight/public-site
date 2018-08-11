import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

import logoSvg from '../assets/color_logo_transparent.svg'
import commonStyles from './common.scss'
import './header.scss'

const HamburgerMenu = props => (
  <Menu
    right
    styles={{
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '24px',
        top: '20px',
      },
      bmBurgerBars: {
        background: '#888',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: '#fff',
      },
      bmMenu: {
        backgroundColor: commonStyles.brandDarkGray,
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#fff'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.8)'
      },
      bmMenuWrap: {
        backgroundColor: commonStyles.brandDarkGray,
      }
    }}
    {...props}
  >
    {/* <a className="h1" href="/blog">blog</a> */}
    <a className="h1" href="/open-source">open source</a>
    <a className="h1" href="/success-stories/">success stories</a>
    <a className="h1" href="/why">why atomweight</a>
    <a className="h1" href="/about">about us</a>
    <a className="h1" href="/contact">contact us</a>
  </Menu>
)

const Header = ({ siteTitle }) => (
  <div
    className="header-container d-flex flex-justify-between px-md-5 pl-md-6 pr-md-6 py-1 box-shadow"
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
  </div>
)

export {
  HamburgerMenu,
  Header,
}
