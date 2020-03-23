# screeps-scripts
## My workspace for my screeps scripts
### Using grunt-screeps
In order to get grunt-screeps (see gruntfile.js) to work, in order to submit code via grunt, the user will need to do the following:
* Run `npm install` to pull all dependencies locally
* Add a .screeps.json file to the root of this directory. The template should look like the following:
```
{
    "email": "${yourScreepsEmail}",
    "password": "${yourScreepsPassword}",
    "branch": "${desiredBranch}",
    "ptr": false
}
```
  * Where:
    * ${yourScreepsEmail}: The email address registered with your screeps account
    * ${yourScreepsPassword}: The password to your Screeps account
      * If you logged in via a Github or Steam account, you can set a password for your Screeps account by doing the following:
        * Go to screeps.com
        * Sign in via Github or Steam
        * Click your Username in the top-right corner
        * Select Manage Account
        * Click password, then provide your desired password
    * ${desiredBranch}: By default, this should be 'default', however, you can find out the branch being used by looking in the Scripts section of the Screeps UI (when in game)
* To build, go to the console and execute `grunt` in the root directory