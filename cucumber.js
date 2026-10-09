export default {
    default:{
        paths: [
            "features/**/*.feature"
        ],
        import: [
            "features/steps/**/*.js",
            "features/support/**/*.js"
        ],
        parallel: 3,
        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ],
        publishQuiet: true
    }
}