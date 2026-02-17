import { e as eventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const members = [
  {
    name: "Just Patrick",
    username: "just_patrick",
    role: "Admin",
    avatar: { src: "https://avatars.githubusercontent.com/u/56973177" }
  }
];
const members$1 = eventHandler(async () => {
  return members;
});

export { members$1 as default };
//# sourceMappingURL=members.mjs.map
