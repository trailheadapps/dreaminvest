/* eslint-env jest */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import renderer from 'react-test-renderer';
import jsBeautify from 'js-beautify';
import SnapshotDefault from '../__examples__/snapshot-default';
test('MenuPicklist Default DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('MenuPicklist Default HTML Snapshot', function () {
  var domTree = String(jsBeautify.html(ReactDOMServer.renderToStaticMarkup(React.createElement(SnapshotDefault, null)), {}), 'utf-8');
  expect(domTree).toMatchSnapshot();
});
test("MenuPicklist\n\terrorText\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, {
    errorText: "This field is required.",
    required: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=menupicklist.snapshot-test.js.map