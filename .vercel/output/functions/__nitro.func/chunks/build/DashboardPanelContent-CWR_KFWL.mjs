import { useSSRContext, defineComponent, toRef, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { h as useUI } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardPanelContent",
  __ssrInlineRender: true,
  props: {
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const config = {
      wrapper: "p-4 flex-1 flex flex-col overflow-y-auto"
    };
    const props = __props;
    const { ui, attrs } = useUI("dashboard.panel.content", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardPanelContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UDashboardPanelContent" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=DashboardPanelContent-CWR_KFWL.mjs.map
