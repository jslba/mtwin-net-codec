const Codec = require("../source/index");

const text = {
	decoded: [
		"Hello World",
		'{"json":"sample","foo":[3,"bar","baz",12]}',
		"some stuff is here",
	],
	encoded: [
		"nLIrC\x02JChJM",
		'W"w_uH\v\x1F<_Cp\\vC\v\t<JMr\x0E }\x1A\t<NCo\x0E6\x04KDd\x0E\x0E,\x1EG[',
		"_uKL\x05mXW{J:OZ\x05vIPx",
	],
};

test("encode", function () {
	let instance = new Codec("sample_sid");
	for (let i = 0; i < text.decoded.length; i++) {
		expect(instance.run(text.decoded[i])).toStrictEqual(text.encoded[i]);
	}
});

test("encode", function () {
	let instance = new Codec("sample_sid");
	for (let i = 0; i < text.decoded.length; i++) {
		expect(instance.run(text.encoded[i])).toStrictEqual(text.decoded[i]);
	}
});
