# [Codec][codec] implement of [mt.net.Codec][mtnetcodec]

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