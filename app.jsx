import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CaseSummary from './components/NoteSummary.jsx';

window.addEventListener('load', function onLoad() {
    ReactDOM.render(
        <NoteSummary />,
        document.getElementById("container")
    );
});
