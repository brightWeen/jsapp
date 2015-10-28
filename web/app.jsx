(function() {
    var React = require('react');
    var Versions = require('./modules/version.js');

    var nodeVersion = process.versions.node;
    var chromeVersion = process.versions.chrome;
    var electronVersion = process.versions.electron;

    React.render(
        <h1>hello 骚年!</h1>,
        document.getElementById('head')
    );

    React.render(
        <Versions nodeVersion={nodeVersion} chromeVersion={chromeVersion}
            electronVersion={electronVersion} />,
        document.getElementById('body')
    );
})();
