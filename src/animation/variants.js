export const textHeroVariants = {
	hidden: {
		opacity: 0,
		x: "-20vw",
		y: "30%",
	},
	visible: {
		opacity: 1,
		x: 0,
		y: "30%",
		transition: {
			type: "spring",
			delay: 0,
			duration: 2,
			bounce: 0.2,
		},
	},
};

export const imageHeroVariants = {
	hidden: {
		opacity: 0,
		x: "20vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0,
			duration: 2,
			bounce: 0.2,
		},
	},
};

export const textTabVariants = {
	hidden: {
		opacity: 0,
		x: "20vw",
		y: "25%",
	},
	visible: {
		opacity: 1,
		x: 0,
		y: "25%",
		transition: {
			type: "spring",
			delay: 0,
			duration: 2,
			bounce: 0.2,
		},
	},
};

export const imageTabVariants = {
	hidden: {
		opacity: 0,
		x: "-20vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0,
			duration: 2,
			bounce: 0.2,
		},
	},
};
