import { AsyncLocalStorage } from "node:async_hooks";

const asyncLocalStorage = new AsyncLocalStorage();
asyncLocalStorage.run(new Map(), () => {
  asyncLocalStorage.getStore()?.set("requestid", "45");
});
