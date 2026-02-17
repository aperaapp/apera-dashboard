import { h as useUI, f as __nuxt_component_0$2, _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, computed, toRef, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardSection",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    links: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: "vertical"
    },
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
    const props = __props;
    const config = computed(() => {
      const wrapper = {
        vertical: "divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 first:*:pt-2 mb-6",
        horizontal: "grid lg:grid-cols-3 pt-2 pb-6 items-start first:*:col-span-2 lg:first:*:col-span-1 last:*:col-span-2 gap-6"
      }[props.orientation];
      const container = {
        vertical: "flex flex-wrap items-center justify-between gap-4",
        horizontal: "flex lg:flex-col justify-between flex-row flex-wrap gap-4"
      }[props.orientation];
      return {
        wrapper,
        container,
        inner: "flex items-start gap-4",
        title: "text-gray-900 dark:text-white font-semibold",
        description: "mt-1 text-sm text-gray-500 dark:text-gray-400",
        links: "flex flex-wrap items-center gap-1.5",
        icon: {
          wrapper: "inline-flex",
          base: "w-12 h-12 flex-shrink-0 text-gray-900 dark:text-white"
        }
      };
    });
    const { ui, attrs } = useUI("dashboard.section", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).container)}"><div class="${ssrRenderClass(unref(ui).inner)}">`);
      if (__props.icon || _ctx.$slots.icon) {
        _push(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_UIcon, {
            name: __props.icon,
            class: unref(ui).icon.base
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      if (__props.title || _ctx.$slots.title) {
        _push(`<p class="${ssrRenderClass(unref(ui).title)}">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.description || _ctx.$slots.description) {
        _push(`<div class="${ssrRenderClass(unref(ui).description)}">`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
        _push(`<div class="${ssrRenderClass(unref(ui).links)}">`);
        ssrRenderSlot(_ctx.$slots, "links", {}, () => {
          _push(`<!--[-->`);
          ssrRenderList(__props.links, (link, index) => {
            _push(ssrRenderComponent(_component_UButton, mergeProps({
              key: index,
              ref_for: true
            }, link, {
              onClick: link.click
            }), null, _parent));
          });
          _push(`<!--]-->`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "UDashboardSection" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=DashboardSection-CLrGZ87G.mjs.map
