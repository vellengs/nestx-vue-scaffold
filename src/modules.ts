import { Providers } from "./providers";

export interface Module {
  views: any;
  routers: any[];
  providers: Providers;
  imports: (modules: Modules) => void;
}

export interface Modules {
  [key: string]: Module;
}

export function registerModules(modules: Modules) {
  const scope = "root";
  const items = Object.values(modules);
  items.forEach(item => {
    const providers = Object.values(item.providers);
    providers.forEach(fn => {
      fn(scope); // TODO
    });
  });
}
