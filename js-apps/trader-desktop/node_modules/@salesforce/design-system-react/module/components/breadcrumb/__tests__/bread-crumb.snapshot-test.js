import React from 'react';
import renderer from 'react-test-renderer';
import BreadcrumbBase from '../__examples__/base';
test('Breadcrumb Base Snapshot', function () {
  var domTree = renderer.create(React.createElement(BreadcrumbBase, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=bread-crumb.snapshot-test.js.map