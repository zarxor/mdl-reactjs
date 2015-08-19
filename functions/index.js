var _ = require('lodash');

module.exports = {
  objDiff: function (obj1, obj2) {
    var _keysObj1 = _.keys(obj1);
		var _keysObj2 = _.keys(obj2);

		var _keysDiff = _.remove(_keysObj2, function(n) {
		  return (_(_keysObj1).indexOf(n) == -1);
		});

		return _.pick(obj2, function (value, key) {
			return _(_keysDiff).indexOf(key) != -1;
		});
  },
  joinProps: function (defaultProps, currentProps, elementProps, classes) {
    var diffedProps = this.objDiff(defaultProps, currentProps);
    var joinedProps = _.assign(diffedProps, elementProps);
    return _.assign(joinedProps, {
			className: _.trimLeft((currentProps.className || '') + ' ' + (elementProps.className || '') + ' ' + classes)
		});
  }
}
