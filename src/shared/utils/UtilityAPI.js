
/*eslint no-extend-native: ["error", { "exceptions": ["Number", "Array"] }]*/ 
Number.prototype.commaSeparated = function (decimal) {
	return decimal >= 0 ? (+(this.toFixed(decimal))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Number.prototype.roundPrice = function () {
	return Math.round(this) - 0.01;
}

Number.prototype.toLetter = function () {
	const positions = ['هزار', 'میلیون', 'میلیارد', 'بیلیون', 'بیلیارد', 'تریلیون'];
	let s = "";
	// console.log(Num2persian(decimal));
	let number = this;
	for (let i = 0; number > 0; i++) {
		s = number % 1000 > 0 ? (number % 1000 + " " + (i ? positions[i - 1] : '') + (s ? " و " : "") + s) : s;
		number = Math.floor(number / 1000);
	}
	return s;
};


Array.prototype.findLastIndexOf = function (func) {
	var t = Object(this);
	for (let i = t.length - 1; i >= 0; i--) {
		if (func(t[i])) {
			return i;
		}
	}
	return -1;
};

class UtilityAPI {

	static chunks(arr, size) {
		if (!Array.isArray(arr)) {
			throw new TypeError('Input should be Array');
		}

		if (typeof size !== 'number') {
			throw new TypeError('Size should be a Number');
		}

		var result = [];
		for (var i = 0; i < arr.length; i += size) {
			result.push(arr.slice(i, size + i));
		}

		return result;
	}

	static toType(obj) {
		return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
	}

	static getImageURL(id) {
		const s = 'http://placehold.it/' + (Math.floor(Math.random() * 100) + 100) + "x" + (Math.floor(Math.random() * 100) + 100);
		//return "/images/bread.jpg";
		return s;
	}

	static getMessage(msg) {
		return '[' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + '] ' + msg;
	}

	static randomDate(start, end) {
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}

	static addToDate(date, duration) {
		if (!duration) {
			return date;
		}
		if (duration.months) date.setDate(date.getDate() + duration.months * 30);
		if (duration.weeks) date.setDate(date.getDate() + duration.days * 7);
		if (duration.days) date.setDate(date.getDate() + duration.days);
		if (duration.hours) date.setTime(date.getTime() + (duration.hours * 60 * 60 * 1000));
		if (duration.minutes) date.setTime(date.getTime() + duration.minutes * 60000);
		if (duration.seconds) date.setSeconds(date.getSeconds() + duration.seconds);
		return date;
	}

	//-----------------------------------------------------------------
	static emptyDuration(duration) {
		return !(duration.months || duration.weeks || duration.days || duration.hours || duration.minutes) ? true : false;
	}

	//-----------------------------------------------------------------
	static groupBy(xs, key) {
		return xs.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {});
	}

	//-----------------------------------------------------------------
	static shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
		}
	}

	//------------------------------------------------------------------------------*/
	static uniqueItems(value, index, self) {
		return self.indexOf(value) === index;
	}

	//------------------------------------------------------------------------------*/
	static getDaysArray(start, end, count) {
		start = new Date(start);
		end = new Date(end);
		for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + count)) {
			arr.push(dt.getTime());
		}
		return arr;
	}

	//------------------------------------------------------------------------------*/
	static getTextWidth(text, font) {
		var canvas = UtilityAPI.getTextWidth.canvas || (UtilityAPI.getTextWidth.canvas = document.createElement("canvas"));
		var context = canvas.getContext("2d");
		context.font = font;
		var metrics = context.measureText(text);
		return metrics.width;
	}

	//------------------------------------------------------------------------------*/	
	static sameDay(d1, d2) {
		d1 = d1 ? new Date(d1) : new Date();
		d2 = d2 ? new Date(d2) : new Date();
		return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
	}
	//------------------------------------------------------------------------------*/	
	static validateEmail(email) {
		var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	//------------------------------------------------------------------------------*/	
	static validateMobileNo(mobile) {
		return /^(09)([0-9]{9})$/.test(mobile);
	}

	//------------------------------------------------------------------------------*/	
	static validateCodemeli(codemeli) {
		return /^[0-9]{10}$/.test(codemeli);
	}

	//------------------------------------------------------------------------------*/	
	static validateShaba(shaba) {
		return /^IR[0-9]{24}$/.test(shaba);
	}

	//------------------------------------------------------------------------------*/	
	static validateAreaCode(areaCode) {
		return /^0[0-9]{2,3}$/.test(areaCode);
	}

	//------------------------------------------------------------------------------*/	
	static validatePhoneNo(phoneNo) {
		return /^[1-9][0-9]*$/.test(phoneNo);
	}

	//------------------------------------------------------------------------------*/	
	static validateInternationalMobileNo(mobile) {
		return /^[-+]?[0-9]{1,15}$/.test(mobile);
	}

	//------------------------------------------------------------------------------*/	
	static getRandomColor() {
		return Math.floor(Math.random() * 16777215).toString(16);
	}

	//------------------------------------------------------------------------------*/	
	static convertPersianNo(no) {
		const PERSIAN_NUMBERS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
		const ARABIC_NUMBERS = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];
		PERSIAN_NUMBERS.forEach((pn, idx) => {
			let res = new RegExp(pn, 'g');
			no = no && no.replace(res, '' + idx);
		});
		ARABIC_NUMBERS.forEach((pn, idx) => {
			let res = new RegExp(pn, 'g');
			no = no && no.replace(res, '' + idx);
		});
		return no;
	}

	//------------------------------------------------------------------------------
	static getLocalTime(offset) {
		const d = new Date();
		var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		return new Date(utc + (3600000 * offset));
	}

	static toLetter = function (number) {
		const positions = ['هزار', 'میلیون', 'میلیارد', 'بیلیون', 'بیلیارد', 'تریلیون'];
		let s = "";
		// console.log(Num2persian(number));

		for (let i = 0; number > 0; i++) {
			s = number % 1000 + " " + (i ? positions[i - 1] : '') + (s ? " و " : "") + s;
			number = Math.floor(number / 1000);
		}
		return s;
	}

	//------------------------------------------------------------------------------
	static difDay(n) {
		let toDayStart = new Date();
		toDayStart.setHours(0, 0, 0, 0);
		return toDayStart.getTime() + n * 24 * 60 * 60 * 1000;
	}

	//------------------------------------------------------------------------------
	static classBuilder(classes) {
		return Object.keys(classes).reduce((t, k) => classes[k] ? t.concat(k.split(" ").filter(c => !t.find(tc => tc === c))) : t, []).join(" ");
	}

	//------------------------------------------------------------------------------
	static errorBuilder(errors) {
		return Object.keys(errors).find(k => errors[k]);
	}

}

export default UtilityAPI;
