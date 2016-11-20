var React = require("react"),
  cx = require('classnames'),
  _ = require('lodash');

var _defaultProps = {
  tag: 'div',
  ripple: false,
  tabBarProps: {}
};

module.exports = React.createClass({
  displayName: 'MDL.Tabs',

  propTypes: {},

  getDefaultProps: function () {
    return _defaultProps;
  },

  _getClasses: function () {
    var classes = {
      'mdl-tabs': true,
      'mdl-js-tabs': true,
      'mdl-js-ripple-effect': this.props.ripple
    };
    return cx(classes);
  },

  _getTabBar: function (panels) {
    var tabBarProps = __functions.joinProps({}, this.props.tabBarProps, {}, "mdl-tabs__tab-bar");
    var tabBarTabs = panels.map(function (panel, panelKey) {
      return (React.createElement("a", {
        key: panelKey,
        href: "#" + panel.props.id,
        className: "mdl-tabs__tab" + (panel.props.active
          ? " is-active"
          : "")
      }, panel.props.title));
    });

    return React.cloneElement(React.createElement("div", {key: "tabBar"}), tabBarProps, tabBarTabs);
  },

  _getElement: function () {
    var tabBar = this._getTabBar(this.props.children);
    var children = this.props.children.concat([tabBar]);
    return React.createElement(this.props.tag, {}, children);
  },

  render: function () {
    var element = this._getElement();
    var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());
    return React.cloneElement(element, newProps);
  },

  componentDidMount: function () {
    __functions.updateComponents();
  }
});
