/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import replaceSlashes from "../utils/replaceSlashes"

const Header = () => {
  const { siteTitle } = useSiteMetadata()
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header
      sx={{
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 10,
        width: `100%`,
        backgroundColor: `background`,
        borderBottomWidth: 1,
        borderBottomStyle: `solid`,
        borderColor: `#ececec`,
      }}
    >
      <div sx={{ px: 16, py: 2 }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            a: { color: `secondary`, ":hover": { color: `heading` } },
          }}
        >
          <Link
            to={replaceSlashes(`/${basePath}`)}
            aria-label={`${siteTitle} - Back to home`}
            sx={{ color: `heading`, textDecoration: `none` }}
          >
            <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: 2 }}>{siteTitle}</h1>
          </Link>
          {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
          <Navigation nav={nav} />
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
