export class DigestClient {
    static parse(...args: any[]): string;
    constructor(user: string, password: string, options?: DigestClientOptions);
    user: any;
    hashFunc: any;
    password: any;
    nonceRaw: string;
    logger: any;
    precomputedHash: any;
    digest: {
        nc: number;
        algorithm: any;
        realm: string;
    };
    hasAuth: boolean;
    cnonceSize: number;
    statusCode: any;
    basic: any;
    getClient(): Promise<typeof fetch | typeof import("node-fetch").default>;
    _client: typeof import("node-fetch").default;
    fetch(url: string, options?: {}): Promise<Response | import("node-fetch").Response>;
    addBasicAuth(options?: {}): {
        headers: {
            Authorization: string;
        };
    };
    computeHash(user: any, realm: any, password: any): any;
    hashWithAlgorithm(data: any): any;
    addAuth(url: any, options: any): any;
    parseAuth(h: any): void;
    lastAuth: any;
    parseQop(rawAuth: any): "auth" | "auth-int";
    makeNonce(): string;
}

export type Algorithm = 'MD5' | 'MD5-sess' | 'SHA-256' | 'SHA-256-sess' | 'SHA-512-256' | 'SHA-512-256-sess'

export type DigestClientOptions = {
    algorithm?: Algorithm,
    statusCode?: number,
    cnonceSize?: number,
    basic?: boolean,
    precomputeHash?: boolean,
    logger?: DigestClientLogger
}

export interface DigestClientLogger {
    info: (...args: any[]) => void,
    warn: (...args: any[]) => void,
    debug: (...args: any[]) => void,
    [x: string]: any 
}

export default DigestClient;
