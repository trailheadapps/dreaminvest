/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactDOMServer from 'react-dom/server';
import jsBeautify from 'js-beautify';
import PanelFiltering from '../__examples__/filtering';
test('Panel Filtering Default Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(PanelFiltering, null)));
  expect(domTree).toMatchSnapshot();
});
test('Panel Filtering Default HTML Snapshot', function () {
  var domTree = String(jsBeautify.html(ReactDOMServer.renderToStaticMarkup(React.createElement(PanelFiltering, null)), {
    indent_size: 2
  }), 'utf-8');
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=filtering.snapshot-test.js.map