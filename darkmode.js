// darkmodejs by svobodagaming

let lightCSS = "css/light.css";  // light css destination
let darkCSS = "css/dark.css"; // dark css destination

let useSystemTheme = true; // if true, script start using system theme
let useTimeToChange = false; // if true, disable 'useSystemtime' option

if (useSystemTheme == true) {
	let currentTheme = window.matchMedia("(prefers-color-scheme: dark)");
	useTimeToChange = false;
}

if (useTimeToChange == true) {
	let timeLimits = {
		startLightAt: 8,
		startDarkAt: 22
	}
}

let head = Document.getElementsByTagName("head")[0];
let link = Document.createElement("link")[0];

link.href = lightCSS; // or 'darkCSS' (by default)
link.rel = "stylesheet";

if (useSystemTheme == true) {
	if (currentTheme.matches) {
		link.href = darkCSS;
	} else {
		link.href = lightCSS;
	}
} else {
	
}

