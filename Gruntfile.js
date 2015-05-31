module.exports = function(grunt) {

	//Loads the modules we will be using for the different tasks. 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-usemin');

	//This config is loaded when grunt is ran.
	grunt.initConfig({
		//This generates a config from your index.html
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist'
			}
		},
		//We want to copy the other assets into the build directory
		copy: {
			main: {
				src: [
						'index.html',
						'js/modernizr.js',
						'css/preloader.css',
						'plugins/pace/pace.min.js',
						'icons/*/**',
						'img/*',
						'fonts/*',
                        'galleria/**'
					 ],
				dest: 'dist/'
			},
		},
		//This alters your index.html to point at the built assets
		usemin: {
			html: 'dist/index.html',
			options: {
				assetsDirs: ['css', 'js']
			}
		},
	});

	//Our tasks in the order they should be ran. Note that concat, uglify and others
	//are run on the generated config from usemin.
	var default_tasks =
	[
		'useminPrepare',
		'copy',
		'concat',
		'uglify',
		'cssmin',
		'usemin',
	]

	//registers the task that wull be run when 'grunt' is called from the cli 
	grunt.registerTask('default', default_tasks);
};
