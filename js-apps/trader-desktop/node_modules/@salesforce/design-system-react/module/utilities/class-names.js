// ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."
import classNames from 'classnames';

var classNamesWrapper = function classNamesWrapper() {
  var string = classNames.apply(void 0, arguments);
  return string === '' ? undefined : string;
};

export default classNamesWrapper;
//# sourceMappingURL=class-names.js.map