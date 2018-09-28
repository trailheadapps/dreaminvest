function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ## Constants

import { DATA_TABLE_COLUMN } from '../../utilities/constants'; // extends is used below so that react-docgen can detect the component

/**
 * Columns define the structure of the data displayed in the DataTable.
 */

var DataTableColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTableColumn, _React$Component);

  function DataTableColumn() {
    _classCallCheck(this, DataTableColumn);

    return _possibleConstructorReturn(this, (DataTableColumn.__proto__ || Object.getPrototypeOf(DataTableColumn)).apply(this, arguments));
  }

  return DataTableColumn;
}(React.Component); // ### Display Name
// Always use the canonical component name as the React display name.


DataTableColumn.displayName = DATA_TABLE_COLUMN; // ### Prop Types

DataTableColumn.propTypes = {
  /**
   * Use a _higher-order component_ to customize a data table cell that will override the default cell rendering. `CustomDataTableCell` must have the same `displayName` as `DataTableCell` or it will be ignored. If you want complete control of the HTML, including the wrapping `td`, you don't have to use `DataTableCell`.
   * ```
   * import DataTableCell from 'design-system-react/data-table/cell';
   * const CustomDataTableCell = ({ children, ...props }) => (
   *   <DataTableCell {...props} >
   *     <a href="javascript:void(0);">{children}</a>
   *   </DataTableCell>
   * );
   * CustomDataTableCell.displayName = DataTableCell.displayName;
   *
   * <DataTable>
   *   <DataTableColumn />
   *   <DataTableColumn>
   *     <DataTableCustomCell />
   *   </DataTableColumn>
   *   <DataTableRowActions />
   * </DataTable>
   * ```
   */
  children: PropTypes.element,

  /**
   * Selects this column as the currently sorted column.
   */
  isSorted: PropTypes.bool,

  /**
   * The column label. If a `string` is not passed in, no `title` attribute will be rendered.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The primary column for a row. This is almost always the first column.
   */
  primaryColumn: PropTypes.bool,

  /**
   * The property which corresponds to this column.
   */
  property: PropTypes.string,

  /**
   * Whether or not the column is sortable.
   */
  sortable: PropTypes.bool,

  /**
   * The current sort direction. If left out the component will track this internally. Required if `isSorted` is true.
   */
  sortDirection: PropTypes.oneOf(['desc', 'asc']),

  /**
   * Title used for truncation div within the cell.
   */
  title: PropTypes.string,

  /**
   * Adds truncate to cell node.
   */
  truncate: PropTypes.bool,

  /**
   * Width of column. This is required for advanced/fixed layout tables. Please provide units. (`rems` are recommended)
   */
  width: PropTypes.string
};
export default DataTableColumn;
//# sourceMappingURL=column.js.map