// darkmodejs by svobodagaming

const lightCSS = './css/light.css'; // light css destination
const darkCSS = './css/dark.css'; // dark css destination

const useSystemTheme = true; // if true, script start using system theme
const useTime = false; // if true, disable 'useSystemtime' option

const currentTheme = window.matchMedia('(prefers-color-scheme: dark)');

const date = new Date();
const time = date.getHours();
const timeLimits = { // startLightAt != startDarkAt
  startLightAt: 8, // startLightAt < startDarkAt
  startDarkAt: 22, // startDarkAt > startLightAt
};

const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');

link.href = lightCSS; // default theme (for default: lightCSS)
link.rel = 'stylesheet';
link.type = 'text/css';

if (useSystemTheme === true) {
  if (currentTheme.matches) {
    link.href = darkCSS;
    head.appendChild(link);
  } else {
    link.href = lightCSS;
    head.appendChild(link);
  }
} else if (useTime === true) {
  console.log(time);
  if (timeLimits.startLightAt <= time && timeLimits.startDarkAt >= time) {
    link.href = lightCSS;
    head.appendChild(link);
  } else {
    link.href = darkCSS;
    head.appendChild(link);
  }
}