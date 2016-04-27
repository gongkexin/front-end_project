define(function(require,exports,moudle){

	var $ = require('jquery');

	function Helloseajs(container){
		this.container = $(container);
	}

	moudle.exports = Helloseajs;

	Helloseajs.prototype.render = function(){
		this._init();
	}
	Helloseajs.prototype._init = function(){
		this._bindEvent();
	}
	Helloseajs.prototype._bindEvent = function(){
		$("#clickme").on('click',function(e){
			alert("hello seajs");
		});
	}
});