const sh = require(`shell-tag`)
const gitToGithub = require(`github-url-from-git`)

const getCurrentBranch = () => sh`git rev-parse --abbrev-ref HEAD --`.split(`\n`)[0]

module.exports = (remote = `origin`) => {
	const currentBranch = getCurrentBranch()

	sh`git push -u ${ remote } ${ currentBranch }`

	const remoteUrl = sh`git remote get-url --push ${ remote }`.trim()

	const githubUrl = gitToGithub(remoteUrl)

	return githubUrl + `/pull/new/` + currentBranch
}
