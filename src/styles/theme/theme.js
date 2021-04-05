export default {
	colors: {
		primaryColor: "#5267DF",
		secondaryColor: "#FA5959",
		darkColor: "#242A45",
		greyColor: "#9194A2",
		greyColorLight: "#f7f7f7",
		whiteColor: "#fff",
	},
	fontWeights: {
		regular: "400",
		medium: "500",
	},
	transitions: {
		basic: "all 0.3s ease",
	},
	mediaQueries: {
		desktop: `only screen and (max-width: 112.5em)`, // 1800px
		laptopL: `only screen and (max-width: 87.5em)`, // 1440px
		laptop: `only screen and (max-width: 64em)`, // 1024px
		tabletM: `only screen and (min-width: 48.02em)`, // 770px
		tablet: `only screen and (max-width: 48em)`, // 769px
		mobile: `only screen and (max-width: 28em)`, // 450px
	},
};
