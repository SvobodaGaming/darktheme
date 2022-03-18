# darktheme
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

***use dark everywhere.***

A lightweight darkmode script on JavaScript

**Features**

 - **Fast everywhere**
 - **Support System Theme**
 - **Simple to use**

**Available settings**

1. **lightCSS** ☀ - Destination to light css version (default: ***./css/light.css***) (*String*)
2. **darkCSS** 🌚 - Destination to dark css version (default: ***./css/dark.css***)(*String*)
3. **useSystemTheme** - use system theme (color-scheme) to change themes (color-scheme) (default ***true***) (*Boolean*) 
4. **useTime** - (if useSystemTime is false) use time limits to change themes (default ***false***) (*Boolean*)
5. **timeLimits.startLightAt** - (less than startDarkAt) time to enable light theme (default ***8***) (*Number*)
6. **timeLimits.startDarkAt** - (more than startLightAt) time to enable dark theme (default ***22***)(*Number*)
7. **dafaultTheme** - setup default theme (default ***lightCSS***) (*String*)

**How to use this?**

1. Clone this repo using terminal

```
$ git clone https://github.com/SvobodaGaming/darktheme
```
2. Set your configuration in darktheme.js (using **Available settings**)
```javascript
const lightCSS = './css/light.css'; // light css destination
const darkCSS = './css/dark.css'; // dark css destination

const defaultTheme = lightCSS; // default theme (for default: lightCSS)

const useSystemTheme = true; // if true, script start using system theme
const useTime = false; // if true, disable 'useSystemtime' option

const timeLimits = { // startLightAt != startDarkAt
  startLightAt: 8, // startLightAt < startDarkAt
  startDarkAt: 22, // startDarkAt > startLightAt
};
```
3. Minify your version of file using ***https://www.digitalocean.com/community/tools/minify*** (or other) 
    
   *or use already minified file (darktheme.min.js)*
   
4. Add darktheme.js to your project
```html
    <div>
        <script src="./js/darktheme.js"></script>
    </div>

```


**Which browser support system-theme options?**

***https://caniuse.com/prefers-color-scheme***

*You can buy me a coffie. https://www.buymeacoffee.com/svobodagaming*
