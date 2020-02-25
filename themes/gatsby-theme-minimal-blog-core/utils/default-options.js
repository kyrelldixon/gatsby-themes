module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const blogPath = themeOptions.blogPath || `/blog`
  const postsPath = themeOptions.postsPath || `content/posts`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const externalLinks = themeOptions.externalLinks || []
  const navigation = themeOptions.navigation || []
  const showLineNumbers = themeOptions.showLineNumbers || true

  return {
    basePath,
    blogPath,
    postsPath,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
  }
}
