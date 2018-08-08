import React from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

import './layout.scss'

const Masthead = props => (
  <div>
    <div
      className="flex-row width-full"
      style={{
        position: 'relative',
        zIndex: 1,
        height: props.height,
        minHeight: '400px',
      }}
    >
      <div
        className="responsive-full-width flex-row mx-auto py-4 px-3 px-md-6 px-lg-3 anim-fade-in"
        style={{
          color: props.color,
        }}
      >
        <h1 className="alt-h1 f000-light mb-4 mt-lg-7 mt-md-5 mt-sm-3">
          {props.heading}
        </h1>
        {props.children}
      </div>
    </div>
    <Image
      sizes={props.imageSizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 68,  // header height = 32 + 16px top/bottom padding
        width: '100%',
        height: props.height,
        minHeight: '400px',
      }}
    />
  </div>
)

Masthead.propTypes = {
  imageSizes: PropTypes.object.isRequired,
  children: PropTypes.node,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  height: PropTypes.string,
}

Masthead.defaultProps = {
  color: '#fff',
  height: '50vh',
}

export default Masthead
