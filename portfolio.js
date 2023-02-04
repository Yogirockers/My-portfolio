import emoji from "react-easy-emoji";

export const greetings = {
	name: "Yogeshwaran M",
	title: "Hi all, I'm Yogeshwaran M",
	description:
		"Frontend Developer with high level of experience in web designing and development, producting the Quality work",
	resumeLink:
		"/img/icons/common/Resume.pdf",
};

export const openSource = {
	githubUserName: "Yogirockers",
};

export const contact = {};

export const socialLinks = {
	
	linkedin: "https://www.linkedin.com/in/yogeshwaran-m-67013924a",
	github: "https://github.com/Yogirockers",
	instagram: "https://www.instagram.com/yogeshakthi143/",
	facebook: "#",
	twitter: "https://twitter.com/YOGESHW33879919",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		
			
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "30",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: " Chettinad College of Engineering and technology,Karur.",
		subHeader: "Bachelor of Engineering in Computer Science",
		duration: "September 2019 - April 2023",
		desc: " PROJECTS :",
		grade: "Grade A",
		descBullets: [
			" GRAPHICAL PASSWORD AUTHENTICATION  ( Mini Project )",
			" ESTIMATE CROP YIELD USING DATA ANALYSTICS ( IBM project )",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "FRESHER !",
		companylogo: "/img/icons/common/fresher.webp",
		date: "September 2019 - April 2023",
		desc: " DESIGN TOOLS : HTML, CSS, JS, REACT JS (FRONT-END DEV) ",
	},
	
];

export const projects = [
	{
		name: "My-portfolio",
		desc: "My 1st Portfolio ✓",
		github: "https://github.com/Yogirockers/My-portfolio",
		link: "https://yogi.vercel.app",
	},
	{
		name: " Graphical Password Authetication",
		desc: "Authentication Purpose !",
		github: "https://github.com/Yogirockers/Graphical-Password-Authetication",
		link: "https://Graphical Password Authetication-Yogirockers.netlify.app/",
	},
	
];

export const feedbacks = [
	{
		name: " MOHAN KUMAR V.S ",
		feedback:
			"I GIVE RATING : Really Its Too Good (5★)",
	},
	{
		name: " MAHESWARAN G",
		feedback:
			"I GIVE RATING : Awesome!!! (4.5★)",
	},
	{
		name: " SUGUMAR M",
		feedback:
			"I GIVE RATING : Excellent! (5★)",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "YOGESHWARAN M",
	description:
		"A passionate FRONT-END DEV",
	author: "Yogeshwaran M",
	image: "/img/icons/common/yogi.webp",
	
	keywords: [
		"Yogesh",
		"Yogeshwaran M",
		"@Yogirockers",
		"Yogirockers",
		"Portfolio",
		"Yogi Portfolio ",
		"Yogeshwaran M Portfolio",
	],
}
