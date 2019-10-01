// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

// NEW CHANGES
// import { configure } from '@storybook/react';

// import '../src/index.css';

// const req = require.context('../src', true, /\.stories.js$/);

// function loadStories() {
//     req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

// NEW CHANGES
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);