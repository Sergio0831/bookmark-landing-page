const size = {
	desktopL: "112.5em", // 1800px
	laptopL: "87.5em", // 1440px
	laptop: "64em", // 1024px
	tablet: "48em", // 768px
	mobile: "28em", // 450px
};

export const device = {
	desktopL: `(min-width: ${size.desktopL})`,
	laptopL: `(max-width: ${size.laptopL})`,
	laptop: `(max-width: ${size.laptop})`,
	tabletM: `(min-width: ${size.tablet})`,
	tablet: `(max-width: ${size.tablet})`,
	mobile: `(max-width: ${size.mobile})`,
};

export const font = ({ color, size, weight, height, spacing }) => `
	color: ${color || "#242A45"};
	font-size: ${size || "1.8rem"};
	font-weight: ${weight || "400"};
	line-height: ${height || "1rem"};
	letter-spacing: ${spacing || "0.15px"}
`;
