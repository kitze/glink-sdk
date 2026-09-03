import { client } from "./client/client.gen";
export * from "./client";
export const configure = (options) => {
    client.setConfig({
        baseUrl: options.baseUrl ?? "https://glink.so/api/rest",
        headers: { "x-api-key": options.apiKey },
    });
};
export { client };
