/* eslint-env jest */
import { testDOMandHTML } from '../../../tests/snapshot-helpers';
import SnapshotBase from '../__examples__/base';
import SnapshotBaseOpen from '../__examples__/snapshot/base-open';
testDOMandHTML({
  name: 'Base',
  test: test,
  Component: SnapshotBase
});
testDOMandHTML({
  name: 'Base Open',
  test: test,
  Component: SnapshotBaseOpen
});
//# sourceMappingURL=accordion.snapshot-test.js.map