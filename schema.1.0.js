
var isString = function (obj) {
  return toString.call(obj) == '[object String]'
}

var Key = {
	this.field_headers = [],
	this.fields = [],

	this.addField = function(name) {
		this.field_headers.push({name: name})
	},

	this.fillField = function(name, value) {
		var i = this.field_headers.indexOf({name: name})
		this.fields[i].push({name: name, value: value})
	},

	this.fetch = function(name) {
		var i = this.field_headers.indexOf({name: name})
		return this.fields[i]
	},

	this.resolve_type = function(name) {
		var i = this.field_headers.indexOf({name: name})
		var val = this.fields[i]
		var type = "Number"
		if (isString(val)) type = "String"
		return type
	}
}

module.exports = {
	key: Key
}