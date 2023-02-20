class Codec {
	#key;

	constructor(key) {
		this.#key = new Array();
		for (let i = 0; i < key.length; i++) {
			let k = key.charCodeAt(i);

			if (k >= 48 && k <= 57) {
				k = k - 48 + 52;
			} else if (k >= 65 && k <= 90) {
				k = k - 65;
			} else if (k >= 97 && k <= 122) {
				k = k - 97 + 26;
			} else {
				k = null;
			}

			if (k != null) {
				this.#key.push(k);
			}
		}
	}

	run(text) {
		let buffer = "",
			key = this.#key;
		for (let i = 0; i < text.length; i++) {
			let v1 = text.charCodeAt(i),
				v2 = key[(i + text.length) % key.length],
				v3 = v1 ^ v2;
			if (v3 == 0) {
				let v4 = text.charCodeAt(i);
				buffer += String.fromCharCode(v4);
			} else {
				buffer += String.fromCharCode(v3);
			}
		}
		return buffer;
	}
}

module.exports = Codec;
