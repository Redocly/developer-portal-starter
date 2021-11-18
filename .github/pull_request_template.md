Preview docs changes: https://preview.redoc.ly/fastaf/<branch-name>

Preview docs changes: https://preview.redoc.ly/fastaf/ $GITHUB_REF $env.GITHUB_REF $payload.pull_request.head.ref https://api.github.com/users/yourGitHubUsername/events/public

(If you have Redocly Admin access, all preview builds are available at https://app.redoc.ly/org/fast/portal/fastaf/builds)

## Brief description of changes:

## Affected pages (if applicable)

- Link to existing Docs page: https://fast.co/docs/<full_slug>
- Link to new or updated page: https://preview.redoc.ly/fastaf/<branch-name>/<full_slug>

**Clarification: if old page is being replaced or renamed, redirect should be set up; if completely new page, just provide new link.**

## References/Context/Links (e.g. Slack Channel threads, Notion pages, Docs, Slides, Jira tickets, etc.)

- Related Jira tickets (DEVDOCS tickets can be left out if already included in commit messages and/or PR title)
- Notion pages, Google Docs, Google Slides
- Slack Channel Discussions

## Check yourself

- [ ] Code is linted
- [ ] Tested visually (i.e. locally and in preview build)
- [ ] Build Completes (https://app.redoc.ly/org/fast/portal/fastaf/builds)
- [ ] No Broken Links in Broken Link Checker (Also https://app.redoc.ly/org/fast/portal/fastaf/builds)
- [ ] Spelling & Grammar checks

## Reviews

Either confirm or specify why not needed (e.g. if fixing minor grammar issues or page layout issues)

- [ ] Technical / Engineering Review
  - either name as reviewer or tag in PR
- [ ] Marketing / Sales Copy Review
- [ ] Legal Review
  - e.g. in Jira, #legal-privileged, or #copy-changes
