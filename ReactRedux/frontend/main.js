import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MainComponent from './components/MainComponent/MainComponent';
import './shared/styles/shared-styles.less';
const renderMain = () => {
    return ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(MainComponent, null)), document.getElementById('react-container'));
};
renderMain();
if (module.hot) {
    module.hot.accept(MainComponent, renderMain);
}
//# sourceMappingURL=main.js.map