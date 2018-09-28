"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _dataTable = require("../../data-table");

var _dataTable2 = _interopRequireDefault(_dataTable);

var _column = require("../../data-table/column");

var _column2 = _interopRequireDefault(_column);

var _rowActions = require("../../data-table/row-actions");

var _rowActions2 = _interopRequireDefault(_rowActions);

var _highlightCell = require("../../data-table/highlight-cell");

var _highlightCell2 = _interopRequireDefault(_highlightCell);

var _iconSettings = require("../../icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_chai2.default.should();

var Simulate = _reactAddonsTestUtils2.default.Simulate,
    scryRenderedComponentsWithType = _reactAddonsTestUtils2.default.scryRenderedComponentsWithType,
    findRenderedDOMComponentWithClass = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithClass;
describe('DataTable: ', function () {
  var items = [{
    id: '8IKZHZZV80',
    name: 'Cloudhub',
    count: 100976,
    lastModified: 'Yesterday'
  }, {
    id: '5GJOOOPWU7',
    name: 'Cloudhub + Anypoint Connectors',
    count: 54976,
    lastModified: 'Today'
  }, {
    id: 'Q8Z71ZUCEZ',
    name: 'Cloud City',
    count: 101280,
    lastModified: 'Today'
  }, {
    id: '2FSH2DP0LY',
    name: 'IoT',
    count: 976,
    lastModified: 'Yesterday'
  }, {
    id: '8NE888QKV1',
    name: 'IoT + Anypoint Connectors',
    count: 54976,
    lastModified: 'Today'
  }, {
    id: 'M4D37GW83H',
    name: 'Salesforce Tower',
    count: 101280,
    lastModified: 'Today'
  }];
  var columns = [{
    label: 'Name',
    property: 'name',
    truncate: true
  }, {
    label: 'Count',
    property: 'count',
    sortable: true
  }];
  var defaultProps = {
    id: 'DataTableExample-default',
    items: items,
    selectRows: true
  };

  var renderTable = function renderTable(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = _reactDom2.default.render(_react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeTable() {
    _reactDom2.default.unmountComponentAtNode(this.dom);

    document.body.removeChild(this.dom);
  }

  var getTable = function getTable(dom) {
    return dom.querySelector('.slds-table');
  };

  var getRow = function getRow(dom, row) {
    var tbody = getTable(dom).querySelectorAll('tbody')[0];
    return tbody.querySelectorAll('tr')[row - 1];
  };

  var getCell = function getCell(dom, row, column) {
    var tr = getRow(dom, row);
    return tr.querySelectorAll('td')[column];
  };

  var getMenu = function getMenu(dom) {
    return dom.querySelector('.slds-dropdown');
  };

  describe('Structure', function () {
    beforeEach(renderTable(_react2.default.createElement(_dataTable2.default, defaultProps, columns.map(function (columnProps) {
      return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
        key: columnProps.property
      }));
    }))));
    afterEach(removeTable);
    it('has a header', function () {
      var thead = getTable(this.dom).querySelectorAll('thead');
      thead.should.have.length(1);
      thead[0].querySelectorAll('th').should.have.length(3);
    });
    it('has a row for each item', function () {
      var tbody = getTable(this.dom).querySelectorAll('tbody');
      tbody.should.have.length(1);
      tbody[0].querySelectorAll('tr').should.have.length(6);
    });
    it('renders the correct contents in each cell', function () {
      var firstName = getCell(this.dom, 1, 1);
      firstName.innerHTML.should.equal('<div class="" title="Cloudhub">Cloudhub</div>');
      var secondCount = getCell(this.dom, 2, 2);
      secondCount.innerHTML.should.equal('<div class="" title="54976">54976</div>');
    });
    it('has checkboxes only when selectRows is true', function () {
      var checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(7);
      removeTable.call(this);
      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        selectRows: false
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(0);
    });
  });
  describe('Selectable', function () {
    var defaultSelection = [{
      id: '8IKZHZZV80',
      name: 'Cloudhub',
      count: 100976,
      lastModified: 'Yesterday'
    }];
    afterEach(removeTable);
    it('can start with a row selected', function () {
      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        selection: defaultSelection
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var tbody = getTable(this.dom).querySelectorAll('tbody')[0];
      var selectedRows = tbody.querySelectorAll('tr.slds-is-selected');
      selectedRows.should.have.length(1);
      var checkedBoxes = tbody.querySelectorAll('.slds-checkbox input:checked');
      checkedBoxes.should.have.length(1);
    });
    it('can deselect a row', function (done) {
      this.onChange = function (newSelection) {
        newSelection.should.have.length(0);
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        selection: defaultSelection,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var tbody = getTable(this.dom).querySelectorAll('tbody')[0];
      var selectedRow = tbody.querySelectorAll('tr.slds-is-selected')[0];
      var checkbox = selectedRow.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkbox, {
        target: {
          checked: false
        }
      });
    });
    it('can select a row', function (done) {
      this.onChange = function (newSelection) {
        newSelection.should.have.length(2);
        newSelection[1].id.should.equal('5GJOOOPWU7');
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        selection: defaultSelection,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var checkbox = secondRow.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkbox, {
        target: {
          checked: true
        }
      });
    });
    it('can select all rows', function (done) {
      this.onChange = function (newSelection) {
        newSelection.should.have.length(6);
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var checkAll = thead.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkAll, {
        target: {
          checked: true
        }
      });
    });
    it('can deselect all rows', function (done) {
      this.onChange = function (newSelection) {
        newSelection.should.have.length(0);
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        selection: items,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var checkAll = thead.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkAll, {
        target: {
          checked: false
        }
      });
    });
  });
  describe('Sortable', function () {
    afterEach(removeTable);
    it('first clicked on sortable column header should result in ascending sort', function (done) {
      this.onSort = function (data) {
        data.property.should.equal('count');
        data.sortDirection.should.equal('asc');
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        fixedLayout: true,
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var thirdColumn = thead.querySelectorAll('th')[2];
      var sortButton = thead.querySelectorAll('a')[0];
      Simulate.click(sortButton, {});
    });
    it('does not call onSort when a non-sortable column is clicked', function (done) {
      this.onSort = function () {
        done('sort called');
      };

      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var secondColumn = thead.querySelectorAll('th')[1];
      Simulate.click(secondColumn, {});
      setTimeout(done, 600);
    });
  });
  describe('w/ RowActions', function () {
    afterEach(removeTable);
    it('renders the RowActions', function () {
      renderTable(_react2.default.createElement(_dataTable2.default, defaultProps, columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), _react2.default.createElement(_rowActions2.default, {
        options: [{
          id: 0,
          label: 'Add to Group',
          value: '1'
        }, {
          id: 1,
          label: 'Publish',
          value: '2'
        }]
      }))).call(this);
      var rowActionMenus = scryRenderedComponentsWithType(this.component, _rowActions2.default);
      rowActionMenus.should.have.length(6);
    });
    it('calls onAction when an action is clicked', function (done) {
      this.onAction = function (item, action) {
        item.id.should.equal('8IKZHZZV80');
        action.value.should.equal('1');
        done();
      };

      renderTable(_react2.default.createElement(_dataTable2.default, defaultProps, columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), _react2.default.createElement(_rowActions2.default, {
        options: [{
          id: 0,
          label: 'Add to Group',
          value: '1'
        }, {
          id: 1,
          label: 'Publish',
          value: '2'
        }],
        onAction: this.onAction
      }))).call(this);
      var rowActionMenu = scryRenderedComponentsWithType(this.component, _rowActions2.default)[0];
      var trigger = findRenderedDOMComponentWithClass(rowActionMenu, 'slds-button');
      Simulate.click(trigger, {});
      setTimeout(function () {
        var menu = getMenu(document.body);
        var firstAction = menu.querySelectorAll('.slds-dropdown__item')[0];
        Simulate.click(firstAction.querySelector('a'), {});
      }, 100);
    });
  });
  describe('w/ HighlightCell', function () {
    afterEach(removeTable);
    it('marks the appropriate text in a cell', function () {
      renderTable(_react2.default.createElement(_dataTable2.default, _extends({}, defaultProps, {
        search: "Cloud"
      }), columns.map(function (columnProps) {
        return _react2.default.createElement(_column2.default, _extends({}, columnProps, {
          key: columnProps.property
        }), _react2.default.createElement(_highlightCell2.default, null));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var markedText = secondRow.querySelectorAll('mark')[0];
      markedText.innerHTML.should.equal('Cloud');
    });
  });
});