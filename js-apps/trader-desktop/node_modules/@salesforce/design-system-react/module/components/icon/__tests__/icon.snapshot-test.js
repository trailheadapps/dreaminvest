/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import Icon from '../../icon';
import download from '../../../icons/utility/download';
import Standard from '../__examples__/standard';
import Utility from '../__examples__/utility';
import Action from '../__examples__/action';
import Doctype from '../__examples__/doctype';
import Custom from '../__examples__/custom';
import ExternalPath from '../__examples__/external-path';
import ColorBase from '../__examples__/color-base';
import ColorDefault from '../__examples__/color-default';
import ColorError from '../__examples__/color-error';
import ColorWarning from '../__examples__/color-warning';
import SizesExtraSmall from '../__examples__/sizes-extra-small';
import SizesSmall from '../__examples__/sizes-small';
import SizesMedium from '../__examples__/sizes-medium';
import SizesLarge from '../__examples__/sizes-large';
test('Icon Category Standard HTML Snapshot', function () {
  expect(renderMarkup(Standard)).toMatchSnapshot();
});
test('Icon Category Utility HTML Snapshot', function () {
  expect(renderMarkup(Utility)).toMatchSnapshot();
});
test('Icon Category Action HTML Snapshot', function () {
  expect(renderMarkup(Action)).toMatchSnapshot();
});
test('Icon Category Doctype HTML Snapshot', function () {
  expect(renderMarkup(Doctype)).toMatchSnapshot();
});
test('Icon Category Custom HTML Snapshot', function () {
  expect(renderMarkup(Custom)).toMatchSnapshot();
});
test('Icon Category External Path HTML Snapshot', function () {
  expect(renderMarkup(ExternalPath)).toMatchSnapshot();
});
test('Icon Size X-Small HTML Snapshot', function () {
  expect(renderMarkup(SizesExtraSmall)).toMatchSnapshot();
});
test('Icon Size Small HTML Snapshot', function () {
  expect(renderMarkup(SizesSmall)).toMatchSnapshot();
});
test('Icon Size Medium HTML Snapshot', function () {
  expect(renderMarkup(SizesMedium)).toMatchSnapshot();
});
test('Icon Size Large HTML Snapshot', function () {
  expect(renderMarkup(SizesLarge)).toMatchSnapshot();
});
//# sourceMappingURL=icon.snapshot-test.js.map