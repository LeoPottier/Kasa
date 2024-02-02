import React from 'react';
import {createRoot} from 'react-dom/client';
import Router from './Router';

const container = document.getElementById('root')
const root = createRoot(container)

/* Rendering the App component into the root element of the index.html file. */
root.render(<Router />)
