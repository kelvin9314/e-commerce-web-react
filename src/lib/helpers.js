export const getEnv = (keyName, defaultValue = '') => {
  return process.env[keyName] || defaultValue
}

export const withGithubPageRoute = (restOfRoute) => {
  let result = ''
  // console.log(getEnv('NODE_ENV'))
  switch (getEnv('NODE_ENV')) {
    case 'production':
    case 'product':
    case 'staging':
    case 'stage':
      result = `/${process.env.REACT_APP_GITHUB_REPO}${restOfRoute}`
      break
    case 'development':
    case 'develop':
      result = `${restOfRoute}`
      break
    default:
      result = `${restOfRoute}`
      break
  }
  return result
}
