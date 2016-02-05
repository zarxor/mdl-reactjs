/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

var _defaultProps = __functions.makeDefaultProps({
  columns: null,
  data: null,
  shadow: 2,
  selectable: false,
  'no-head': false,
}, {
	colors: true,
  shadow: true,
});

module.exports = React.createClass({
	displayName : 'MDL.Table',

	propTypes: {
    columns: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        key: React.PropTypes.string,
        isNumeric: React.PropTypes.bool
      })
    ).isRequired,
    data: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
  },

	getInitialState: function() {
    return { isChecked: this.props.checked };
  },

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
      'mdl-data-table' : true,
      'mdl-js-data-table' : true,

			'mdl-data-table--selectable': this.props.selectable && !this.props['no-head'],
		};

		classes = __functions.addGeneralClasses(classes, this.props);

		return cx(classes);
	},

	_handleChange: function () {
		this.setState({ isChecked: !this.state.isChecked });
		if (!this.state.isChecked) {
			// todo: implement onChecked event
		} else {
			// todo: implement onUnchecked event
		}
	},

  _getCellClasses: function (column) {
    return cx(__functions.addGeneralClasses({
      'mdl-data-table__cell--non-numeric' : !column.isNumeric,
		}, column));
  },

  _getRowClasses: function (row) {
		return cx(__functions.addGeneralClasses({}, row));
  },

  _rowClicked: function (row, i) {
  },

  _getElement: function() {
    return (
      React.createElement("table", null, 
        
          !this.props['no-head']
          ? React.createElement("thead", null, 
            React.createElement("tr", null, 
              this.props.columns.map(function (column) {
                return (
                  React.createElement("th", {key: column.key, className: this._getCellClasses(column), style: column.style}, column.label)
                );
              }.bind(this))
            )
          )
          : null, 
        
        React.createElement("tbody", null, 
          this.props.data.map(function (row, i) {
            return (
              React.createElement("tr", {key: i, className: this._getRowClasses(row)}, 
                  this.props.columns.map(function (column) {
                    return (
                      React.createElement("td", {key: column.key, className: this._getCellClasses(column)}, column.prefix, row[column.key], column.suffix)
                    );
                  }.bind(this))
              )
            );
          }.bind(this))
        )
			)
    );
  },

  render: function () {
    var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());
    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
    if (this.props.selectable && !this.props['no-head']) {
      var elem = React.findDOMNode(this);
      var selectBoxes = this._findElementsByClass(elem, "mdl-checkbox__input");
      for (var i = 0; i < selectBoxes.length; i++) {
        selectBoxes[i].addEventListener("change", this.props.onChange);
      }
    }
	},

  getSelectedRows: function () {
    //return this.
  },

  _findElementsByClass: function(element, className) {
        var foundElements = [];
        function recurse(element, className) {
            for (var i = 0; i < element.childNodes.length; i++) {
                var el = element.childNodes[i];
                var classes = el.className != undefined? el.className.split(" ") : [];
                for (var j = 0, jl = classes.length; j < jl; j++) {
                    if (classes[j] == className) {
                        foundElements.push(element.childNodes[i]) ;
                    }
                }

                recurse(element.childNodes[i], className);
            }
        }
        recurse(element, className);
        return foundElements;
    }
});
