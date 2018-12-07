/*
 * Animated placeholder(s)
 *
 * Shows animated text in form input placeholders elements.
 *
 * JavaScript
 *
 * Copyright (c) 2016 Gianluca Zanferrari
 *
 * @author     Gianluca Zanferrari <zanferrari@gmail.com>
 * @copyright  2016 Gianluca Zanferrari
 * @license    BSD
 * @version    1.00.00
 * @link       http://www.zanfi.nl
 *
 * call paramms:
 * set_fields({'field_name_1': 'Text to show', 'field_name_1': 'text_to_show'});
 *
 * optional set interval time in milliseconds (default 4000)
 * interval_time(5000);
 *
 */
 
var milliseconds = 4000;

placeholder = function(){
            
	this.write_placeholder = function(field, text, n) {
		if (n < (text.length)) {
			$('#'+field).attr("placeholder", text.substring(0, n+1));
			n++;
			setTimeout(function() {
				var obj = new placeholder();
				obj.write_placeholder(field, text, n)
			}, 65);
		}
	}
                
	this.set_fields = function(objFields){
		for (var key in objFields) {
			// skip loop if the property is from prototype
			if (!objFields.hasOwnProperty(key)) continue;
				this.write_placeholder(key, objFields[key], 0);
				this.intervallize(objFields);
		}
	}
                
	this.intervallize = function(objFields){
		var interval = setInterval(function() {
			for (var key in objFields) {
				if (!objFields.hasOwnProperty(key)) continue;
					var obj = new placeholder();
					obj.write_placeholder(key, objFields[key], 0);
			}
		}, milliseconds);
	}
                
	this.interval_time = function(ms){
		milliseconds = ms;
	}
                
}