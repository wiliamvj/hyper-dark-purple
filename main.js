'use strict';

const backgroundColor = '#0c021d';
const foregroundColor = '#fcfcf2';
const borderColor = '#9056eb';
const cursorColor = '#9056eb';
const borderRadius = '5px';
const colors = {
  black: '#000000',
  red: '#d10000',
  green: '#4cd137',
  yellow: '#8c7ae6',
  blue: '#00638a',
  magenta: '#8c7ae6', // old: #dc3091
  cyan: '#9056eb',
  white: '#bfbfbf',
  lightBlack: '#000000aa',
  lightRed: '#d10000',
  lightGreen: '#4cd137',
  lightYellow: '#8c7ae6',
  lightBlue: '#00638a',
  lightMagenta: '#8c7ae6',
  lightCyan: '#9056eb',
  lightWhite: '#bfbfbf'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    borderRadius,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .hyper_main {
        border-radius: 6px;
      }
			.tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
        border-radius: ${borderRadius};
			}
      
			.tab_active:before {
        border-color: ${borderColor};
        border-radius: ${borderRadius};
		`
  });
};
