# [Codec][codec] implement of [mt.net.Codec][mtnetcodec]

![npm](https://img.shields.io/npm/v/mtwin-net-codec?color=blue&style=flat)
![tests](https://img.shields.io/static/v1?label=tests&message=2%20passed&color=brightgreen&style=flat)
![GitHub](https://img.shields.io/github/license/jslba/mtwin-net-codec?style=flat)

This  is the  first  generation  of the  Codec  used  by Motion-Twin  to encrypt
`client<>server` exchanges in their games.

> **Note**   
> If you are looking  for how to  use it, you  can look at some  examples in the
> [unit tests][unittests].

## Constructor

```hx
new Codec(key: String)
```

## Variables

```hx
// The key used for encoding and decoding a string.
private key: Array
```

## Methods

```hx
// return the encoded or decoded `text` string based on `key`.
public run(text: String): String
```

[codec]: /source/index.js
[mtnetcodec]: https://github.com/Angelisium/TwinoidGames/blob/main/bytecodes/carapass/client.flm#L5984:L6207
[unittests]: /test/rand.test.js