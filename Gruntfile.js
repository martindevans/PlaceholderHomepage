module.exports = function(grunt) {
 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.initConfig({
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist'
			}
		},
		copy: {
			main: {
				src: [
						'index.html',
						'js/modernizr.js',
						'css/preloader.css',
						'plugins/pace/pace.min.js',
						'icons/*/**',
						'img/*',
						'fonts/*'
					 ],
				dest: 'dist/'
			},
		},
		usemin: {
			html: 'dist/index.html',
			options: {
				assetsDirs: ['css', 'js']
			}
		},
		imagemin: {
			main: {
				files: [{
					expand: true,
					cwd: 'dist/img', 
					src: ['*.{png,jpg,gif}'],
					dest: 'dist/img'
				}]
			}
		}
	});
 
	grunt.registerTask('default', [
									'useminPrepare',
									'copy',
									'concat',
									'uglify',
									'cssmin',
									'usemin',
									'imagemin'
								]);
};
