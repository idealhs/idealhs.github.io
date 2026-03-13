export type NavItem = {
	label: string;
	href: string;
};

export type OpenSourceProject = {
	name: string;
	description: string;
	tech: string;
	link: string;
	downloadAction?: {
		label: string;
		url?: string;
		statusText?: string;
		menuItems?: {
			label: string;
			url?: string;
			statusText?: string;
		}[];
	};
};

export const profile = {
	name: "idealhs",
	role: "C# / .NET Engineer",
	headline: "Make software run reliably in real-world scenarios.",
	subline: "Focused on .NET engineering practices, industrial software development, and automation capability building.",
	githubSource: "https://github.com/idealhs",
	aboutIntroParagraphs: [
		"I am a software engineer focused on building reliable systems with C# and .NET.",
		"My work spans industrial software, device communication, backend services, and practical automation tooling.",
		"I care about clean architecture, maintainable code, and shipping software that performs well in real production environments.",
	],
};

export const navItems: NavItem[] = [
	{ label: "About", href: "#about" },
	{ label: "Open Source", href: "#opensource" },
];

export const openSourceProjects: OpenSourceProject[] = [
	{
		name: "AnyTable",
		description: "Browser extension that adds sorting and filtering capabilities to tables on any webpage.",
		tech: "JavaScript / Browser Extension",
		link: "https://github.com/idealhs/AnyTable",
		downloadAction: {
			label: "Install",
			menuItems: [
				{
					label: "Firefox Add-ons",
					url: "https://addons.mozilla.org/en-US/firefox/addon/anytable/",
				},
				{
					label: "Chrome Web Store",
					url: "https://chromewebstore.google.com/detail/dbadglamnjdkmadaocimiijibamaghkk",
				},
			],
		},
	},
	{
		name: "PlcCipTag",
		description:
			"CIP Tag PLC communication library for .NET, supporting devices including Allen-Bradley, ICON, and Omron.",
		tech: "C# / EtherNet-IP",
		link: "https://github.com/idealhs/PlcCipTag",
		downloadAction: {
			label: "Nuget",
			url: "https://www.nuget.org/packages/PlcCipTag/",
		},
	},
	{
		name: "Dingtalk.Stream",
		description: "Unofficial .NET implementation of DingTalk Stream mode, covering auth, keep-alive, and event handling.",
		tech: "C# / .NET Standard",
		link: "https://github.com/idealhs/Dingtalk.Stream",
		downloadAction: {
			label: "Nuget",
			url: "https://www.nuget.org/packages/Dingtalk.Stream/",
		},
	},
	{
		name: "SpotiPass",
		description: "Project that modifies the Spotify APK to enable successful Spotify login on Android systems without a proxy.",
		tech: "Java / Android",
		link: "https://github.com/idealhs/SpotiPass",
	},
	{
		name: "SimpleMultiRstpClient",
		description: "Lightweight WPF multi-stream RTSP preview client for viewing multiple video streams simultaneously.",
		tech: "C# / WPF / RTSP",
		link: "https://github.com/idealhs/SimpleMultiRstpClient",
		downloadAction: {
			label: "Download",
			url: "https://github.com/idealhs/SimpleMultiRstpClient/releases/download/Release/Release.zip",
		},
	},
];
