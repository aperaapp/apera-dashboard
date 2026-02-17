import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SummaryItem",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-3 border border-gray-200 dark:border-gray-800 grid place-items-center rounded-md" }, _attrs))}><p class="font-medium text-lg">${ssrInterpolate(_ctx.value)}</p><p class="text-gray-400 dark:text-gray-500 line-clamp-1">${ssrInterpolate(_ctx.label)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SummaryItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_15 = Object.assign(_sfc_main, { __name: "SummaryItem" });

export { __nuxt_component_15 as _ };
//# sourceMappingURL=SummaryItem-B5YkN3sq.mjs.map
