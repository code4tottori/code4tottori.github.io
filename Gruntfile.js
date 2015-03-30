module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [{
					// flat-ui
					expand: true,
					cwd: 'bower_components/flat-ui/dist/',
					src: [
						'css/flat-ui.min.css',
						'fonts/**',
						'js/flat-ui.min.js'
					],
					dest: 'lib/vendor/flat-ui/'
				}, {
					// jquery
					expand: true,
					cwd: 'bower_components/jquery/dist/',
					src: [
						'jquery.min.js',
						'jquery.min.map'
					],
					dest: 'lib/vendor/jquery/'
				}, {
					// bootstrap
					expand: true,
					cwd: 'bower_components/bootstrap/dist/',
					src: [
						'css/bootstrap.min.css',
						'fonts/**',
						'js/bootstrap.min.js'
					],
					dest: 'lib/vendor/bootstrap/'
				}]
			}
		},
		jshint: {
			files: [
				'Gruntfile.js',
				'package.json',
				'bower.json',
				'lib/code4tottori.js'
			]
		},
		csslint: {
			options: {
				'overqualified-elements': false,
				'shorthand': false
			},
			strict: {
				src: ['lib/code4tottori.css']
			},
			lax: {
				src: ['lib/code4tottori.css']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.registerTask('default', ['copy', 'jshint', 'csslint']);
};
