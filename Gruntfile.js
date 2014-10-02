/*global module:false*/
module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
	express:{
		all:{
			options:{
				port:9000,
				hostname:"0.0.0.0",
				bases:[__dirname],
				livereload:true
			}
		
		}
	},
	watch:{
		all:{
			files:'public/index.html',
			options:{
				livereload:true
			}
		}
	},
	open:{
		all:{
			path:'http://localhost:<%= express.all.options.port%>/public/index.html'
		}
	}

  });

  grunt.registerTask('server',[
  	'express',
	'open',
	'watch'
	]);


};
