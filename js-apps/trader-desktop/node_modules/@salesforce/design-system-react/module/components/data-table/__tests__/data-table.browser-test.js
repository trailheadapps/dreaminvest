function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import DataTable from '../../data-table';
import DataTableColumn from '../../data-table/column';
import DataTableRowActions from '../../data-table/row-actions';
import DataTableHighlightCell from '../../data-table/highlight-cell';
import IconSettings from '../../icon-settings';
chai.should();
var Simulate = TestUtils.Simulate,
    scryRenderedComponentsWithType = TestUtils.scryRenderedComponentsWithType,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
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
      this.component = ReactDOM.render(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeTable() {
    ReactDOM.unmountComponentAtNode(this.dom);
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
    beforeEach(renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
      return React.createElement(DataTableColumn, _extends({}, columnProps, {
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
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selectRows: false
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: items,
        onChange: this.onChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        fixedLayout: true,
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
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
      renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), React.createElement(DataTableRowActions, {
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
      var rowActionMenus = scryRenderedComponentsWithType(this.component, DataTableRowActions);
      rowActionMenus.should.have.length(6);
    });
    it('calls onAction when an action is clicked', function (done) {
      this.onAction = function (item, action) {
        item.id.should.equal('8IKZHZZV80');
        action.value.should.equal('1');
        done();
      };

      renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), React.createElement(DataTableRowActions, {
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
      var rowActionMenu = scryRenderedComponentsWithType(this.component, DataTableRowActions)[0];
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
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        search: "Cloud"
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }), React.createElement(DataTableHighlightCell, null));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var markedText = secondRow.querySelectorAll('mark')[0];
      markedText.innerHTML.should.equal('Cloud');
    });
  });
});
//# sourceMappingURL=data-table.browser-test.js.map