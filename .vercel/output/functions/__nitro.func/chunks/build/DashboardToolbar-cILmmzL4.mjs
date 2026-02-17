import { useSSRContext, defineComponent, toRef, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { h as useUI } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardToolbar",
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
      wrapper: "min-h-[49px] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 py-2 gap-x-4",
      container: "flex items-center justify-between flex-1 gap-x-1.5",
      left: "flex items-stretch gap-1.5",
      right: "flex items-stretch gap-1.5"
    };
    const props = __props;
    const { ui, attrs } = useUI("dashboard.toolbar", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).container)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<div class="${ssrRenderClass(unref(ui).left)}">`);
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
        _push(`</div><div class="${ssrRenderClass(unref(ui).right)}">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardToolbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "UDashboardToolbar" });

export { __nuxt_component_5 as _ };
//# sourceMappingURL=DashboardToolbar-cILmmzL4.mjs.map
