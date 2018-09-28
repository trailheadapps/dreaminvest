import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { COMBOBOX } from '../../../utilities/constants';
import Base from '../__examples__/base';
import BaseMenuSubHeader from '../__examples__/base-menu-subheader';
import BaseMenuSeparator from '../__examples__/base-menu-separator';
import BaseInheritMenuWidth from '../__examples__/base-inherit-menu-width.jsx';
import RequiredInputErrorState from '../__examples__/required-input-error-state';
import PredefinedOptionsOnly from '../__examples__/base-predefined-options-only';
import InlineSingle from '../__examples__/inline-single';
import InlineMultiple from '../__examples__/inline-multiple';
import BaseCustomMenuItem from '../__examples__/base-custom-menu-item';
import ReadOnly from '../__examples__/readonly-single';
import ReadOnlySingleSelectionCustomMenuItem from '../__examples__/readonly-single-selection-custom-menu-item';
import ReadOnlyMultiple from '../__examples__/readonly-multiple';
import SnapshotBaseOpen from '../__examples__/snapshot/base-open';
import SnapshotBaseOpenMenuSubHeaderSeparator from '../__examples__/snapshot/base-open-menu-sub-header';
import SnapshotBaseOpenMenuInheritWidthOf from '../__examples__/snapshot/base-open-menu-inheritWidthOf';
import SnapshotBaseCustomMenuItemOpen from '../__examples__/snapshot/base-custom-menu-item-open';
import SnapshotBaseSelected from '../__examples__/snapshot/base-selected';
import SnapshotInlineSingleSelection from '../__examples__/snapshot/inline-single-selection';
import SnapshotInlineSingleSelectionSelected from '../__examples__/snapshot/inline-single-selection-selected';
import SnapshotInlineMultipleSelection from '../__examples__/snapshot/inline-multiple-selection';
import SnapshotInlineMultipleSelectionSelected from '../__examples__/snapshot/inline-multiple-selection-selected';
import SnapshotReadonlySingleSelection from '../__examples__/snapshot/readonly-single-selection';
import SnapshotReadonlySingleSelectionSelected from '../__examples__/snapshot/readonly-single-selection-selected';
import SnapshotReadonlySingleSelectionSelectedOpen from '../__examples__/snapshot/readonly-single-selection-selected-open';
import SnapshotReadonlyMultipleSelection from '../__examples__/snapshot/readonly-multiple-selection';
import SnapshotReadonlyMultipleSelectionSingleItemSelected from '../__examples__/snapshot/readonly-multiple-selection-single-item-selected';
import SnapshotReadonlyMultipleSelectionMultipleItemsSelected from '../__examples__/snapshot/readonly-multiple-selection-multiple-items-selected';
import SnapshotReadonlySingleSelectionCustomMenuItemOpen from '../__examples__/snapshot/readonly-single-selection-custom-menu-item';
import SnapshotBaseLabelRequired from '../__examples__/snapshot/base-label-required';
storiesOf(COMBOBOX, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around--medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, {
    action: action
  });
}).add('Base Pre-defined Options Only', function () {
  return React.createElement(PredefinedOptionsOnly, {
    action: action
  });
}).add('Inline Single Selection', function () {
  return React.createElement(InlineSingle, {
    action: action
  });
}).add('Inline Multiple Selection', function () {
  return React.createElement(InlineMultiple, {
    action: action
  });
}).add('Base Custom Menu Item', function () {
  return React.createElement(BaseCustomMenuItem, {
    action: action
  });
}).add('Base Menu Sub Headers', function () {
  return React.createElement(BaseMenuSubHeader, {
    action: action
  });
}).add('Base Menu Separator', function () {
  return React.createElement(BaseMenuSeparator, {
    action: action
  });
}).add('Base Inherit Menu Width', function () {
  return React.createElement(BaseInheritMenuWidth, {
    action: action
  });
}).add('Readonly Single Selection', function () {
  return React.createElement(ReadOnly, {
    action: action
  });
}).add('Readonly Multiple Selection', function () {
  return React.createElement(ReadOnlyMultiple, {
    action: action
  });
}).add('Readonly Single Selection Custom Menu Item', function () {
  return React.createElement(ReadOnlySingleSelectionCustomMenuItem, {
    action: action
  });
}).add('Required Input in Error State', function () {
  return React.createElement(RequiredInputErrorState, {
    action: action
  });
}).add('Snapshot Base Open', function () {
  return React.createElement(SnapshotBaseOpen, {
    action: action
  });
}).add('Snapshot Base Custom Menu Item Open', function () {
  return React.createElement(SnapshotBaseCustomMenuItemOpen, {
    action: action
  });
}).add('Snapshot Base Selected', function () {
  return React.createElement(SnapshotBaseSelected, {
    action: action
  });
}).add('Snapshot Base Label Required', function () {
  return React.createElement(SnapshotBaseLabelRequired, {
    action: action
  });
}).add('Snapshot Base Open Menu Sub Header Separator', function () {
  return React.createElement(SnapshotBaseOpenMenuSubHeaderSeparator, {
    action: action
  });
}).add('Snapshot Base Open Menu inheritWidthOf prop', function () {
  return React.createElement(SnapshotBaseOpenMenuInheritWidthOf, {
    action: action
  });
}).add('Snapshot Inline Single Selection', function () {
  return React.createElement(SnapshotInlineSingleSelection, {
    action: action
  });
}).add('Snapshot Inline Single Selection Selected', function () {
  return React.createElement(SnapshotInlineSingleSelectionSelected, {
    action: action
  });
}).add('Snapshot Inline Multiple Selection', function () {
  return React.createElement(SnapshotInlineMultipleSelection, {
    action: action
  });
}).add('Snapshot Inline Multiple Selection Selected', function () {
  return React.createElement(SnapshotInlineMultipleSelectionSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection', function () {
  return React.createElement(SnapshotReadonlySingleSelection, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Selected', function () {
  return React.createElement(SnapshotReadonlySingleSelectionSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Selected Open', function () {
  return React.createElement(SnapshotReadonlySingleSelectionSelectedOpen, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection', function () {
  return React.createElement(SnapshotReadonlyMultipleSelection, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection Single Item Selected', function () {
  return React.createElement(SnapshotReadonlyMultipleSelectionSingleItemSelected, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection Multiple Items Selected', function () {
  return React.createElement(SnapshotReadonlyMultipleSelectionMultipleItemsSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Custom Menu Item', function () {
  return React.createElement(SnapshotReadonlySingleSelectionCustomMenuItemOpen, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map