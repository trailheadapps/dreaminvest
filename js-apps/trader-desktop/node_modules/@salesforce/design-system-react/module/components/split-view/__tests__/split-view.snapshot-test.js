/* eslint-env jest */
import React from 'react';
import { renderMarkup, testDOMandHTML } from '../../../tests/snapshot-helpers';
import Base from '../__examples__/base';
import BaseMultiple from '../__examples__/base-multiple';
import Custom from '../__examples__/custom-Item-list';
testDOMandHTML({
  name: 'Base Open',
  test: test,
  Component: Base,
  props: {
    isOpen: true
  }
});
testDOMandHTML({
  name: 'Base Closed',
  test: test,
  Component: Base,
  props: {
    isOpen: false
  }
});
testDOMandHTML({
  name: 'Base Multiple',
  test: test,
  Component: BaseMultiple
});
testDOMandHTML({
  name: 'Custom',
  test: test,
  Component: Custom
});
//# sourceMappingURL=split-view.snapshot-test.js.map