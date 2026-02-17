import { useSSRContext, defineComponent, toRef, computed, mergeProps, unref, useId, provide, inject, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, g as appConfig, f as __nuxt_component_0$2, h as useUI, B as useInjectButtonGroup, j as _export_sfc, v as useAppConfig, y as useNuxtApp, U as useCookie, b as useRoute, _ as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_10 } from './client-only-1_rDmppN.mjs';
import { c as createSharedComposable, a as useBreakpoints, b as breakpointsTailwind, d as useStorage } from './index-bOJEI7id.mjs';

const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  gap: {
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-1",
    lg: "gap-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardPanelHandle",
  __ssrInlineRender: true,
  props: {
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
    const config2 = computed(() => {
      const wrapper = twJoin(
        "hidden md:block bg-transparent select-none absolute z-50 group",
        props.orientation === "vertical" && "w-[9px] h-full inset-y-0 -right-[5px] cursor-col-resize",
        props.orientation === "horizontal" && "h-[9px] w-full inset-x-0 -top-[5px] cursor-row-resize"
      );
      const container = twJoin(
        "group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition duration-200 absolute",
        props.orientation === "vertical" && "w-px h-full inset-x-0 mx-auto",
        props.orientation === "horizontal" && "h-px w-full inset-y-0 my-auto"
      );
      return {
        wrapper,
        container
      };
    });
    const { ui, attrs } = useUI("dashboard.panel.handle", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps(unref(attrs), {
        class: unref(ui).wrapper
      }, _attrs))}><div class="${ssrRenderClass(unref(ui).container)}"></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardPanelHandle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "UDashboardPanelHandle" });
const useResizable = (key, { min, max, value = 0, storage = "cookie" }) => {
  const el = ref(null);
  const width = storage === "cookie" ? useCookie(key, { default: () => value }) : useStorage(key, () => value);
  const isDragging = ref(false);
  function onMouseMove(e, x) {
    let w = el.value.offsetWidth + e.clientX - x;
    if (min) {
      w = Math.max(w, min);
    }
    if (max) {
      w = Math.min(w, max);
    }
    width.value = w;
    return e.clientX;
  }
  function onDrag(e) {
    if (!el.value) return;
    let x = e.clientX;
    (void 0).onmousemove = (e2) => {
      isDragging.value = true;
      x = onMouseMove(e2, x);
    };
    (void 0).onmouseup = () => {
      isDragging.value = false;
      (void 0).onmousemove = (void 0).onmouseup = null;
    };
  }
  return {
    el,
    width,
    isDragging,
    onDrag
  };
};
const _useUIState = () => {
  const route = useRoute();
  const isHeaderDialogOpen = ref(false);
  const isContentSearchModalOpen = ref(false);
  const isDashboardSidebarSlideoverOpen = ref(false);
  const isDashboardSearchModalOpen = ref(false);
  function toggleContentSearch() {
    if (isHeaderDialogOpen.value) {
      isHeaderDialogOpen.value = false;
      setTimeout(() => {
        isContentSearchModalOpen.value = !isContentSearchModalOpen.value;
      }, 0);
      return;
    }
    isContentSearchModalOpen.value = !isContentSearchModalOpen.value;
  }
  function toggleDashboardSearch() {
    if (isDashboardSidebarSlideoverOpen.value) {
      isDashboardSidebarSlideoverOpen.value = false;
      setTimeout(() => {
        isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value;
      }, 200);
      return;
    }
    isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value;
  }
  watch(() => route.path, () => {
    isDashboardSidebarSlideoverOpen.value = false;
  });
  return {
    isHeaderDialogOpen,
    isContentSearchModalOpen,
    /**
     * @deprecated Use the new {@link isDashboardSidebarSlideoverOpen} ref instead.
     */
    isDashboardSidebarSlidoverOpen: isDashboardSidebarSlideoverOpen,
    isDashboardSidebarSlideoverOpen,
    isDashboardSearchModalOpen,
    toggleContentSearch,
    toggleDashboardSearch
  };
};
const useUIState = createSharedComposable(_useUIState);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardPanel",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: Boolean,
      default: void 0
    },
    collapsible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "left"
    },
    grow: {
      type: Boolean,
      default: false
    },
    resizable: {
      // FIXME: This breaks typecheck
      // type: [Boolean, Object] as PropType<boolean | {
      //   min?: number,
      //   max?: number,
      //   value?: number,
      //   storage?: 'cookie' | 'local'
      // }>,
      type: [Boolean, Object],
      default: false
    },
    width: {
      type: Number,
      default: void 0
    },
    breakpoint: {
      type: String,
      default: "lg"
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
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const config2 = {
      wrapper: "flex-col items-stretch relative w-full",
      border: "border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[--width] flex-shrink-0",
      grow: "flex-1",
      collapsible: "hidden lg:flex",
      slideover: "lg:hidden"
    };
    const props = __props;
    const emit = __emit;
    const id = props.id ? `dashboard:panel:${props.id}` : useId("$4ZdpeoVg4X");
    const { ui, attrs } = useUI("dashboard.panel", toRef(props, "ui"), config2, toRef(props, "class"), true);
    const { el, width, onDrag, isDragging } = props.resizable ? useResizable(id || "dashboard:panel", { ...typeof props.resizable === "object" ? props.resizable : {}, value: props.width }) : { el: void 0, width: toRef(props.width), onDrag: void 0, isDragging: void 0 };
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const { isDashboardSidebarSlideoverOpen } = useUIState();
    breakpoints.smaller(props.breakpoint);
    const isOpen = computed({
      get() {
        return props.modelValue !== void 0 ? props.modelValue : isDashboardSidebarSlideoverOpen.value;
      },
      set(value) {
        props.modelValue !== void 0 ? emit("update:modelValue", value) : isDashboardSidebarSlideoverOpen.value = value;
      }
    });
    __expose({
      width,
      isDragging
    });
    provide("isOpen", isOpen);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelHandle = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_10;
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el
      }, { ...unref(attrs), ..._ctx.$attrs }, {
        class: [unref(ui).wrapper, __props.grow ? unref(ui).grow : unref(ui).border, __props.collapsible ? unref(ui).collapsible : "flex"],
        style: { "--width": unref(width) && !__props.grow ? `${unref(width)}px` : void 0 }
      }))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "handle", { onDrag: unref(onDrag) }, () => {
        if (__props.resizable && !__props.grow) {
          _push(ssrRenderComponent(_component_UDashboardPanelHandle, { onMousedown: unref(onDrag) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardPanel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UDashboardPanel" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardNavbarToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const appConfig2 = useAppConfig();
    const { $ui } = useNuxtApp();
    const isOpen = inject("isOpen", void 0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_1$1;
      if (unref(isOpen) !== void 0) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({
          icon: unref(appConfig2).ui.icons.menu
        }, (_b = (_a = unref($ui)) == null ? void 0 : _a.button) == null ? void 0 : _b.secondary, {
          "aria-label": `${unref(isOpen) ? "Close" : "Open"} sidebar`,
          class: "lg:hidden",
          onClick: ($event) => isOpen.value = !unref(isOpen)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardNavbarToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5$1 = Object.assign(_sfc_main$2, { __name: "UDashboardNavbarToggle" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
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
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.trailing || props.trailingIcon;
    });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    const leadingIconName = computed(() => {
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      badgeClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$2;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
    if (_ctx.isLeading && _ctx.leadingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if (_ctx.label) {
      _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
    if (_ctx.isTrailing && _ctx.trailingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.20.0_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@_zc6sjfyp4c7evy7q42zrsrclzy/node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "UBadge" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardNavbar",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    badge: {
      type: [String, Number, Object],
      default: void 0
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
    const config2 = {
      wrapper: "h-[--header-height] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0",
      container: "flex items-center justify-between flex-1 gap-x-1.5 min-w-0",
      left: "flex items-stretch gap-1.5 min-w-0",
      title: "flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white min-w-0",
      badge: {
        wrapper: "inline-flex items-center",
        base: "",
        size: "xs",
        color: "primary",
        variant: "subtle"
      },
      center: "hidden lg:flex",
      right: "flex items-stretch flex-shrink-0 gap-1.5"
    };
    const props = __props;
    const { ui, attrs } = useUI("dashboard.navbar", toRef(props, "ui"), config2, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardNavbarToggle = __nuxt_component_5$1;
      const _component_UBadge = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).container)}"><div class="${ssrRenderClass(unref(ui).left)}">`);
      ssrRenderSlot(_ctx.$slots, "toggle", {}, () => {
        _push(ssrRenderComponent(_component_UDashboardNavbarToggle, null, null, _parent));
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "left", {}, () => {
        if (__props.title || _ctx.$slots.title) {
          _push(`<h1 class="${ssrRenderClass(unref(ui).title)}">`);
          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
            _push(`<span class="truncate">${ssrInterpolate(__props.title)}</span>`);
          }, _push, _parent);
          _push(`</h1>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.badge || _ctx.$slots.badge) {
          _push(`<div class="${ssrRenderClass(unref(ui).badge.wrapper)}">`);
          ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
            if (__props.badge) {
              _push(ssrRenderComponent(_component_UBadge, mergeProps({
                size: unref(ui).badge.size,
                color: unref(ui).badge.color,
                variant: unref(ui).badge.variant,
                ...typeof __props.badge === "string" || typeof __props.badge === "number" ? { label: __props.badge } : __props.badge
              }, {
                class: unref(ui).badge.base
              }), null, _parent));
            } else {
              _push(`<!---->`);
            }
          }, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.center) {
        _push(`<div class="${ssrRenderClass(unref(ui).center)}">`);
        ssrRenderSlot(_ctx.$slots, "center", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.right || _ctx.$slots.center) {
        _push(`<div class="${ssrRenderClass(unref(ui).right)}">`);
        ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "UDashboardNavbar" });

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_5 as b, __nuxt_component_5$1 as c, useUIState as u };
//# sourceMappingURL=DashboardNavbar-BWbGc5-K.mjs.map
