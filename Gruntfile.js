module.exports = function(grunt){
    var browsers = [{
        browserName: "chrome",
        version: "33",
        platform: "Linux"
    },{
        browserName: "chrome",
        version: "32",
        platform: "Linux"
    },{
        browserName: "chrome",
        version: "31",
        platform: "Linux"
    },{
        browserName: "chrome",
        version: "33",
        platform: "Windows 8"
    },{
        browserName: "chrome",
        version: "32",
        platform: "Windows 8"
    },{
        browserName: "chrome",
        version: "31",
        platform: "Windows 8"
    },{
        browserName: "chrome",
        version: "33",
        platform: "XP"
    },{
        browserName: "chrome",
        version: "32",
        platform: "XP"
    },{
        browserName: "chrome",
        version: "33",
        platform: "Windows 7"
    },{
        browserName: "chrome",
        version: "32",
        platform: "Windows 7"
    },{
        browserName: "chrome",
        version: "31",
        platform: "Windows 7"
    },{
        browserName: "chrome",
        version: "33",
        platform: "OS X 10.9"
    },{
        browserName: "chrome",
        version: "32",
        platform: "OS X 10.9"
    },{
        browserName: "chrome",
        version: "31",
        platform: "OS X 10.9"
    },{
        browserName: "chrome",
        version: "33",
        platform: "OS X 10.8"
    },{
        browserName: "iexplore",
        version: "11",
        platform: "Windows 8"
    },{
        browserName: "iexplore",
        version: "10",
        platform: "Windows 8"
    }];

  grunt.initConfig({
    browserify: {
      test: {
        files: {
          "mocha/browser/testLib.js": ["mocha/browser/browser-spec.js"]
        }
      }
    },
    connect: {
      server: {}
    },
    'saucelabs-mocha': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:8000/mocha/browser/test.html"],
		    username: "rynomadCSU",
		    key: "c954c8b8-41ce-45b1-bba2-3b8806d5e2cf",
                    tunnelTimeout: 5,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "ndn-messageChannelTransport",
                    tags: ["master"]
                }
            }
        },
    watch: {
      files: ["ndn-messageChannelTransport.js"],
      tasks: ['browserify', 'connect', 'saucelabs-mocha']
    }
  })
  grunt.loadNpmTasks('grunt-browserify') 
  grunt.loadNpmTasks('grunt-saucelabs')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('test', ['connect', 'saucelabs-mocha'])
  grunt.registerTask('build', ['browserify', 'connect', 'saucelabs-mocha'])

}
