import { _ as __nuxt_component_0 } from './DashboardPanelContent-CWR_KFWL.mjs';
import { defineComponent, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@tanstack/vue-query';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    reactive({
      email: true,
      desktop: false,
      product_updates: true,
      weekly_digest: false,
      important_updates: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UDashboardPanelContent, mergeProps({ class: "p-0 pb-24 divide-y divide-gray-200 dark:divide-gray-800" }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notifications-CKk_sP3f.mjs.map
