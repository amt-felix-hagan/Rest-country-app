
export class Countries {
    constructor(
        public flags: SelectOptions, 
        public name: SelectOptions, 
        public population: number,
        public region: string,
        public capital: string[],
        public subRegion: string,
        public tld: string[],
        public currencies: SelectOptions,
        public laguages: SelectOptions) {}
}

class SelectOptions {
    constructor(
        public common: string,
        public png: string, 
        public NGN: FurtherOptions, 
        public nativeName: FurtherOptions,
        public eng: string
        ) {}
}

class FurtherOptions {
    constructor(public name: string, public common: string) {}
}