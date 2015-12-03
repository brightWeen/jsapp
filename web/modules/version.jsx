(function() {
    var React = require('react');

    module.exports = React.createClass({
        render: function() {
            return (
                <ul>
                    <li>node version:
                        {this.props.nodeVersion}</li>
                    <li>chrome version:
                        {this.props.chromeVersion}</li>
                    <li>electron version:
                        {this.props.electronVersion}</li>
                </ul>
            );
        }
    });
})
();
