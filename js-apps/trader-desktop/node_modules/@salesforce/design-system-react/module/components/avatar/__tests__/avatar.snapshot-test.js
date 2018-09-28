/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import SnapshotBase from '../__examples__/base';
import SnapshotEntityIcon from '../__examples__/entity-icon';
import SnapshotEntityInitials from '../__examples__/entity-initials';
import SnapshotUserIcon from '../__examples__/user-icon';
import SnapshotUserInitials from '../__examples__/user-initials';
test('Avatar Base DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotBase, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Avatar Entity Icon Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotEntityIcon, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Avatar Entity Initials Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotEntityInitials, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Avatar User Icon Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotUserIcon, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Avatar User Initials Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotUserInitials, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=avatar.snapshot-test.js.map