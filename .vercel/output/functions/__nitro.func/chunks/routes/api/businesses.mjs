import { e as eventHandler, g as getQuery } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const businesses = eventHandler(async (event) => {
  getQuery(event);
});

export { businesses as default };
//# sourceMappingURL=businesses.mjs.map
