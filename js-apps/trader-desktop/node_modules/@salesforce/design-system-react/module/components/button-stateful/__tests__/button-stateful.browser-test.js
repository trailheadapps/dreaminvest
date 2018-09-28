import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import chai from 'chai';
import IconSettings from '../../icon-settings';
import Icon from '../../icon';
import ButtonStateful from '../../button-stateful';
chai.should();
describe('Button Stateful: ', function () {
  // Base defaults
  var requiredProps = {
    assistiveText: 'like',
    iconName: 'like',
    iconSize: 'large',
    variant: 'icon'
  }; // Setup and takedown

  var renderButton = function renderButton(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = ReactDOM.render(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
    };
  };

  function removeButton() {
    ReactDOM.unmountComponentAtNode(this.dom);
    document.body.removeChild(this.dom);
  }

  var getButton = function getButton(dom) {
    return dom.querySelector('.slds-button');
  }; // Tests


  describe('Default Structure', function () {
    beforeEach(renderButton(React.createElement(ButtonStateful, requiredProps)));
    afterEach(removeButton);
    it('button exists - is not undefined', function () {
      var button = getButton(this.dom);
      button.should.not.be.undefined;
    });
    it('if no active prop, is not active', function () {
      var button = getButton(this.dom);
      button.className.should.include('slds-not-selected');
    });
  });
  describe('External active props works', function () {
    var propsWithActive = assign(requiredProps, {
      active: true
    });
    beforeEach(renderButton(React.createElement(ButtonStateful, propsWithActive)));
    afterEach(removeButton);
    it('renders active prop', function () {
      var button = getButton(this.dom);
      button.className.should.include('slds-is-selected');
    });
  }); // TODO: Write more tests for custom renderers
});
//# sourceMappingURL=button-stateful.browser-test.js.map