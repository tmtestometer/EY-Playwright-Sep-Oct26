export default {
    default:{
        paths: [
            "features/**/*.feature"
        ],
        import: [
            "features/steps/**/*.js",
            "features/support/**/*.js"
        ],
        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ],
        publishQuiet: true
    }
}