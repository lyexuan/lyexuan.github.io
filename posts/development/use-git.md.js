webpackJsonp([100],{566:function(i,t){i.exports={content:["article",["h2","\u5e38\u7528\u547d\u4ee4"],["h3","\u83b7\u53d6Git\u4ed3\u5e93"],["ul",["li",["p","git init"]],["li",["p","git clone"],["h3","\u8bb0\u5f55\u66f4\u65b0"]],["li",["p","git add filename"]],["li",["p","git add ."]],["li",["p","git status"]],["li",["p","git diff"]],["li",["p","git diff --cached / git diff --staged"]],["li",["p","git commit -m"]],["li",["p","git commit -a -m"]],["li",["p","git rm ",["file"],"\uff08\u53d6\u6d88\u8ddf\u8e2a\uff0c\u5e76\u4ece\u78c1\u76d8\u5220\u9664\u6587\u4ef6\uff09"]],["li",["p","git rm --cached ",["file"],"\uff08\u4ec5\u53d6\u6d88\u8ddf\u8e2a\uff09"]],["li",["p","git mv file_from file_to"],["h3","\u67e5\u770b\u63d0\u4ea4\u5386\u53f2"]],["li",["p","git log"]],["li",["p","git log -p -2\uff08\u663e\u793a\u5dee\u5f02\u4fe1\u606f\uff0c\u5e76\u9650\u5236\u663e\u793a\u7684\u7248\u672c\u6570\u91cf\uff09"]],["li",["p","git log --stat\uff08\u663e\u793a\u7b80\u7565\u7edf\u8ba1\u4fe1\u606f\uff09"]],["li",["p","git log --graph"],["h3","\u64a4\u9500\u64cd\u4f5c"]],["li",["p","git commit --amend\uff08\u8865\u5145\u63d0\u4ea4\u6216\u4fee\u6539\u63d0\u4ea4\u4fe1\u606f\uff09"]],["li",["p","git reset HEAD ",["file"],"\uff08\u628a\u6682\u5b58\u533a\u7684\u4fee\u6539\u64a4\u9500\uff0c\u91cd\u65b0\u653e\u56de\u5de5\u4f5c\u533a\uff09"]],["li",["p","git checkout -- file\uff08\u64a4\u9500\u4fee\u6539\uff0c\u6e05\u7a7a\u5de5\u4f5c\u533a\u7684\u4fee\u6539\uff09"]],["li",["p","git reset --hard HEAD^\uff08\u56de\u9000\u5230\u4e0a\u4e00\u7248\u672c\uff09"]],["li",["p","git reset --hard HEAD~100\uff08\u56de\u9000\u5230\u4e0a100\u4e2a\u7248\u672c\uff09"]],["li",["p","git reset --hard \u7248\u672c\u53f7\uff08\u7a7f\u68ad\u5230\u67d0\u4e2a\u7248\u672c\uff09"]],["li",["p","git reflog"]]],["h3","\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4f7f\u7528"],["ul",["li",["p","git remote"]],["li",["p","git remote -v"]],["li",["p","git remote add origin git@github.com:lyexuan/learngit.git"]],["li",["p","git remote show origin"]],["li",["p","git clone git@github.com:lyexuan/learngit.git"]],["li",["p","git fetch ",["span","remote-name"]]],["li",["p","git pull"]],["li",["p","git push origin master"]],["li",["p","git push -u origin master"]],["li",["p","git remote rename\uff08\u91cd\u547d\u540d\uff09"]],["li",["p","git remote rm paul\uff08\u79fb\u9664\uff09"]]],["h3","\u6807\u7b7e\u4f7f\u7528"],["ul",["li",["p","git tag"]],["li",["p","git tag -a v1.4 -m 'my version 1.4'\uff08\u521b\u5efa\u9644\u6ce8\u6807\u7b7e\uff09"]],["li",["p","git tag v1.1-lw\uff08\u521b\u5efa\u8f7b\u91cf\u6807\u7b7e\uff09"]],["li",["p",'git tag -a v0.1 -m "version 0.1 released" 1094adb\uff08\u7ed9\u5148\u524d\u7684\u67d0\u6b21\u63d0\u4ea4\u6253\u6807\u7b7e\uff09']],["li",["p","git push origin ",["span","tagname"],"\uff08\u63a8\u9001\u6807\u7b7e\uff09"]],["li",["p","git push origin --tags\uff08\u6279\u91cf\u63a8\u9001\u6807\u7b7e\uff09"]],["li",["p","git checkout -b version2 v2.0.0\uff08\u6839\u636e\u4e00\u4e2a\u6807\u7b7e\u521b\u5efa\u65b0\u5206\u652f\uff09"]]],["h3","\u522b\u540d"],["ul",["li",["p","git config --global alias.co checkout"]]],["h3","\u5206\u652f"],["ul",["li",["p","git branch testing\uff08\u521b\u5efa\u5206\u652f\uff09"]],["li",["p","git log --oneline --decorate\uff08\u67e5\u770b\u5206\u652f\uff09"]],["li",["p","git checkout testing\uff08\u5207\u6362\u5206\u652f\uff09"]],["li",["p","git checkout -b dev\uff08\u521b\u5efa\u5e76\u5207\u6362\u81f3\u5206\u652f\uff0c\u7b49\u540c\u4e8egit branch dev->git checkout dev\uff09"]],["li",["p","git merge dev"]],["li",["p",'git merge --no-ff -m "merge with no-ff" dev']],["li",["p","git branch -d dev\uff08\u5220\u9664\u5206\u652f\uff09"]],["li",["p","git ls-remote"]],["li",["p","git remote show"]],["li",["p","git remote -v"]],["li",["p","git checkout --track origin/serverfix"]],["li",["p","git checkout -b dev origin/dev"]],["li",["p","git push origin --delete serverfix\uff08\u5220\u9664\u8fdc\u7a0b\u5206\u652f\uff09"]],["li",["p","git rebase"]],["li",["p","git stash"]],["li",["p","git stash list"]],["li",["p","git stash pop"]],["li",["p","git branch --set-upstream-to=origin/dev dev"]]],["h2","\u521b\u5efaSSH Key"],["p",'ssh-keygen -t rsa -C "youremail@example.com"'],["h2","\u8bfb\u61c2diff"],["p",["a",{title:null,href:"http://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html"},"http://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html"]]],meta:{title:"Git\u7684\u4f7f\u7528",createDate:"2018-11-30T00:00:00.000Z",publishDate:"2018-11-30T00:00:00.000Z",category:"development",abstract:"\u6574\u7406\u4e86git\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e38\u7528\u7684\u547d\u4ee4",filename:"posts/development/use-git.md"}}}});