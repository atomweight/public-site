import React from 'react'

import { Link } from 'gatsby'

import commonStyles from './common.scss'

const Abbr = props => (
  <abbr
    title={props.title}
    style={{
      color: commonStyles.brandPrimary,
      cursor: "help",
    }}
  >
    {props.children}
  </abbr>
)

const LinkButton = props => (
  <Link
    className={`btn btn-large btn-${props.color}`}
    role="button"
    to={props.to}
  >
    {props.children}
  </Link>
)

const ExternalLinkButton = props => (
  <a
    className={`btn btn-large btn-${props.color}`}
    role="button"
    href={props.to}
    target={props.target}
  >
    {props.children}
  </a>
)

LinkButton.defaultProps = {
  color: 'purple',
}
ExternalLinkButton.defaultProps = {
  color: 'purple',
  target: '_blank',
}

export {
  Abbr,
  LinkButton,
  ExternalLinkButton,
}
