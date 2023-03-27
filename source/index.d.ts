export = Codec;
declare class Codec {
    #private;
    constructor(key: string);
    run(text: string): string;
}
