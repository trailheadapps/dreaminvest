import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import chai from 'chai';
import Spinner from '../../spinner';
chai.should();
describe('Spinner: ', function () {
  // Setup and takedown
  var renderSpinner = function renderSpinner(instance) {
    return function () {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      this.component = ReactDOM.render(instance, this.dom);
    };
  };

  function removeSpinner() {
    ReactDOM.unmountComponentAtNode(this.dom);
    document.body.removeChild(this.dom);
  }

  var getSpinner = function getSpinner(dom) {
    return dom.querySelector('.slds-spinner');
  }; // Tests


  describe('Default spinner renders properly', function () {
    before(renderSpinner(React.createElement(Spinner, null)));
    after(removeSpinner);
    it('Spinner exists', function () {
      var spinner = getSpinner(this.dom);
      spinner.should.not.be.undefined;
    });
    it('renders default classes when no props passed in', function () {
      var spinner = getSpinner(this.dom);
      spinner.className.should.equal('slds-spinner slds-spinner_medium');
    });
  });
  describe('Props render proper css classes', function () {
    beforeEach(renderSpinner(React.createElement(Spinner, {
      size: "small",
      variant: "brand"
    })));
    afterEach(removeSpinner);
    it('renders correct classes when props passed in', function () {
      var spinner = getSpinner(this.dom);
      spinner.className.should.include('slds-spinner_brand slds-spinner_small');
    });
  });
});
//# sourceMappingURL=spinner.browser-test.js.map