/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"

const MobileMenu = ({ nav, basePath }) => (
  <div
    sx={{
      position: `absolute`,
      height: `100%`,
      zIndex: `2`,
      top: 0,
      right: 0,
      left: 0,
    }}
  >
    <div
      sx={{
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        flexGrow: 1,
        px: 3,
        backgroundColor: `background`,
      }}
    >
      <ul
        sx={{
          margin: 0,
          padding: 0,
          listStyle: `none`,
          fontSize: 5,
          fontWeight: `bold`,
        }}
      >
        {nav.map(item => (
          <li sx={{ mb: 4 }}>
            <Styled.a
              key={item.slug}
              as={Link}
              activeClassName="active"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Styled.a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default MobileMenu
