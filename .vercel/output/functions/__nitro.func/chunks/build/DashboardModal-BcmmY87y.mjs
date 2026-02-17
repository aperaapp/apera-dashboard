import { _ as __nuxt_component_0 } from './Modal-0QOr5npF.mjs';
import { v as useAppConfig, h as useUI, f as __nuxt_component_0$2, _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, useSlots, computed, toRef, mergeProps, unref, isRef, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { a as useBreakpoints, b as breakpointsTailwind } from './index-bOJEI7id.mjs';
import { twMerge } from 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardModal",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
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
    preventClose: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Object,
      default: () => ({})
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const appConfig = useAppConfig();
    const slots = useSlots();
    const config = computed(() => ({
      rounded: "sm:rounded-lg",
      shadow: "sm:shadow-xl",
      width: "sm:max-w-xl",
      height: "h-dvh sm:h-auto",
      padding: "p-0",
      header: {
        base: "flex items-start justify-between gap-x-1.5 flex-shrink-0 min-h-[--header-height]",
        inner: "flex items-start gap-4",
        padding: twMerge("px-4 py-4 sm:px-6", slots.default || slots.footer ? "pb-0" : void 0)
      },
      body: {
        base: "flex-1 flex flex-col gap-y-3",
        padding: "px-4 py-5 sm:p-6"
      },
      footer: {
        base: "flex items-center gap-x-1.5 flex-shrink-0",
        padding: "px-4 py-4 sm:px-6"
      },
      title: "text-gray-900 dark:text-white font-semibold",
      description: "mt-1 text-gray-500 dark:text-gray-400 text-sm",
      icon: {
        wrapper: "inline-flex",
        base: "w-12 h-12 flex-shrink-0 text-gray-900 dark:text-white"
      },
      default: {
        closeButton: {
          icon: appConfig.ui.icons.close,
          color: "gray",
          variant: "ghost",
          size: "sm"
        }
      }
    }));
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const { ui, attrs } = useUI("dashboard.modal", toRef(props, "ui"), config, void 0, true);
    const smallerThanSm = breakpoints.smaller("sm");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        overlay: !unref(smallerThanSm),
        transition: !unref(smallerThanSm),
        "prevent-close": __props.preventClose,
        ui: unref(ui)
      }, unref(attrs), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(ui).header.base, unref(ui).header.padding])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              _push2(`<div class="${ssrRenderClass(unref(ui).header.inner)}"${_scopeId}>`);
              if (__props.icon || _ctx.$slots.icon) {
                _push2(`<div class="${ssrRenderClass(unref(ui).icon.wrapper)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: __props.icon,
                    class: unref(ui).icon.base
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>`);
              if (__props.title || _ctx.$slots.title) {
                _push2(`<p class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || _ctx.$slots.description) {
                _push2(`<p class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              if (__props.closeButton) {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ...unref(ui).default.closeButton, ...__props.closeButton }, {
                  onClick: ($event) => isOpen.value = false
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (_ctx.$slots.default) {
              _push2(`<div class="${ssrRenderClass([unref(ui).body.base, unref(ui).body.padding])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$slots.footer) {
              _push2(`<div class="${ssrRenderClass([unref(ui).footer.base, unref(ui).footer.padding])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: [unref(ui).header.base, unref(ui).header.padding]
              }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createVNode("div", {
                    class: unref(ui).header.inner
                  }, [
                    __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: unref(ui).icon.wrapper
                    }, [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        createVNode(_component_UIcon, {
                          name: __props.icon,
                          class: unref(ui).icon.base
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    createVNode("div", null, [
                      __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: unref(ui).title
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || _ctx.$slots.description ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: unref(ui).description
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ], 2),
                  __props.closeButton ? (openBlock(), createBlock(_component_UButton, mergeProps({
                    key: 0,
                    "aria-label": "Close"
                  }, { ...unref(ui).default.closeButton, ...__props.closeButton }, {
                    onClick: ($event) => isOpen.value = false
                  }), null, 16, ["onClick"])) : createCommentVNode("", true)
                ])
              ], 2),
              _ctx.$slots.default ? (openBlock(), createBlock("div", {
                key: 0,
                class: [unref(ui).body.base, unref(ui).body.padding]
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              _ctx.$slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                class: [unref(ui).footer.base, unref(ui).footer.padding]
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "UDashboardModal" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=DashboardModal-BcmmY87y.mjs.map
