import React, { PropTypes } from 'react';
import createReactClass from 'create-react-class';
import Pill from "../../../../components/pill";
import IconSettings from "../../../../components/icon-settings";

function noop() {}

var Example = createReactClass({
  displayName: 'BasePillExample',
  propTypes: {
    action: PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      action: function action() {
        return noop;
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      linked: true,
      unlinked: true,
      truncated: true
    };
  },
  onClick: function onClick(event) {
    this.props.action('onClick')(event);
  },
  onRemoveLinked: function onRemoveLinked(event) {
    this.props.action('onRemove')(event);
    this.setState({
      linked: false
    });
  },
  onRemoveUnlinked: function onRemoveUnlinked(event) {
    this.props.action('onRemove')(event);
    this.setState({
      unlinked: false
    });
  },
  onRemoveTruncated: function onRemoveTruncated(event) {
    this.props.action('onRemove')(event);
    this.setState({
      truncated: false
    });
  },
  renderLinked: function renderLinked() {
    if (this.state.linked) {
      return React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        onClick: this.onClick,
        onRemove: this.onRemoveLinked
      });
    }

    return null;
  },
  renderUnlinked: function renderUnlinked() {
    if (this.state.unlinked) {
      return React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        onRemove: this.onRemoveUnlinked
      });
    }

    return null;
  },
  renderTruncated: function renderTruncated() {
    if (this.state.truncated) {
      return React.createElement("div", {
        style: {
          width: '220px',
          position: 'relative'
        }
      }, React.createElement("div", {
        className: "slds-pill_container"
      }, React.createElement(Pill, {
        labels: {
          label: 'Pill label that is longer than the area that contains it',
          removeTitle: 'Remove'
        },
        onClick: this.onClick,
        onRemove: this.onRemoveTruncated
      })));
    }

    return null;
  },
  render: function render() {
    return React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement("div", {
      className: "slds-grid slds-grid_pull-padded-medium"
    }, React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.renderLinked()), React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.renderUnlinked()), React.createElement("div", {
      className: "slds-p-horizontal_medium"
    }, this.renderTruncated())));
  }
});
export default Example;
//# sourceMappingURL=base.js.map