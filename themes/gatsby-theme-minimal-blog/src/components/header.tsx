/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import Navigation from "./navigation"
import replaceSlashes from "../utils/replaceSlashes"

const Header = ({ nav, basePath, toggleNav, navOpen }) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <header
      className="fixed top-0 inset-x-0 z-20"
      sx={{
        backgroundColor: `background`,
        borderBottomWidth: 1,
        borderBottomStyle: `solid`,
        borderColor: `#ececec`,
      }}
    >
      <div sx={{ px: 16, py: 3 }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            a: { color: `heading` },
          }}
        >
          <Link
            to={replaceSlashes(`/${basePath}`)}
            aria-label={`${siteTitle} - Back to home`}
            sx={{ color: `heading`, textDecoration: `none` }}
          >
            <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [1, 2], pb: `1px` }}>
              Kai<span sx={{ color: `primary` }}>Codes</span>
            </h1>
          </Link>
          <Navigation nav={nav} toggleNav={toggleNav} navOpen={navOpen} />
        </Flex>
      </div>
      {/* <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        {externalLinks && externalLinks.length > 0 && (
          <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
            {externalLinks.map(link => (
              <Styled.a key={link.url} href={link.url}>
                {link.name}
              </Styled.a>
            ))}
          </div>
        )}
      </div> */}
    </header>
  )
}

export default Header
