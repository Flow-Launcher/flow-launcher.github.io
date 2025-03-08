declare namespace NodeJS {
  interface ProcessEnv {
    readonly WEBSITE_HOST: `https://${string}`;
    readonly WEBSITE_BASE: string;
  }
}
