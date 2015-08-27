/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');
var MDLFunc = require('../functions');

var _defaultProps = {
  columns: null,
  data: null,
  shadow: 2,
  selectable: false,
};

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

			'mdl-data-table--selectable': this.props.selectable,
		};

		classes['mdl-shadow--' + this.props.shadow + 'dp'] = true;

		return cx(classes);
	},

	_handleChange: function () {
		this.setState({ isChecked: !this.state.isChecked });
		console.log(!this.state.isChecked);
		if (!this.state.isChecked) {
			// todo: implement onChecked event
		} else {
			// todo: implement onUnchecked event
		}
	},

  _getCellClasses: function (column) {
    var classes = {
      'mdl-data-table__cell--non-numeric' : !column.isNumeric,
		};

		return cx(classes);
  },

  _rowClicked: function (row, i) {
    console.log(row);
    //console.log(i);
    //console.log(this);
  },

  _getElement: function() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.columns.map(function (column) {
              return (
                <th key={column.key} className={this._getCellClasses(column)}>{column.label}</th>
              );
            }.bind(this))}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(function (row, i) {
            return (
              <tr key={i}>
                  {this.props.columns.map(function (column) {
                    return (
                      <td key={column.key} className={this._getCellClasses(column)}>{column.prefix}{row[column.key]}{column.suffix}</td>
                    );
                  }.bind(this))}
              </tr>
            );
          }.bind(this))}
        </tbody>
			</table>
    );
  },

  render: function () {
    var element = this._getElement();
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());
    this.clone = React.cloneElement(element, newProps);
    return this.clone;
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
    if (this.props.selectable) {
      var elem = React.findDOMNode(this);
      var selectBoxes = this._findElementsByClass(elem, "mdl-checkbox__input");
      for (var i = 0; i < selectBoxes.length; i++) {
        selectBoxes[i].addEventListener("change", this.props.onChange.bind(null, this));
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
