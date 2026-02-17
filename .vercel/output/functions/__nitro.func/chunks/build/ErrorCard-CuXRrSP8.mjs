import { defineComponent, toRef, computed, useSSRContext, createVNode, resolveDynamicComponent, mergeProps, withCtx, toDisplayString } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, g as appConfig, h as useUI, j as _export_sfc, f as __nuxt_component_0$2 } from './server.mjs';
import { ssrRenderVNode, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Card-B4YJjzl5.mjs';

const skeleton = {
  base: "animate-pulse",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-md"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.skeleton, skeleton);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("skeleton", toRef(props, "ui"), config);
    const skeletonClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.rounded
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      skeletonClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.skeletonClass }, _ctx.attrs, _attrs), null), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.20.0_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@_zc6sjfyp4c7evy7q42zrsrclzy/node_modules/@nuxt/ui/dist/runtime/components/layout/Skeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "USkeleton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ErrorCard",
  __ssrInlineRender: true,
  props: {
    title: { default: "Error" },
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: {
        background: "bg-red-400 dark:bg-red-800",
        rounded: "rounded-3xl",
        body: {
          padding: "py-2"
        }
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid place-items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-exclamation-circle",
              class: "w-5 h-5 mx-auto"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-center font-semibold"${_scopeId}>${ssrInterpolate(_ctx.title)}</p></div><p class="text-center"${_scopeId}>${ssrInterpolate(_ctx.message)}</p>`);
          } else {
            return [
              createVNode("div", { class: "grid place-items-center gap-1" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-exclamation-circle",
                  class: "w-5 h-5 mx-auto"
                }),
                createVNode("p", { class: "text-center font-semibold" }, toDisplayString(_ctx.title), 1)
              ]),
              createVNode("p", { class: "text-center" }, toDisplayString(_ctx.message), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ErrorCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "ErrorCard" });

export { __nuxt_component_2 as _, __nuxt_component_3 as a };
//# sourceMappingURL=ErrorCard-CuXRrSP8.mjs.map
