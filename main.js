'use strict';

const backgroundColor = '#10002b';
const foregroundColor = '#50fa7b';
const borderColor = '#7b2cbf';
const cursorColor = '#7b2cbf';
const selectionColor = '#7b2cbf';
const colors = {
  black: '#000000',
  red: '#ff5555',
  green: '#50fa7b',
  yellow: '#f1fa8c',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#8be9fd',
  white: '#bfbfbf',
  lightBlack: '#4d4d4d',
  lightRed: '#ff6e67',
  lightGreen: '#5af78e',
  lightYellow: '#f4f99d',
  lightBlue: '#9d4edd',
  lightMagenta: '#ff92d0',
  lightCyan: '#9aedfe',
  lightWhite: '#e6e6e6',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};