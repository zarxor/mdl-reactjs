var React = require("react"),
		_ = require('lodash');

global.__functions = {
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
  },

  addColorClasses: function (classArray, color, colorSpectrum, textColor, textColorSpectrum) {
    colorSpectrum = colorSpectrum || 400;
    textColorSpectrum = textColorSpectrum || 400;

		if (color && color.length) {
			if (color == "white" || color == "black") {
        classArray["mdl-color--" + color] = true;
      } else {
        classArray["mdl-color--" + color + "-" + colorSpectrum] = true;
      }
		}
		if (textColor && textColor.length) {
			if (textColor == "white" || textColor == "black") {
        classArray["mdl-color-text--" + textColor] = true;
      } else {
        classArray["mdl-color-text--" + textColor + "-" + textColorSpectrum] = true;
      }
		}
    return classArray;
  },

  addShadowClasses: function (classArray, depth) {
    if (depth && depth > 0) {
	    classArray['mdl-shadow--' + depth + 'dp'] = true;
    }

    return classArray;
  },

  addGeneralClasses: function (classArray, props) {
    classArray = this.addColorClasses(classArray, props.color, props.colorSpectrum, props.textColor, props.textColorSpectrum);
    classArray = this.addShadowClasses(classArray, props.shadow);

    return classArray;
  },

  makeDefaultProps: function (props, settings) {
    settings = _.assign({
      colors: false,
      shadow: false,
    }, settings);

    props = settings.colors ? _.assign({
      color: '',
      colorSpectrum: '',
      textColor: '',
      textColorSpectrum: '',
    }, props) : props;

    props = settings.shadow ? _.assign({
      shadow: 2
    }, props) : props;

    return props;
  },

  makeDefaultPropTypes: function (props, settings) {
    settings = _.assign({
      colors: false,
      shadow: false,
    }, settings);

    _colors = ['', 'white', 'black', 'red','pink','purple','deep-purple','indigo','blue','light-blue','cyan','teal','green','light-green','lime','yellow','amber','orange','deep-orange','brown','grey','blue-grey'];
    _spectrums = ['', 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A400', 'A700'];

    props = settings.colors ? _.assign({
      color: React.PropTypes.oneOf(_colors),
      colorSpectrum: React.PropTypes.oneOf(_spectrums),
      textColor: React.PropTypes.oneOf(_colors),
      textColorSpectrum: React.PropTypes.oneOf(_spectrums),
    }, props) : props;

    props = settings.shadow ? _.assign({
      shadow: React.PropTypes.oneOf([ 0, 2, 3, 4, 6, 8, 16 ]),
    }, props) : props;

    return props;
  },
};

module.exports = {
  Badge: require('./badge.js'),
  Button: require('./button.js'),
  Icon: require('./icon.js'),
  Menu: require('./menu.js'),
  MenuItem: require('./menuItem.js'),
  Progress: require('./Progress.js'),
  Slider: require('./Slider.js'),
  Spinner: require('./Spinner.js'),
  Textfield: require('./Textfield.js'),
  Toggle: require('./toggle.js'),
  Table: require('./table.js'),

  // Card
  Card: require('./card/card.js'),
  CardActions: require('./card/CardActions.js'),
  CardMedia: require('./card/CardMedia.js'),
  CardMenu: require('./card/CardMenu.js'),
  CardSupportingText: require('./card/CardSupportingText.js'),
  CardTitle: require('./card/CardTitle.js'),

  // Layout
  Layout: require('./layout/layout.js'),
  LayoutContent: require('./layout/layoutContent.js'),
  LayoutDrawer: require('./layout/layoutDrawer.js'),
  LayoutHeader: require('./layout/layoutHeader.js'),
  LayoutHeaderRow: require('./layout/LayoutHeaderRow.js'),
  LayoutSpacer: require('./layout/LayoutSpacer.js'),
  LayoutTitle: require('./layout/LayoutTitle.js'),

  // Tabs
  Tabs: require('./tabs/tabs.js'),
  TabsPanel: require('./tabs/tabsPanel.js'),

  // Navigation
  Navigation: require('./navigation/navigation.js'),
  NavigationLink: require('./navigation/navigationLink.js'),

  // Grid
  Grid: require('./grid/grid.js'),
  GridCell: require('./grid/gridCell.js'),
};
