import sh from 'shell-tag'
import gitToGithub from 'github-url-from-git'

const getCurrentBranch = () => sh`git rev-parse --abbrev-ref HEAD --`.split(`\n`)[0]

export default (remote = `origin`) => {
	const currentBranch = getCurrentBranch()

	sh`git push -u ${ remote } ${ currentBranch }`

	const remoteUrl = sh`git remote get-url --push ${ remote }`.trim()

	const githubUrl = gitToGithub(remoteUrl)

	return githubUrl + `/pull/new/` + currentBranch
}
