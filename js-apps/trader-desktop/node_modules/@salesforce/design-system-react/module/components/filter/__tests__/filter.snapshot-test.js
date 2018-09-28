import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import Default from '../__examples__/default';
import NewFilter from '../__examples__/new';
import LockedFilter from '../__examples__/locked';
import PermanantFilter from '../__examples__/permanant';
import ErrorFilter from '../__examples__/error';
import AssistiveTextFilter from '../__examples__/assistive-text';
test('Filter Base Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(Default, null)));
  expect(domTree).toMatchSnapshot();
});
test('NewFilter Base Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(NewFilter, null)));
  expect(domTree).toMatchSnapshot();
});
test('LockedFilter Base Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(LockedFilter, null)));
  expect(domTree).toMatchSnapshot();
});
test('Permanant Filter Base Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(PermanantFilter, null)));
  expect(domTree).toMatchSnapshot();
});
test('Error Filter Base Snapshot', function () {
  var domTree = toJson(shallow(React.createElement(ErrorFilter, null)));
  expect(domTree).toMatchSnapshot();
});
test('AssistiveText Filter', function () {
  var domTree = toJson(shallow(React.createElement(AssistiveTextFilter, null)));
  expect(domTree).toMatchSnapshot();
});
test('Filter Base with custom className Snapshot', function () {
  expect(renderMarkup(Default, {
    className: 'MY_CUSTOM_CLASS_NAME'
  })).toMatchSnapshot();
});
test('AssistiveText Filter HTML Snapshot', function () {
  expect(renderMarkup(Default)).toMatchSnapshot();
});
//# sourceMappingURL=filter.snapshot-test.js.map