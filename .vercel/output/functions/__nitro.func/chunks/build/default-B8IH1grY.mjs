import { _ as __nuxt_component_0$1 } from './DashboardLayout-DtSK8IfL.mjs';
import { u as useUIState, _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_5$1 } from './DashboardNavbar-BWbGc5-K.mjs';
import { defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, useSSRContext, defineAsyncComponent, withCtx, createVNode, renderSlot, inject, toRef, mergeProps, unref, createSlots, createTextVNode, toDisplayString, withAsyncContext, useId, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, renderList, Transition, Fragment, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList } from 'vue/server-renderer';
import { b as useRoute, v as useAppConfig, h as useUI, y as useNuxtApp, q as getULinkProps, w as useUserStore, u as useSupabaseClient, e as useRouter, K as useSupabaseUser, _ as __nuxt_component_1$1, p as __nuxt_component_1$2, f as __nuxt_component_0$2$1, a as __nuxt_component_1$3, n as __nuxt_component_1$5 } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './Kbd-Yu76GohJ.mjs';
import { u as useShortcuts } from './defineShortcuts-Dh20htKv.mjs';
import { _ as __nuxt_component_0$2 } from './Tooltip-BpAT_8aW.mjs';
import { _ as __nuxt_component_2$2 } from './Chip-i0DPCWz-.mjs';
import { i as i$5, b as u$4, o as o$2, h as t, j as i, A, s as s$1, m as l, N as N$1, c as o$1, a as s$3 } from './usePopper-C_2kou-4.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as __nuxt_component_6 } from './Divider-sGwVF3o1.mjs';
import { _ as __nuxt_component_0$3 } from './Dropdown-DMBXpvvs.mjs';
import { u as useDashboard } from './useDashboard-CHyEyBSu.mjs';
import { _ as __nuxt_component_0$4 } from './Slideover-CEHaOStU.mjs';
import { _ as __nuxt_component_2$3 } from './Input-DAwJQMOP.mjs';
import { f as formatTimeAgo } from './index-bOJEI7id.mjs';
import { u as useFetch } from './fetch-3sWffV1N.mjs';
import { _ as __nuxt_component_10 } from './client-only-1_rDmppN.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './transition-BOGEnzeo.mjs';
import './portal-CkOWSbPc.mjs';
import './active-element-history-177Cd7sN.mjs';
import './useFormGroup-CqsCLfTh.mjs';

var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let N = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s2 = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i$2 = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${i$5()}`), panelId: ref(`headlessui-disclosure-panel-${i$5()}`), disclosureState: s2, panel: e, button: i$2, toggleDisclosure() {
    s2.value = u$4(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o$2(l2) : o$2(n.button) : o$2(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), t(computed(() => u$4(s2.value, { [0]: i.Open, [1]: i.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c = { open: s2.value === 0, close: n.close };
    return A({ theirProps: a, ourProps: {}, slot: c, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2$1, expose: s$12 }) {
  let e = O("DisclosureButton"), i2 = U(), n = computed(() => i2 === null ? false : i2.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s$12({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = s$1(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o$2(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled) if (n.value) switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o$2(e.button)) == null || S.focus();
        break;
    }
    else switch (u2.key) {
      case o$1.Space:
      case o$1.Enter:
        u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
        break;
    }
  }
  function v(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o$2(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c, onKeydown: D, onKeyup: v };
    return A({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2$1, name: "DisclosureButton" });
  };
} }), V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s2 }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s2({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i2 = l(), n = computed(() => i2 !== null ? (i2.value & i.Open) === i.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return A({ ourProps: D, theirProps: c, slot: l2, attrs: r, slots: o2, features: N$1.RenderStrategy | N$1.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardSidebar",
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
      wrapper: "flex flex-col w-full flex-1 relative overflow-hidden",
      container: "flex-grow flex flex-col min-h-0 gap-y-2 py-2",
      header: "w-full flex flex-col px-4",
      body: "flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto",
      footer: "flex items-center justify-between gap-x-1.5 flex-shrink-0 px-4"
    };
    const props = __props;
    const { ui, attrs } = useUI("dashboard.sidebar", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(ui).wrapper
      }, unref(attrs), _attrs))}><div class="${ssrRenderClass(unref(ui).container)}">`);
      if (_ctx.$slots.header) {
        _push(`<div class="${ssrRenderClass(unref(ui).header)}">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(ui).body)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.footer) {
        _push(`<div class="${ssrRenderClass(unref(ui).footer)}">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardSidebar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$7, { __name: "UDashboardSidebar" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DashboardSearchButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: "Search..."
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const { $ui } = useNuxtApp();
    const { toggleDashboardSearch } = useUIState();
    const { metaSymbol } = useShortcuts();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UKbd = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        icon: unref(appConfig).ui.icons.search,
        label: __props.label,
        truncate: ""
      }, !!__props.label ? { color: "gray" } : (_b = (_a = unref($ui)) == null ? void 0 : _a.button) == null ? void 0 : _b.secondary, {
        "aria-label": "Search",
        onClick: unref(toggleDashboardSearch)
      }, _attrs), createSlots({ _: 2 }, [
        !!__props.label ? {
          name: "trailing",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(metaSymbol))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(metaSymbol)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UKbd, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` K `);
                  } else {
                    return [
                      createTextVNode(" K ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0" }, [
                  createVNode(_component_UKbd, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(metaSymbol)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UKbd, null, {
                    default: withCtx(() => [
                      createTextVNode(" K ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardSearchButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$6, { __name: "UDashboardSearchButton" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardSidebarLinks",
  __ssrInlineRender: true,
  props: {
    draggable: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 0
    },
    links: {
      type: Array,
      default: () => []
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
  emits: ["update:links"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const appConfig = useAppConfig();
    const config = computed(() => ({
      wrapper: "relative !min-h-[auto] !min-w-[auto]",
      container: "!overflow-visible",
      base: "group relative flex items-center gap-1.5 px-2.5 py-1.5 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      active: "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",
      inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
      static: "text-gray-900 dark:text-white cursor-auto",
      icon: {
        base: "flex-shrink-0 w-5 h-5 relative",
        active: "text-gray-900 dark:text-white",
        inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
      },
      trailingIcon: {
        name: appConfig.ui.icons.chevron,
        base: "ml-auto w-5 h-5 transform transition-transform duration-200 flex-shrink-0",
        active: "",
        inactive: "-rotate-90"
      },
      avatar: {
        base: "flex-shrink-0",
        size: "2xs"
      },
      chip: {
        base: "flex-shrink-0 mx-2.5",
        size: "sm"
      },
      badge: {
        base: "flex-shrink-0 ml-auto relative rounded",
        color: "gray",
        variant: "solid",
        size: "xs"
      },
      label: "text-sm truncate relative",
      dot: {
        wrapper: "w-px h-full mx-[9.5px] bg-gray-200 dark:bg-gray-700 relative",
        after: "after:absolute after:z-[1] after:w-px after:h-full after:bg-gray-200 after:dark:bg-gray-700 after:transform after:translate-y-full after:inset-x-0",
        base: "w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        active: "bg-gray-900 dark:bg-white",
        inactive: "bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-700 dark:group-hover:bg-gray-200"
      },
      tooltip: {
        strategy: "override",
        transition: {
          enterActiveClass: "transition ease-out duration-200",
          enterFromClass: "opacity-0",
          enterToClass: "opacity-100",
          leaveActiveClass: "transition ease-in duration-150",
          leaveFromClass: "opacity-100",
          leaveToClass: "opacity-0"
        }
      },
      transition: {
        enterActiveClass: "overflow-hidden transition-[height] duration-200 ease-out",
        leaveActiveClass: "overflow-hidden transition-[height] duration-200 ease-out"
      }
    }));
    const props = __props;
    const emit = __emit;
    let Container;
    let Draggable;
    if (props.draggable) {
      [__temp, __restore] = withAsyncContext(() => import('vue3-smooth-dnd').then(({ Container: _Container, Draggable: _Draggable }) => {
        Container = _Container;
        Draggable = _Draggable;
      }).catch()), await __temp, __restore();
    }
    const isDragging = ref(false);
    const { ui, attrs } = useUI("dashboard.sidebar.links", toRef(props, "ui"), config, toRef(props, "class"), true);
    function onEnter(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(_el) {
      const el = _el;
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(_el) {
      const el = _el;
      el.style.height = "auto";
    }
    function onLeave(_el, done) {
      const el = _el;
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onDrop(results) {
      const { removedIndex, addedIndex, payload } = results;
      const links = [...props.links];
      if (removedIndex === null && addedIndex === null) {
        return;
      }
      let itemToAdd = payload;
      if (removedIndex !== null) {
        itemToAdd = links.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        links.splice(addedIndex, 0, itemToAdd);
      }
      emit("update:links", links);
    }
    function fixActionRestriction() {
      (void 0).body.classList.remove(
        "smooth-dnd-no-user-select",
        "smooth-dnd-disable-touch-action"
      );
    }
    s$3(() => useId("$K6UKegYfTQ"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTooltip = __nuxt_component_0$2;
      const _component_ULink = __nuxt_component_1$2;
      const _component_UIcon = __nuxt_component_0$2$1;
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_UChip = __nuxt_component_2$2;
      const _component_UBadge = __nuxt_component_5$1;
      const _component_UDashboardSidebarLinks = __nuxt_component_5;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.draggable && unref(Container) ? unref(Container) : "ul"), mergeProps({
        class: unref(ui).wrapper
      }, {
        ...__props.draggable ? { orientation: "vertical", behaviour: "contain", lockAxis: "y", tag: "ul" } : {},
        ...unref(attrs)
      }, {
        onDragStart: ($event) => isDragging.value = true,
        onDragEnd: ($event) => isDragging.value = false,
        onDrop,
        onTouchend: fixActionRestriction
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.links, (link, index) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.draggable && unref(Draggable) ? unref(Draggable) : "li"), {
                key: index,
                tag: "li",
                class: unref(ui).container
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(((_a = link.children) == null ? void 0 : _a.length) ? unref(N) : "div"), {
                      "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                      as: "div"
                    }, {
                      default: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(((_a2 = link.children) == null ? void 0 : _a2.length) ? unref(Q) : "div"), { as: "template" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    var _a3, _b3, _c2, _d;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, ((_a3 = link.children) == null ? void 0 : _a3.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }, _push7, _parent7, _scopeId6) => {
                                          var _a4, _b4;
                                          if (_push7) {
                                            ssrRenderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a5;
                                              if (link.icon) {
                                                _push7(ssrRenderComponent(_component_UIcon, {
                                                  name: link.icon,
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, _parent7, _scopeId6));
                                              } else if (link.avatar) {
                                                _push7(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, _parent7, _scopeId6));
                                              } else if (link.chip) {
                                                _push7(ssrRenderComponent(_component_UChip, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, _parent7, _scopeId6));
                                              } else if (__props.level > 0) {
                                                _push7(`<span class="${ssrRenderClass([unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after])}"${_scopeId6}><span class="${ssrRenderClass([unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive])}"${_scopeId6}></span></span>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                            ssrRenderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => {
                                              if (link.label) {
                                                _push7(`<span class="${ssrRenderClass(unref(twMerge)(unref(ui).label, link.labelClass))}"${_scopeId6}>`);
                                                if (isActive) {
                                                  _push7(`<span class="sr-only"${_scopeId6}> Current page: </span>`);
                                                } else {
                                                  _push7(`<!---->`);
                                                }
                                                _push7(` ${ssrInterpolate(link.label)}</span>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                            if (((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false) {
                                              _push7(ssrRenderComponent(_component_UIcon, {
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            ssrRenderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => {
                                              if (link.badge) {
                                                _push7(ssrRenderComponent(_component_UBadge, mergeProps({ ref_for: true }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            }, _push7, _parent7, _scopeId6);
                                          } else {
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a5;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_b4 = link.children) == null ? void 0 : _b4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_c2 = link.children) == null ? void 0 : _c2.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                          class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                          "active-class": unref(ui).active,
                                          "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_d = link.children) == null ? void 0 : _d.length) ? unref(ui).static : unref(ui).inactive,
                                          draggable: "false",
                                          onClick: link.click
                                        }), {
                                          default: withCtx(({ isActive }) => {
                                            var _a4;
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a5;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UTooltip, mergeProps({
                                    class: "flex",
                                    popper: { placement: "right" },
                                    prevent: !link.tooltip,
                                    ui: unref(ui).tooltip,
                                    ref_for: true
                                  }, link.tooltip), {
                                    default: withCtx(() => {
                                      var _a3, _b3;
                                      return [
                                        createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a3 = link.children) == null ? void 0 : _a3.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                          class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                          "active-class": unref(ui).active,
                                          "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                          draggable: "false",
                                          onClick: link.click
                                        }), {
                                          default: withCtx(({ isActive }) => {
                                            var _a4;
                                            return [
                                              renderSlot(_ctx.$slots, "icon", {
                                                link,
                                                isActive
                                              }, () => {
                                                var _a5;
                                                return [
                                                  link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                    key: 0,
                                                    name: link.icon,
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                  }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                    key: 1,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).avatar.size,
                                                    ...link.avatar
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                  }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                    key: 2,
                                                    ref_for: true
                                                  }, {
                                                    size: unref(ui).chip.size,
                                                    ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                  }, {
                                                    class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                  }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                  }, [
                                                    createVNode("span", {
                                                      class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                    }, null, 2)
                                                  ], 2)) : createCommentVNode("", true)
                                                ];
                                              }),
                                              renderSlot(_ctx.$slots, "default", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.label ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: unref(twMerge)(unref(ui).label, link.labelClass)
                                                }, [
                                                  isActive ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "sr-only"
                                                  }, " Current page: ")) : createCommentVNode("", true),
                                                  createTextVNode(" " + toDisplayString(link.label), 1)
                                                ], 2)) : createCommentVNode("", true)
                                              ]),
                                              ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                                key: 0,
                                                name: unref(ui).trailingIcon.name,
                                                class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              renderSlot(_ctx.$slots, "badge", {
                                                link,
                                                isActive
                                              }, () => [
                                                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                  key: 0,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).badge.size,
                                                  color: unref(ui).badge.color,
                                                  variant: unref(ui).badge.variant,
                                                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                                }, {
                                                  class: unref(ui).badge.base
                                                }), null, 16, ["class"])) : createCommentVNode("", true)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["prevent", "ui"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          _push4(``);
                          if (((_b2 = link.children) == null ? void 0 : _b2.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false)) {
                            _push4(ssrRenderComponent(unref(V), {
                              static: "",
                              as: "template"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UDashboardSidebarLinks, {
                                    level: __props.level + 1,
                                    links: link.children,
                                    draggable: link.draggable,
                                    ui: unref(ui),
                                    "onUpdate:links": ($event) => emit("update:links", $event)
                                  }, createSlots({ _: 2 }, [
                                    renderList(_ctx.$slots, (_4, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push6, _parent6, _scopeId5);
                                          } else {
                                            return [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ];
                                          }
                                        })
                                      };
                                    })
                                  ]), _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UDashboardSidebarLinks, {
                                      level: __props.level + 1,
                                      links: link.children,
                                      draggable: link.draggable,
                                      ui: unref(ui),
                                      "onUpdate:links": ($event) => emit("update:links", $event)
                                    }, createSlots({ _: 2 }, [
                                      renderList(_ctx.$slots, (_4, name) => {
                                        return {
                                          name,
                                          fn: withCtx((slotData) => [
                                            renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                          ])
                                        };
                                      })
                                    ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_c = link.children) == null ? void 0 : _c.length) ? unref(Q) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a3, _b3;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a3 = link.children) == null ? void 0 : _a3.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b3 = link.children) == null ? void 0 : _b3.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a4;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a5;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  ((_a3 = link.children) == null ? void 0 : _a3.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_3, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      _: 2
                    }), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(((_b = link.children) == null ? void 0 : _b.length) ? unref(N) : "div"), {
                        "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                        as: "div"
                      }, {
                        default: withCtx((slotProps) => {
                          var _a2;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_a2 = link.children) == null ? void 0 : _a2.length) ? unref(Q) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a3, _b2;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a3 = link.children) == null ? void 0 : _a3.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b2 = link.children) == null ? void 0 : _b2.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a4;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a5;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  ((_a3 = link.children) == null ? void 0 : _a3.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_3, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }),
                        _: 2
                      }, 1032, ["default-open"]))
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                return openBlock(), createBlock(resolveDynamicComponent(__props.draggable && unref(Draggable) ? unref(Draggable) : "li"), {
                  key: index,
                  tag: "li",
                  class: unref(ui).container
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(((_a = link.children) == null ? void 0 : _a.length) ? unref(N) : "div"), {
                        "default-open": link.defaultOpen === void 0 ? true : link.defaultOpen,
                        as: "div"
                      }, {
                        default: withCtx((slotProps) => {
                          var _a2;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(((_a2 = link.children) == null ? void 0 : _a2.length) ? unref(Q) : "div"), { as: "template" }, {
                              default: withCtx(() => [
                                createVNode(_component_UTooltip, mergeProps({
                                  class: "flex",
                                  popper: { placement: "right" },
                                  prevent: !link.tooltip,
                                  ui: unref(ui).tooltip,
                                  ref_for: true
                                }, link.tooltip), {
                                  default: withCtx(() => {
                                    var _a3, _b;
                                    return [
                                      createVNode(_component_ULink, mergeProps({ ref_for: true }, ((_a3 = link.children) == null ? void 0 : _a3.length) && link.collapsible !== false ? { disabled: link.disabled } : unref(getULinkProps)(link), {
                                        class: [unref(ui).base, unref(isDragging) && "pointer-events-none"],
                                        "active-class": unref(ui).active,
                                        "inactive-class": !link.to && link.collapsible === false && __props.level === 0 && ((_b = link.children) == null ? void 0 : _b.length) ? unref(ui).static : unref(ui).inactive,
                                        draggable: "false",
                                        onClick: link.click
                                      }), {
                                        default: withCtx(({ isActive }) => {
                                          var _a4;
                                          return [
                                            renderSlot(_ctx.$slots, "icon", {
                                              link,
                                              isActive
                                            }, () => {
                                              var _a5;
                                              return [
                                                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                                                  key: 0,
                                                  name: link.icon,
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).icon.base, isActive ? unref(ui).icon.active : !link.to && link.collapsible === false && __props.level === 0 && ((_a5 = link.children) == null ? void 0 : _a5.length) ? unref(ui).static : unref(ui).icon.inactive), link.iconClass)
                                                }, null, 8, ["name", "class"])) : link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                                  key: 1,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).avatar.size,
                                                  ...link.avatar
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).avatar.base), link.avatarClass)
                                                }), null, 16, ["class"])) : link.chip ? (openBlock(), createBlock(_component_UChip, mergeProps({
                                                  key: 2,
                                                  ref_for: true
                                                }, {
                                                  size: unref(ui).chip.size,
                                                  ...typeof link.chip === "string" ? { color: link.chip } : link.chip
                                                }, {
                                                  class: unref(twMerge)(unref(twJoin)(unref(ui).chip.base), link.chipClass)
                                                }), null, 16, ["class"])) : __props.level > 0 ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: [unref(ui).dot.wrapper, index < __props.links.length - 1 && unref(ui).dot.after]
                                                }, [
                                                  createVNode("span", {
                                                    class: [unref(ui).dot.base, isActive ? unref(ui).dot.active : unref(ui).dot.inactive]
                                                  }, null, 2)
                                                ], 2)) : createCommentVNode("", true)
                                              ];
                                            }),
                                            renderSlot(_ctx.$slots, "default", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.label ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: unref(twMerge)(unref(ui).label, link.labelClass)
                                              }, [
                                                isActive ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "sr-only"
                                                }, " Current page: ")) : createCommentVNode("", true),
                                                createTextVNode(" " + toDisplayString(link.label), 1)
                                              ], 2)) : createCommentVNode("", true)
                                            ]),
                                            ((_a4 = link.children) == null ? void 0 : _a4.length) && link.collapsible !== false ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: unref(ui).trailingIcon.name,
                                              class: [unref(ui).trailingIcon.base, (slotProps == null ? void 0 : slotProps.open) ? unref(ui).trailingIcon.active : unref(ui).trailingIcon.inactive]
                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                            renderSlot(_ctx.$slots, "badge", {
                                              link,
                                              isActive
                                            }, () => [
                                              link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                                                key: 0,
                                                ref_for: true
                                              }, {
                                                size: unref(ui).badge.size,
                                                color: unref(ui).badge.color,
                                                variant: unref(ui).badge.variant,
                                                ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                                              }, {
                                                class: unref(ui).badge.base
                                              }), null, 16, ["class"])) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1040, ["class", "active-class", "inactive-class", "onClick"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["prevent", "ui"])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(Transition, mergeProps({ ref_for: true }, unref(ui).transition, {
                              onEnter,
                              onAfterEnter,
                              onBeforeLeave,
                              onLeave
                            }), {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  ((_a3 = link.children) == null ? void 0 : _a3.length) && ((slotProps == null ? void 0 : slotProps.open) || link.collapsible === false) ? (openBlock(), createBlock(unref(V), {
                                    key: 0,
                                    static: "",
                                    as: "template"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UDashboardSidebarLinks, {
                                        level: __props.level + 1,
                                        links: link.children,
                                        draggable: link.draggable,
                                        ui: unref(ui),
                                        "onUpdate:links": ($event) => emit("update:links", $event)
                                      }, createSlots({ _: 2 }, [
                                        renderList(_ctx.$slots, (_2, name) => {
                                          return {
                                            name,
                                            fn: withCtx((slotData) => [
                                              renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))
                                            ])
                                          };
                                        })
                                      ]), 1032, ["level", "links", "draggable", "ui", "onUpdate:links"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1040)
                          ];
                        }),
                        _: 2
                      }, 1032, ["default-open"]))
                    ];
                  }),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardSidebarLinks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$5, { __name: "UDashboardSidebarLinks" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UserDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { isHelpSlideoverOpen } = useDashboard();
    const { isDashboardSearchModalOpen } = useUIState();
    const { metaSymbol } = useShortcuts();
    const userStore = useUserStore();
    const supabase = useSupabaseClient();
    const router = useRouter();
    const items = computed(() => [
      [
        {
          slot: "account",
          label: "",
          disabled: true
        }
      ],
      [
        {
          label: "Settings",
          icon: "i-heroicons-cog-8-tooth",
          to: "/settings"
        },
        {
          label: "Command menu",
          icon: "i-heroicons-command-line",
          shortcuts: [metaSymbol.value, "K"],
          click: () => {
            isDashboardSearchModalOpen.value = true;
          }
        },
        {
          label: "Help & Support",
          icon: "i-heroicons-question-mark-circle",
          shortcuts: ["?"],
          click: () => isHelpSlideoverOpen.value = true
        }
      ],
      [
        {
          label: "Sign out",
          icon: "i-heroicons-arrow-left-on-rectangle",
          click: async () => {
            console.log("Logging out");
            console.log({ router });
            await supabase.auth.signOut();
            router.replace("/");
          }
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdown = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_UIcon = __nuxt_component_0$2$1;
      _push(ssrRenderComponent(_component_UDropdown, mergeProps({
        mode: "hover",
        items: unref(items),
        ui: { width: "w-full", item: { disabled: "cursor-text select-text" } },
        popper: { strategy: "absolute", placement: "top" },
        class: "w-full"
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(userStore).profile) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "gray",
                variant: "ghost",
                class: ["w-full", [open && "bg-gray-50 dark:bg-gray-800"]],
                label: unref(userStore).profile.name
              }, {
                leading: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UAvatar, {
                      src: unref(userStore).profile.avatar,
                      size: "2xs",
                      alt: unref(userStore).profile.name
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UAvatar, {
                        src: unref(userStore).profile.avatar,
                        size: "2xs",
                        alt: unref(userStore).profile.name
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                trailing: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-ellipsis-vertical",
                      class: "w-5 h-5 ml-auto"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-ellipsis-vertical",
                        class: "w-5 h-5 ml-auto"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(userStore).profile ? (openBlock(), createBlock(_component_UButton, {
                key: 0,
                color: "gray",
                variant: "ghost",
                class: ["w-full", [open && "bg-gray-50 dark:bg-gray-800"]],
                label: unref(userStore).profile.name
              }, {
                leading: withCtx(() => [
                  createVNode(_component_UAvatar, {
                    src: unref(userStore).profile.avatar,
                    size: "2xs",
                    alt: unref(userStore).profile.name
                  }, null, 8, ["src", "alt"])
                ]),
                trailing: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-ellipsis-vertical",
                    class: "w-5 h-5 ml-auto"
                  })
                ]),
                _: 2
              }, 1032, ["label", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        account: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(userStore).profile) {
              _push2(`<div class="text-left"${_scopeId}><p${_scopeId}>Signed in as</p><p class="truncate font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(userStore).profile.email)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(userStore).profile ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-left"
              }, [
                createVNode("p", null, "Signed in as"),
                createVNode("p", { class: "truncate font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(userStore).profile.email), 1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserDropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$4, { __name: "UserDropdown" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardSlideover",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
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
    const config = computed(() => ({
      header: {
        base: "flex items-center justify-between gap-x-1.5 flex-shrink-0 border-b border-gray-200 dark:border-gray-800 h-[--header-height]",
        padding: "p-4"
      },
      body: {
        base: "flex-1 overflow-y-auto",
        padding: "p-4"
      },
      footer: {
        base: "flex items-center gap-x-1.5 flex-shrink-0",
        padding: "p-4"
      },
      title: "text-gray-900 dark:text-white font-semibold flex items-center gap-x-1.5 min-w-0",
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
    const { ui, attrs } = useUI("dashboard.slideover", toRef(props, "ui"), config, void 0, true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlideover = __nuxt_component_0$4;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_USlideover, mergeProps({
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "prevent-close": __props.preventClose,
        ui: unref(ui)
      }, unref(attrs), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(ui).header.base, unref(ui).header.padding])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              if (__props.title || _ctx.$slots.title) {
                _push2(`<p class="${ssrRenderClass(unref(ui).title)}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(__props.title)}</span>`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.closeButton) {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ...unref(ui).default.closeButton, ...__props.closeButton }, {
                  onClick: ($event) => isOpen.value = false
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div><div class="${ssrRenderClass([unref(ui).body.base, unref(ui).body.padding])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
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
                  __props.title || _ctx.$slots.title ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: unref(ui).title
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createVNode("span", { class: "truncate" }, toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.closeButton ? (openBlock(), createBlock(_component_UButton, mergeProps({
                    key: 1,
                    "aria-label": "Close"
                  }, { ...unref(ui).default.closeButton, ...__props.closeButton }, {
                    onClick: ($event) => isOpen.value = false
                  }), null, 16, ["onClick"])) : createCommentVNode("", true)
                ])
              ], 2),
              createVNode("div", {
                class: [unref(ui).body.base, unref(ui).body.padding]
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              _ctx.$slots.footer ? (openBlock(), createBlock("div", {
                key: 0,
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardSlideover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "UDashboardSlideover" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HelpSlideover",
  __ssrInlineRender: true,
  setup(__props) {
    const { isHelpSlideoverOpen } = useDashboard();
    const { metaSymbol } = useShortcuts();
    useSupabaseUser();
    useSupabaseClient();
    const shortcuts = ref(false);
    const query = ref("");
    const links = [
      {
        label: "Shortcuts",
        icon: "i-heroicons-key",
        trailingIcon: "i-heroicons-arrow-right-20-solid",
        color: "gray",
        onClick: () => {
          shortcuts.value = true;
        }
      }
    ];
    const categories = computed(() => [
      {
        title: "General",
        items: [
          { shortcuts: [metaSymbol.value, "K"], name: "Command menu" },
          { shortcuts: ["N"], name: "Notifications" },
          { shortcuts: ["?"], name: "Help & Support" },
          { shortcuts: ["/"], name: "Search" }
        ]
      },
      {
        title: "Navigation",
        items: [
          { shortcuts: ["G", "H"], name: "Go to Home" },
          { shortcuts: ["G", "I"], name: "Go to Inbox" },
          { shortcuts: ["G", "U"], name: "Go to Users" },
          { shortcuts: ["G", "S"], name: "Go to Settings" }
        ]
      },
      {
        title: "Inbox",
        items: [
          { shortcuts: ["↑"], name: "Prev notification" },
          { shortcuts: ["↓"], name: "Next notification" }
        ]
      }
    ]);
    const filteredCategories = computed(() => {
      return categories.value.map((category) => ({
        title: category.title,
        items: category.items.filter((item) => {
          return item.name.search(new RegExp(query.value, "i")) !== -1;
        })
      })).filter((category) => !!category.items.length);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardSlideover = __nuxt_component_0;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_2$3;
      const _component_UKbd = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UDashboardSlideover, mergeProps({
        modelValue: unref(isHelpSlideoverOpen),
        "onUpdate:modelValue": ($event) => isRef(isHelpSlideoverOpen) ? isHelpSlideoverOpen.value = $event : null
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(shortcuts)) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "gray",
                variant: "ghost",
                size: "sm",
                icon: "i-heroicons-arrow-left-20-solid",
                onClick: ($event) => shortcuts.value = false
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(shortcuts) ? "Shortcuts" : "Help & Support")}`);
          } else {
            return [
              unref(shortcuts) ? (openBlock(), createBlock(_component_UButton, {
                key: 0,
                color: "gray",
                variant: "ghost",
                size: "sm",
                icon: "i-heroicons-arrow-left-20-solid",
                onClick: ($event) => shortcuts.value = false
              }, null, 8, ["onClick"])) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(unref(shortcuts) ? "Shortcuts" : "Help & Support"), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(shortcuts)) {
              _push2(`<div class="space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(query),
                "onUpdate:modelValue": ($event) => isRef(query) ? query.value = $event : null,
                icon: "i-heroicons-magnifying-glass",
                placeholder: "Search...",
                autofocus: "",
                color: "gray"
              }, null, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(unref(filteredCategories), (category, index) => {
                _push2(`<div${_scopeId}><p class="mb-3 text-sm text-gray-900 dark:text-white font-semibold"${_scopeId}>${ssrInterpolate(category.title)}</p><div class="space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(category.items, (item, i2) => {
                  _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(item.name)}</span><div class="flex items-center justify-end flex-shrink-0 gap-0.5"${_scopeId}><!--[-->`);
                  ssrRenderList(item.shortcuts, (shortcut, j) => {
                    _push2(ssrRenderComponent(_component_UKbd, { key: j }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(shortcut)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(shortcut), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex flex-col gap-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(links, (link, index) => {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({
                  key: index,
                  color: "white",
                  ref_for: true
                }, link), null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              unref(shortcuts) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-6"
              }, [
                createVNode(_component_UInput, {
                  modelValue: unref(query),
                  "onUpdate:modelValue": ($event) => isRef(query) ? query.value = $event : null,
                  icon: "i-heroicons-magnifying-glass",
                  placeholder: "Search...",
                  autofocus: "",
                  color: "gray"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCategories), (category, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("p", { class: "mb-3 text-sm text-gray-900 dark:text-white font-semibold" }, toDisplayString(category.title), 1),
                    createVNode("div", { class: "space-y-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item, i2) => {
                        return openBlock(), createBlock("div", {
                          key: i2,
                          class: "flex items-center justify-between"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "flex items-center justify-end flex-shrink-0 gap-0.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut, j) => {
                              return openBlock(), createBlock(_component_UKbd, { key: j }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(shortcut), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "flex flex-col gap-y-3"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(links, (link, index) => {
                  return createVNode(_component_UButton, mergeProps({
                    key: index,
                    color: "white",
                    ref_for: true
                  }, link), null, 16);
                }), 64))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HelpSlideover.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$2, { __name: "HelpSlideover" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotificationsSlideover",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { isNotificationsSlideoverOpen } = useDashboard();
    const { data: notifications } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/notifications", "$plXIeuFRYn")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardSlideover = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$5;
      const _component_UChip = __nuxt_component_2$2;
      const _component_UAvatar = __nuxt_component_1$3;
      _push(ssrRenderComponent(_component_UDashboardSlideover, mergeProps({
        modelValue: unref(isNotificationsSlideoverOpen),
        "onUpdate:modelValue": ($event) => isRef(isNotificationsSlideoverOpen) ? isNotificationsSlideoverOpen.value = $event : null,
        title: "Notifications"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(notifications), (notification) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: notification.id,
                to: `/inbox?id=${notification.id}`,
                class: "p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UChip, {
                      color: "red",
                      show: !!notification.unread,
                      inset: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, notification.sender.avatar, {
                            alt: notification.sender.name,
                            size: "md"
                          }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UAvatar, mergeProps({ ref_for: true }, notification.sender.avatar, {
                              alt: notification.sender.name,
                              size: "md"
                            }), null, 16, ["alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="text-sm flex-1"${_scopeId2}><p class="flex items-center justify-between"${_scopeId2}><span class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${ssrInterpolate(notification.sender.name)}</span><time${ssrRenderAttr("datetime", notification.date)} class="text-gray-500 dark:text-gray-400 text-xs"${_scopeId2}>${ssrInterpolate(unref(formatTimeAgo)(new Date(notification.date)))}</time></p><p class="text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(notification.body)}</p></div>`);
                  } else {
                    return [
                      createVNode(_component_UChip, {
                        color: "red",
                        show: !!notification.unread,
                        inset: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UAvatar, mergeProps({ ref_for: true }, notification.sender.avatar, {
                            alt: notification.sender.name,
                            size: "md"
                          }), null, 16, ["alt"])
                        ]),
                        _: 2
                      }, 1032, ["show"]),
                      createVNode("div", { class: "text-sm flex-1" }, [
                        createVNode("p", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(notification.sender.name), 1),
                          createVNode("time", {
                            datetime: notification.date,
                            class: "text-gray-500 dark:text-gray-400 text-xs",
                            textContent: toDisplayString(unref(formatTimeAgo)(new Date(notification.date)))
                          }, null, 8, ["datetime", "textContent"])
                        ]),
                        createVNode("p", { class: "text-gray-500 dark:text-gray-400" }, toDisplayString(notification.body), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: notification.id,
                  to: `/inbox?id=${notification.id}`,
                  class: "p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UChip, {
                      color: "red",
                      show: !!notification.unread,
                      inset: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UAvatar, mergeProps({ ref_for: true }, notification.sender.avatar, {
                          alt: notification.sender.name,
                          size: "md"
                        }), null, 16, ["alt"])
                      ]),
                      _: 2
                    }, 1032, ["show"]),
                    createVNode("div", { class: "text-sm flex-1" }, [
                      createVNode("p", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(notification.sender.name), 1),
                        createVNode("time", {
                          datetime: notification.date,
                          class: "text-gray-500 dark:text-gray-400 text-xs",
                          textContent: toDisplayString(unref(formatTimeAgo)(new Date(notification.date)))
                        }, null, 8, ["datetime", "textContent"])
                      ]),
                      createVNode("p", { class: "text-gray-500 dark:text-gray-400" }, toDisplayString(notification.body), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NotificationsSlideover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "NotificationsSlideover" });
const _imports_0 = "" + __buildAssetsURL("icon.BxqIxkaM.png");
const __nuxt_component_11_lazy = defineAsyncComponent(() => import('./DashboardSearch-C7ihS6eI.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useAppConfig();
    const { isHelpSlideoverOpen } = useDashboard();
    const links = [
      // {
      //   id: "home",
      //   label: "Home",
      //   icon: "i-heroicons-home",
      //   to: "/",
      //   tooltip: {
      //     text: "Home",
      //     shortcuts: ["G", "H"],
      //   },
      // },
      {
        id: "businesses",
        label: "Businesses",
        icon: "i-heroicons-briefcase",
        to: "/dashboard/business",
        tooltip: {
          text: "Business",
          shortcuts: ["B", "U"]
        }
      },
      {
        id: "workers",
        label: "Workers",
        icon: "i-heroicons-user-group",
        to: "/dashboard/workers",
        tooltip: {
          text: "Workers",
          shortcuts: ["W", "U"]
        }
      },
      {
        id: "gigs",
        label: "Gigs",
        icon: "i-heroicons-square-3-stack-3d",
        to: "/dashboard/gigs",
        tooltip: {
          text: "Gigs",
          shortcuts: ["B", "U"]
        }
      },
      {
        id: "payouts",
        label: "Payouts",
        icon: "i-heroicons-banknotes",
        to: "/dashboard/payouts",
        tooltip: {
          text: "Payouts",
          shortcuts: ["P", "U"]
        }
      }
      // {
      //   id: 'settings',
      //   label: 'Settings',
      //   to: '/settings',
      //   icon: 'i-heroicons-cog-8-tooth',
      //   children: [{
      //     label: 'General',
      //     to: '/settings',
      //     exact: true
      //   }, {
      //     label: 'Admins',
      //     to: '/settings/members'
      //   }, {
      //     label: 'Notifications',
      //     to: '/settings/notifications'
      //   }],
      //   tooltip: {
      //     text: 'Settings',
      //     shortcuts: ['G', 'S']
      //   }
      // }
    ];
    const footerLinks = [
      {
        label: "Add Admin",
        icon: "i-heroicons-plus",
        to: "/settings/members"
      },
      {
        label: "Help & Support",
        icon: "i-heroicons-question-mark-circle",
        click: () => isHelpSlideoverOpen.value = true
      }
    ];
    const groups = [
      {
        key: "links",
        label: "Go to",
        commands: links.map((link) => {
          var _a;
          return {
            ...link,
            shortcuts: (_a = link.tooltip) == null ? void 0 : _a.shortcuts
          };
        })
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardLayout = __nuxt_component_0$1;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UDashboardSidebar = __nuxt_component_3;
      const _component_UDashboardSearchButton = __nuxt_component_4;
      const _component_UDashboardSidebarLinks = __nuxt_component_5;
      const _component_UDivider = __nuxt_component_6;
      const _component_UserDropdown = __nuxt_component_7;
      const _component_HelpSlideover = __nuxt_component_8;
      const _component_NotificationsSlideover = __nuxt_component_9;
      const _component_ClientOnly = __nuxt_component_10;
      const _component_LazyUDashboardSearch = __nuxt_component_11_lazy;
      _push(ssrRenderComponent(_component_UDashboardLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, {
              width: 250,
              resizable: { min: 200, max: 300 },
              collapsible: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    class: "!border-transparent",
                    ui: { left: "flex-1" }
                  }, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="Apera Logo" class="size-8 rounded-full"${_scopeId3}><span class="font-black text-lg uppercase"${_scopeId3}>Apera</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "Apera Logo",
                              class: "size-8 rounded-full"
                            }),
                            createVNode("span", { class: "font-black text-lg uppercase" }, "Apera")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardSidebar, null, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UDashboardSearchButton, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UDashboardSearchButton)
                        ];
                      }
                    }),
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UserDropdown, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UserDropdown)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UDashboardSidebarLinks, { links }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UDivider, null, null, _parent4, _scopeId3));
                        _push4(`<div class="flex-1"${_scopeId3}></div>`);
                        _push4(ssrRenderComponent(_component_UDashboardSidebarLinks, { links: footerLinks }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UDivider, { class: "sticky bottom-0" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UDashboardSidebarLinks, { links }),
                          createVNode(_component_UDivider),
                          createVNode("div", { class: "flex-1" }),
                          createVNode(_component_UDashboardSidebarLinks, { links: footerLinks }),
                          createVNode(_component_UDivider, { class: "sticky bottom-0" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      class: "!border-transparent",
                      ui: { left: "flex-1" }
                    }, {
                      left: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "Apera Logo",
                            class: "size-8 rounded-full"
                          }),
                          createVNode("span", { class: "font-black text-lg uppercase" }, "Apera")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UDashboardSidebar, null, {
                      header: withCtx(() => [
                        createVNode(_component_UDashboardSearchButton)
                      ]),
                      footer: withCtx(() => [
                        createVNode(_component_UserDropdown)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UDashboardSidebarLinks, { links }),
                        createVNode(_component_UDivider),
                        createVNode("div", { class: "flex-1" }),
                        createVNode(_component_UDashboardSidebarLinks, { links: footerLinks }),
                        createVNode(_component_UDivider, { class: "sticky bottom-0" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_HelpSlideover, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NotificationsSlideover, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardPanel, {
                width: 250,
                resizable: { min: 200, max: 300 },
                collapsible: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardNavbar, {
                    class: "!border-transparent",
                    ui: { left: "flex-1" }
                  }, {
                    left: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "Apera Logo",
                          class: "size-8 rounded-full"
                        }),
                        createVNode("span", { class: "font-black text-lg uppercase" }, "Apera")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UDashboardSidebar, null, {
                    header: withCtx(() => [
                      createVNode(_component_UDashboardSearchButton)
                    ]),
                    footer: withCtx(() => [
                      createVNode(_component_UserDropdown)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_UDashboardSidebarLinks, { links }),
                      createVNode(_component_UDivider),
                      createVNode("div", { class: "flex-1" }),
                      createVNode(_component_UDashboardSidebarLinks, { links: footerLinks }),
                      createVNode(_component_UDivider, { class: "sticky bottom-0" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_HelpSlideover),
              createVNode(_component_NotificationsSlideover),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(_component_LazyUDashboardSearch, { groups })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B8IH1grY.mjs.map
