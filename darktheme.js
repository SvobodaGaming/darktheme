// darkmodejs by svobodagaming

const lightCSS = 'css/light.css'; // light css destination
const darkCSS = 'css/dark.css'; // dark css destination

const useSystemTheme = true; // if true, script start using system theme
const useTime = false; // if true, disable 'useSystemtime' option

const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');

const date = new Date();
const time = date.getHours();
const timeLimits = {
  startLightAt: 8,
  startDarkAt: 22,
};

const head = Document.getElementsByTagName('head')[0];
const link = Document.createElement('link')[0];

link.href = lightCSS; // default theme (for default: lightCSS)
link.rel = 'stylesheet';

if (useSystemTheme === true) {
  if (currentTheme.matches) {
    link.href = darkCSS;
    head.appendChild(link);
  } else {
    link.href = lightCSS;
    head.appendChild(link);
  }
} else if (useTime === true) {
  if (timeLimits.startLightAt >= time && timeLimits.startDarkAt <= time) {
    link.href = lightCSS;
    head.appendChild(link);
  } else {
    link.href = darkCSS;
    head.appendChild(link);
  }
}
