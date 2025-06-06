import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$css: './src/css',
			$data: './src/data',
			$images: './src/images'
		}
	}
};

export default config;
