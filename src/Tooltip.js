import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function Tooltip({children, direction, text, noDelay, align, wrap}) {
  return (
    <span
      aria-label={text}
      className={classnames(
        'tooltipped',
        `tooltipped-${direction}`,
        align && `tooltipped-align-${align}-2`,
        noDelay && 'tooltipped-no-delay',
        wrap && 'tooltipped-multiline'
      )}
    >
      {children}
    </span>
  )
}

Tooltip.alignments = ['left', 'right']

Tooltip.directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']

Tooltip.defaultProps = {
  direction: 'n'
}

Tooltip.propTypes = {
  align: PropTypes.oneOf(Tooltip.alignments),
  children: PropTypes.node,
  direction: PropTypes.oneOf(Tooltip.directions),
  noDelay: PropTypes.bool,
  text: PropTypes.string,
  wrap: PropTypes.bool
}
