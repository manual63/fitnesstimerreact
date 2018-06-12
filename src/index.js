import React from 'react';
import ReactDOM from 'react-dom';
import Members from './members/index.jsx';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Members />, wrapper) : false;

