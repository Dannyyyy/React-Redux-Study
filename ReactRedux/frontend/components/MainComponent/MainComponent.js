import * as React from 'react';
import './main-component.less';
export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    getMessage() {
        return 'webpack, react, typescript, hot-reload demo';
    }
    render() {
        const webpackLogoPath = require('!svg-url-loader?noquotes!./webpack-logo.svg');
        return (React.createElement("div", null,
            React.createElement("h1", null, this.getMessage()),
            React.createElement("div", { className: "logos" },
                React.createElement("img", { src: webpackLogoPath, className: 'webpack-logo' }),
                React.createElement("div", { className: "react-logo" }))));
    }
}
//# sourceMappingURL=MainComponent.js.map