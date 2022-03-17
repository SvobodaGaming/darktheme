// darkmodejs by svobodagaming

let lightCSS = "css/light.css";  // light css destination
let darkCSS = "css/dark.css"; // dark css destination

let useSystemTheme = true; // if true, script start using system theme
let useTime = false; // if true, disable 'useSystemtime' option

if (useSystemTheme == true) {
	let currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
	useTime = false;
}

if (useTime == true) {
	let date = new Date();
	let time = date.getHours();
	let timeLimits = {
		startLightAt: 8,
		startDarkAt: 22
	}
}

let head = Document.getElementsByTagName("head")[0];
let link = Document.createElement("link")[0];

link.href = lightCSS; // default theme (for default: lightCSS)
link.rel = "stylesheet";

if (useSystemTheme == true) {
	if (currentTheme.matches) {
		link.href = darkCSS;
	} else {
		link.href = lightCSS;
	}
} else {
	if (useTime == true) {
		if (timeLimits.startLightAt >= time && timeLimits.startDarkAt <= time) {
			link.href = lightCSS;
		} else {
			link.href = darkCSS;
		}
	}
}