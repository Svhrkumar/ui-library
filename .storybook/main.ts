import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // Define where your story files are located
	framework: '@storybook/react-webpack5',
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		// Removed potentially problematic addon
		// '@storybook/addon-webpack5-compiler-babel',
	],

	docs: {
		autodocs: 'tag',
	},

	// Optional: Customize Webpack config if needed
	webpackFinal: async (config) => {
		// Ensure the resolve property exists
		if (!config.resolve) {
			config.resolve = {};
		}

		// Ensure the extensions property exists
		if (!config.resolve.extensions) {
			config.resolve.extensions = [];
		}

		// Ensure the module property exists
		if (!config.module) {
			config.module = {};
		}

		// Ensure the rules property exists
		if (!config.module.rules) {
			config.module.rules = [];
		}

		// Add TypeScript loader if using ts-loader
		config.module.rules.push({
			test: /\.tsx?$/,
			use: [
				{
					loader: 'ts-loader', // Use ts-loader for TypeScript
					options: {
						transpileOnly: true, // Enable transpile only for faster builds
					},
				},
			],
			exclude: /node_modules/,
		});

		// Add TypeScript file extensions
		config.resolve.extensions.push('.ts', '.tsx'); // Resolve .ts and .tsx files

		return config;
	},
};

export default config;
