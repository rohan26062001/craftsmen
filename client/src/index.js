import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeContextWrapper from './Context/ThemeContextWrapper';

ReactDOM.render(
    <ThemeContextWrapper>
        <App />
    </ThemeContextWrapper>,
    document.getElementById('root')
)