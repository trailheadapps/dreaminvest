/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import SnapshotDefault from '../__examples__/snapshot-default';
test('Datepicker Default DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Datepicker Default HTML Snapshot', function () {
  expect(renderMarkup(SnapshotDefault)).toMatchSnapshot();
});
var customProps = {
  align: 'right',
  assistiveText: {
    openCalendar: 'CUSTOM open Calendar',
    nextMonth: 'CUSTOM next month',
    previousMonth: 'CUSTOM previous month'
  },
  className: 'CUSTOM-CLASSNAME',
  formatter: function formatter() {
    return "Llama and Lamb's epiphany of love";
  },
  id: 'CUSTOM-ID',
  labels: {
    abbreviatedWeekDays: ['ONE', 'TWO', 'THR', 'FOU', 'FIV', 'SIX', 'SEV'],
    months: ['MONTH 1', 'MONTH 2', 'MONTH 3', 'MONTH 4', 'MONTH 5', 'MONTH 6', 'MONTH 7', 'MONTH 8', 'MONTH 9', 'MONTH 10', 'MONTH 11', 'MONTH 12'],
    placeholder: 'SWIPE RIGHT :-)',
    today: 'TODAY YOU ARE YOU!',
    weekDays: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
  },
  parser: function parser() {
    return new Date(2007, 0, 6);
  },
  relativeYearFrom: -20,
  relativeYearTo: 20,
  triggerClassName: 'CUSTOM-TRIGGER-CLASSNAME'
};
test("Datepicker\n\t\tabbreviatedWeekDayLabels,\n\t\tassistiveTextNextMonth,\n\t\tassistiveTextOpenCalendar,\n\t\tassistiveTextPreviousMonth,\n\t\talign,\n\t\tclassName,\n\t\tformatter,\n\t\tmonthLabels,\n\t\tplaceholder,\n\t\trelativeYearFrom,\n\t\trelativeYearTo,\n\t\ttodayLabel,\n\t\ttriggerClassName,\n\t\tweekDayLabels\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, customProps)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test("Datepicker\n\tisIsoWeekday\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, {
    isIsoWeekday: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=datepicker.snapshot-test.js.map