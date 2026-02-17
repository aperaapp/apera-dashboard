import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListItem",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-3 border-b border-b-gray-200 dark:border-b-gray-800" }, _attrs))}><p class="text-gray-400 dark:text-gray-500 line-clamp-1">${ssrInterpolate(_ctx.label)}</p>`);
      if (_ctx.value) {
        _push(`<p class="font-medium">${ssrInterpolate(_ctx.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = Object.assign(_sfc_main, { __name: "ListItem" });

export { __nuxt_component_12 as _ };
//# sourceMappingURL=ListItem-Dn8NVO1F.mjs.map
