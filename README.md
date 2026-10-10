# dns-config: DNS Infrastructure for craigmdupree.info

This repo stores our DNS Domains and records as "infrastructure as code" for our
organization.  The GitHub actions allow full "gitops" updates for our DNS
infrastructure. All updates are done via PR.

## Updates

To add/change/delete DNS records:

**Step 1: Clone this config to your local workstation**

```bash
gh repo clone DNSControl/dns-config
cd dns-config
```

**Step 2: Make the changes you desire**

```bash
vi dnsconfig.js
```

**Step 3: Create a PR**

Since the upstream is not yours, you'll need to directly create PRs against
you're repo.  This can be done in the UI by selecting the proper base branch,
but the gh command makes it very easy to do directly:

```bash
gh pr create --repo cdupree/dns-config --base main --head cdupree:__branch__
```

**Step 4: Review and approve**

At this point, the GitHub Actions will kick in, validating your change and
posting a "diff" as a comment. Seeing the "diff" allows you to verify that the
changes that will happen are as you intended. You can make more changes and `git
push` them just like code.

Use your organization's approval process to review and approve the PR.

**Step 5: Merge it!**

On merger, a GitHub Action will run `dnscontrol push` to make the change.

## How to get help


