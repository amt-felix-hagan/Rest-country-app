export class Countries {
    constructor(
        public flags: SelectOptions, 
        public name: SelectOptions, 
        public population: number,
        public region: string,
        public capital: string[],
        public subregion: string,
        public tld: string[],
        public currencies: CurrencyOptions,
        public languages: SelectOptions,
        public borders: string[]
    ) {}
}

class SelectOptions {
    constructor(
        public common: string,
        public png: string, 
        public NGN: FurtherOptions, 
        public nativeName: FurtherOptions,
        public language: string,
        public lan: FurtherOptions
    ) {}
}

class FurtherOptions {
    constructor(public name: string, public common: string) {}
}

class CurrencyOptions {
    constructor(public primary: FurtherOptions) {}
}
