import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import SnapshotDefault from '../__examples__/snapshot-default';
test('Navigation Default DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Navigation Default HTML Snapshot', function () {
  expect(renderMarkup(SnapshotDefault)).toMatchSnapshot();
});
var customProps = {
  className: 'CUSTOM-CLASSNAME',
  id: 'CUSTOM-ID',
  variant: 'shade',
  selectedId: 'all_reports'
};
test("Navigation\n\t\tclassName,\n\t\tid,\n\t\tvariant\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, customProps)).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=navigation.snapshot-test.js.map