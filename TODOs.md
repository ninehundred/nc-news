# Checklist for Northcoders News Front End
## README - write your own and make sure that it:
- [✅] has a link to the deployed version
- [✅ provides general info about your app
- [✅] includes links to your back end repo
- [✅] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [✅] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX
- [✅] Basic styling added
- [✅] Responsive design - **Nearly! a bit of overlap which you are probably aware of on mobile**
- [✅] Items aligned
- [✅] Content legible (not too wide, obstructed, etc)
- [✅] Refreshing doesn’t cause an issue on sub-pages
- [✅] No errors in the console 
- [✅] **Check this again once you have finished any updates**
- [✅] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality
### Login
- [✅] Some indication of who is logged in (this can be hardcoded) 
- [✅]
- [✅] **It would be nice if once logged-in I was directed to the homepage and could see the articles**
- [✅] **Rather than using DOM manipulation to handle removal of your login error messages, I would encourage you to use conditional rendering, storing those error(s) in state and resetting that state to remove the error(s) when a successful login attempt is made**

### Articles
- [✅] Serves all articles / top articles
- [✅] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [✅] Can sort articles by date created / comment_count / votes
- **For the last two point above, the drop-down menus disappear as the articles reload, it would be a much nicer UX if the subheading of `this is the news...` and the dropdown menus stayed put when the topic/sort by/order was changed**
### Individual Article / Comments
- [✅] Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Can post new comments, which are persistent - **But, the text remains in the input box after posting)**
## Error Handling
- [✅] Bad url
- [n/a] Bad topic slug in url - **N/a as you have not used topics in your routing**
- [ ] Bad article id in url - **Screen shows `Loading...` indefinitely**
- [✅] Post comment
## Code
- [✅] Well named components
- [✅] Components reused where possible (`Articles` / `Voter`...)
- [✅] Minimal state - don't hold derivable data in state
- [ ] Set state correctly, using previous state where possible - **Check where you have used `setComments` in your `PostComment` component, [this link](https://beta.reactjs.org/reference/usestate#passing-an-updater-function-to-setstate) should help**
- [✅] Handle asynchronicity clearly (i.e. isLoading pattern)
- [✅] Functions are DRY (`handleChange` for controlled components / api calls)
- [✅] Use object destructuring where possible
- [✅] Tidy? If not: ESLint / Prettier
- [✅] `node_modules` git ignored
- [ ] No `console.log`s / comments - **Double check this after your final commit :)**
- [ ] remove unnecessary files (e.g. App.test.js)



## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END
## Additional functionality (try this if you have it implemented in your back-end):
- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles
## Once everything else is complete, here are some extra challenges:
- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes