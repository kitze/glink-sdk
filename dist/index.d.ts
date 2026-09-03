import { client } from "./client/client.gen";
export * from "./client";
export declare const configure: (options: {
    apiKey: string;
    baseUrl?: string;
}) => void;
export { client };
