import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, c as __nuxt_component_5$1 } from './DashboardNavbar-BWbGc5-K.mjs';
import { m as mergeConfig, g as appConfig, f as __nuxt_component_0$2, h as useUI, i as useResizeObserver, j as _export_sfc, t as textarea, _ as __nuxt_component_1$1, k as __nuxt_component_2$1, l as looseToNumber, a as __nuxt_component_1$3 } from './server.mjs';
import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, toRef, nextTick, useId, useSSRContext, withAsyncContext, withCtx, unref, isRef, createVNode, openBlock, createBlock, resolveComponent, mergeProps, renderSlot, createCommentVNode, toDisplayString, renderList, createTextVNode, withModifiers } from 'vue';
import { f as f$1, u as u$1, O, o as o$2, A, T, i as i$5, s as s$1, N, a as s$3, b as u$4, c as o$1, d as T$1, t as t$2, e as i$3, P, g as N$1 } from './usePopper-C_2kou-4.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_0$5 } from './DashboardPanelContent-CWR_KFWL.mjs';
import { _ as __nuxt_component_2$2 } from './Chip-i0DPCWz-.mjs';
import { _ as __nuxt_component_6 } from './Divider-sGwVF3o1.mjs';
import { isToday, format } from 'date-fns';
import { d as defineShortcuts } from './defineShortcuts-Dh20htKv.mjs';
import { _ as __nuxt_component_0$1 } from './Tooltip-BpAT_8aW.mjs';
import { _ as __nuxt_component_0$3 } from './Popover-DYJ8gvLv.mjs';
import { _ as __nuxt_component_0$4 } from './Dropdown-DMBXpvvs.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { q as defu } from '../nitro/nitro.mjs';
import { u as useFormGroup } from './useFormGroup-CqsCLfTh.mjs';
import { u as useFetch } from './fetch-3sWffV1N.mjs';
import './client-only-1_rDmppN.mjs';
import './index-bOJEI7id.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@tanstack/vue-query';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import './Kbd-Yu76GohJ.mjs';
import './portal-CkOWSbPc.mjs';

const tabs = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-10",
    width: "w-full",
    marker: {
      wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm"
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-8",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: "",
      icon: "w-4 h-4 flex-shrink-0 me-2"
    }
  }
};
let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f$1, { as: "button", type: "button", features: u$1.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a = 50;
    function r() {
      var u2;
      if (a-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((s2) => (s2[s2.Forwards = 0] = "Forwards", s2[s2.Backwards = 1] = "Backwards", s2))(te || {}), le = ((d2) => (d2[d2.Less = -1] = "Less", d2[d2.Equal = 0] = "Equal", d2[d2.Greater = 1] = "Greater", d2))(le || {});
let U = Symbol("TabsContext");
function C(a) {
  let b = inject(U, null);
  if (b === null) {
    let s2 = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, C), s2;
  }
  return b;
}
let G = Symbol("TabsSSRContext"), me = defineComponent({ name: "TabGroup", emits: { change: (a) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a, { slots: b, attrs: s2, emit: d$1 }) {
  var E;
  let i2 = ref((E = a.selectedIndex) != null ? E : a.defaultIndex), l = ref([]), r = ref([]), p = computed(() => a.selectedIndex !== null), R = computed(() => p.value ? a.selectedIndex : i2.value);
  function y(t2) {
    var c;
    let n = O(u2.tabs.value, o$2), o$12 = O(u2.panels.value, o$2), e = n.filter((I) => {
      var m;
      return !((m = o$2(I)) != null && m.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > n.length - 1) {
      let I = u$4(i2.value === null ? 0 : Math.sign(t2 - i2.value), { [-1]: () => 1, [0]: () => u$4(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), m = u$4(I, { [0]: () => n.indexOf(e[0]), [1]: () => n.indexOf(e[e.length - 1]) });
      m !== -1 && (i2.value = m), u2.tabs.value = n, u2.panels.value = o$12;
    } else {
      let I = n.slice(0, t2), h2 = [...n.slice(t2), ...I].find((W) => e.includes(W));
      if (!h2) return;
      let O2 = (c = n.indexOf(h2)) != null ? c : u2.selectedIndex.value;
      O2 === -1 && (O2 = u2.selectedIndex.value), i2.value = O2, u2.tabs.value = n, u2.panels.value = o$12;
    }
  }
  let u2 = { selectedIndex: computed(() => {
    var t2, n;
    return (n = (t2 = i2.value) != null ? t2 : a.defaultIndex) != null ? n : null;
  }), orientation: computed(() => a.vertical ? "vertical" : "horizontal"), activation: computed(() => a.manual ? "manual" : "auto"), tabs: l, panels: r, setSelectedIndex(t2) {
    R.value !== t2 && d$1("change", t2), p.value || y(t2);
  }, registerTab(t2) {
    var o$12;
    if (l.value.includes(t2)) return;
    let n = l.value[i2.value];
    if (l.value.push(t2), l.value = O(l.value, o$2), !p.value) {
      let e = (o$12 = l.value.indexOf(n)) != null ? o$12 : i2.value;
      e !== -1 && (i2.value = e);
    }
  }, unregisterTab(t2) {
    let n = l.value.indexOf(t2);
    n !== -1 && l.value.splice(n, 1);
  }, registerPanel(t2) {
    r.value.includes(t2) || (r.value.push(t2), r.value = O(r.value, o$2));
  }, unregisterPanel(t2) {
    let n = r.value.indexOf(t2);
    n !== -1 && r.value.splice(n, 1);
  } };
  provide(U, u2);
  let T$12 = ref({ tabs: [], panels: [] }), x = ref(false);
  onMounted(() => {
    x.value = true;
  }), provide(G, computed(() => x.value ? null : T$12.value));
  let w = computed(() => a.selectedIndex);
  return onMounted(() => {
    watch([w], () => {
      var t2;
      return y((t2 = a.selectedIndex) != null ? t2 : a.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!p.value || R.value == null || u2.tabs.value.length <= 0) return;
    let t2 = O(u2.tabs.value, o$2);
    t2.some((o$12, e) => o$2(u2.tabs.value[e]) !== o$2(o$12)) && u2.setSelectedIndex(t2.findIndex((o$12) => o$2(o$12) === o$2(u2.tabs.value[R.value])));
  }), () => {
    let t2 = { selectedIndex: i2.value };
    return h(Fragment, [l.value.length <= 0 && h(d, { onFocus: () => {
      for (let n of l.value) {
        let o$12 = o$2(n);
        if ((o$12 == null ? void 0 : o$12.tabIndex) === 0) return o$12.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...s2, ...T(a, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: b, attrs: s2, name: "TabGroup" })]);
  };
} }), pe = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a, { attrs: b, slots: s2 }) {
  let d2 = C("TabList");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value }, l = { role: "tablist", "aria-orientation": d2.orientation.value };
    return A({ ourProps: l, theirProps: a, slot: i2, attrs: b, slots: s2, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a, { attrs: b, slots: s$12, expose: d2 }) {
  var o$2$1;
  let i$2 = (o$2$1 = a.id) != null ? o$2$1 : `headlessui-tabs-tab-${i$5()}`, l = C("Tab"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l.registerTab(r)), onUnmounted(() => l.unregisterTab(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let e = p.value.tabs.indexOf(i$2);
      return e === -1 ? p.value.tabs.push(i$2) - 1 : e;
    }
    return -1;
  }), y = computed(() => {
    let e = l.tabs.value.indexOf(r);
    return e === -1 ? R.value : e;
  }), u2 = computed(() => y.value === l.selectedIndex.value);
  function T2(e) {
    var I;
    let c = e();
    if (c === T$1.Success && l.activation.value === "auto") {
      let m = (I = i$3(r)) == null ? void 0 : I.activeElement, h2 = l.tabs.value.findIndex((O2) => o$2(O2) === m);
      h2 !== -1 && l.setSelectedIndex(h2);
    }
    return c;
  }
  function x(e) {
    let c = l.tabs.value.map((m) => o$2(m)).filter(Boolean);
    if (e.key === o$1.Space || e.key === o$1.Enter) {
      e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(y.value);
      return;
    }
    switch (e.key) {
      case o$1.Home:
      case o$1.PageUp:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.First));
      case o$1.End:
      case o$1.PageDown:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.Last));
    }
    if (T2(() => u$4(l.orientation.value, { vertical() {
      return e.key === o$1.ArrowUp ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o$1.ArrowDown ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e.key === o$1.ArrowLeft ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o$1.ArrowRight ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success) return e.preventDefault();
  }
  let w = ref(false);
  function E() {
    var e;
    w.value || (w.value = true, !a.disabled && ((e = o$2(r)) == null || e.focus({ preventScroll: true }), l.setSelectedIndex(y.value), t$2(() => {
      w.value = false;
    })));
  }
  function t$1(e) {
    e.preventDefault();
  }
  let n = s$1(computed(() => ({ as: a.as, type: b.type })), r);
  return () => {
    var m, h2;
    let e = { selected: u2.value, disabled: (m = a.disabled) != null ? m : false }, { ...c } = a, I = { ref: r, onKeydown: x, onMousedown: t$1, onClick: E, id: i$2, role: "tab", type: n.value, "aria-controls": (h2 = o$2(l.panels.value[y.value])) == null ? void 0 : h2.id, "aria-selected": u2.value, tabIndex: u2.value ? 0 : -1, disabled: a.disabled ? true : void 0 };
    return A({ ourProps: I, theirProps: c, slot: e, attrs: b, slots: s$12, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a, { slots: b, attrs: s2 }) {
  let d2 = C("TabPanels");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value };
    return A({ theirProps: a, ourProps: {}, slot: i2, attrs: s2, slots: b, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a, { attrs: b, slots: s2, expose: d2 }) {
  var T2;
  let i$12 = (T2 = a.id) != null ? T2 : `headlessui-tabs-panel-${i$5()}`, l = C("TabPanel"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l.registerPanel(r)), onUnmounted(() => l.unregisterPanel(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let x = p.value.panels.indexOf(i$12);
      return x === -1 ? p.value.panels.push(i$12) - 1 : x;
    }
    return -1;
  }), y = computed(() => {
    let x = l.panels.value.indexOf(r);
    return x === -1 ? R.value : x;
  }), u2 = computed(() => y.value === l.selectedIndex.value);
  return () => {
    var n;
    let x = { selected: u2.value }, { tabIndex: w, ...E } = a, t2 = { ref: r, id: i$12, role: "tabpanel", "aria-labelledby": (n = o$2(l.tabs.value[y.value])) == null ? void 0 : n.id, tabIndex: u2.value ? w : -1 };
    return !u2.value && a.unmount && !a.static ? h(f$1, { as: "span", "aria-hidden": true, ...t2 }) : A({ ourProps: t2, theirProps: E, slot: x, attrs: b, slots: s2, features: N.Static | N.RenderStrategy, visible: u2.value, name: "TabPanel" });
  };
} });
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tabs, tabs);
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2,
    HTabGroup: me,
    HTabList: pe,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    unmount: {
      type: Boolean,
      default: false
    },
    content: {
      type: Boolean,
      default: true
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
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("tabs", toRef(props, "ui"), config$1, toRef(props, "class"));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      if (!markerRef.value) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", selectedIndex.value);
      }
      calcMarkerSize(selectedIndex.value);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.items, async () => {
      await nextTick();
      calcMarkerSize(selectedIndex.value);
    }, { deep: true });
    s$3(() => useId("$8szo5BDGag"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      onChange
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_UIcon = __nuxt_component_0$2;
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button${ssrRenderAttr("aria-label", item.ariaLabel)} class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "icon", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        if (item.icon) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: item.icon,
                            class: _ctx.ui.list.tab.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      }, _push4, _parent4, _scopeId3);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          "aria-label": item.ariaLabel,
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "icon", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: item.icon,
                              class: _ctx.ui.list.tab.icon
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ]),
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                          ])
                        ], 10, ["aria-label"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        "aria-label": item.ariaLabel,
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "icon", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: _ctx.ui.list.tab.icon
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ]),
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                        ])
                      ], 10, ["aria-label"])
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        if (_ctx.content) {
          _push2(ssrRenderComponent(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (item, index) => {
                  _push3(ssrRenderComponent(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base,
                    unmount: _ctx.unmount
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => {
                          _push4(`${ssrInterpolate(item.content)}`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index,
                            selected
                          }, () => [
                            createTextVNode(toDisplayString(item.content), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    return openBlock(), createBlock(_component_HTabPanel, {
                      key: index,
                      class: _ctx.ui.base,
                      unmount: _ctx.unmount
                    }, {
                      default: withCtx(({ selected }) => [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "unmount"]);
                  }), 128))
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      "aria-label": item.ariaLabel,
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "icon", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: item.icon,
                          class: _ctx.ui.list.tab.icon
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                      ])
                    ], 10, ["aria-label"])
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          _ctx.content ? (openBlock(), createBlock(_component_HTabPanels, {
            key: 0,
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  unmount: _ctx.unmount
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "unmount"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.20.0_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@_zc6sjfyp4c7evy7q42zrsrclzy/node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "UTabs" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InboxList",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: null
    },
    mails: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const mailsRefs = ref([]);
    const selectedMail = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    watch(selectedMail, () => {
      if (!selectedMail.value) {
        return;
      }
      const ref2 = mailsRefs.value[selectedMail.value.id];
      if (ref2) {
        ref2.scrollIntoView({ block: "nearest" });
      }
    });
    defineShortcuts({
      arrowdown: () => {
        const index = props.mails.findIndex((mail) => {
          var _a;
          return mail.id === ((_a = selectedMail.value) == null ? void 0 : _a.id);
        });
        if (index === -1) {
          selectedMail.value = props.mails[0];
        } else if (index < props.mails.length - 1) {
          selectedMail.value = props.mails[index + 1];
        }
      },
      arrowup: () => {
        const index = props.mails.findIndex((mail) => {
          var _a;
          return mail.id === ((_a = selectedMail.value) == null ? void 0 : _a.id);
        });
        if (index === -1) {
          selectedMail.value = props.mails[props.mails.length - 1];
        } else if (index > 0) {
          selectedMail.value = props.mails[index - 1];
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelContent = __nuxt_component_0$5;
      const _component_UChip = __nuxt_component_2$2;
      const _component_UDivider = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UDashboardPanelContent, mergeProps({ class: "p-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.mails, (mail, index) => {
              _push2(`<div${_scopeId}><div class="${ssrRenderClass([[
                mail.unread ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300",
                unref(selectedMail) && unref(selectedMail).id === mail.id ? "border-primary-500 dark:border-primary-400 bg-primary-100 dark:bg-primary-900/25" : "border-white dark:border-gray-900 hover:border-primary-500/25 dark:hover:border-primary-400/25 hover:bg-primary-100/50 dark:hover:bg-primary-900/10"
              ], "p-4 text-sm cursor-pointer border-l-2"])}"${_scopeId}><div class="${ssrRenderClass([[mail.unread && "font-semibold"], "flex items-center justify-between"])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>${ssrInterpolate(mail.from.name)} `);
              if (mail.unread) {
                _push2(ssrRenderComponent(_component_UChip, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span${_scopeId}>${ssrInterpolate(unref(isToday)(new Date(mail.date)) ? unref(format)(new Date(mail.date), "HH:mm") : unref(format)(new Date(mail.date), "dd MMM"))}</span></div><p class="${ssrRenderClass([mail.unread && "font-semibold"])}"${_scopeId}>${ssrInterpolate(mail.subject)}</p><p class="text-gray-400 dark:text-gray-500 line-clamp-1"${_scopeId}>${ssrInterpolate(mail.body)}</p></div>`);
              _push2(ssrRenderComponent(_component_UDivider, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.mails, (mail, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  ref_for: true,
                  ref: (el) => {
                    unref(mailsRefs)[mail.id] = el;
                  }
                }, [
                  createVNode("div", {
                    class: ["p-4 text-sm cursor-pointer border-l-2", [
                      mail.unread ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300",
                      unref(selectedMail) && unref(selectedMail).id === mail.id ? "border-primary-500 dark:border-primary-400 bg-primary-100 dark:bg-primary-900/25" : "border-white dark:border-gray-900 hover:border-primary-500/25 dark:hover:border-primary-400/25 hover:bg-primary-100/50 dark:hover:bg-primary-900/10"
                    ]],
                    onClick: ($event) => selectedMail.value = mail
                  }, [
                    createVNode("div", {
                      class: ["flex items-center justify-between", [mail.unread && "font-semibold"]]
                    }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createTextVNode(toDisplayString(mail.from.name) + " ", 1),
                        mail.unread ? (openBlock(), createBlock(_component_UChip, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      createVNode("span", null, toDisplayString(unref(isToday)(new Date(mail.date)) ? unref(format)(new Date(mail.date), "HH:mm") : unref(format)(new Date(mail.date), "dd MMM")), 1)
                    ], 2),
                    createVNode("p", {
                      class: [mail.unread && "font-semibold"]
                    }, toDisplayString(mail.subject), 3),
                    createVNode("p", { class: "text-gray-400 dark:text-gray-500 line-clamp-1" }, toDisplayString(mail.body), 1)
                  ], 10, ["onClick"]),
                  createVNode(_component_UDivider)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inbox/InboxList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "InboxList" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    maxrows: {
      type: Number,
      default: 0
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
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
    textareaClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const textarea2 = ref(null);
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const overflow = textarea2.value.style.overflow;
        textarea2.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textarea2.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textarea2.value.style.overflow = overflow;
      }
    };
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number) {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value || (value = null);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      autoResize();
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      emit("change", value);
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const textareaClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: _ctx.textareaClass
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.20.0_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@_zc6sjfyp4c7evy7q42zrsrclzy/node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "UTextarea" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InboxMail",
  __ssrInlineRender: true,
  props: {
    mail: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelContent = __nuxt_component_0$5;
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_UDivider = __nuxt_component_6;
      const _component_UTextarea = __nuxt_component_3;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UDashboardPanelContent, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, mergeProps(__props.mail.from.avatar, {
              alt: __props.mail.from.name,
              size: "lg"
            }), null, _parent2, _scopeId));
            _push2(`<div class="min-w-0"${_scopeId}><p class="text-gray-900 dark:text-white font-semibold"${_scopeId}>${ssrInterpolate(__props.mail.from.name)}</p><p class="text-gray-500 dark:text-gray-400 font-medium"${_scopeId}>${ssrInterpolate(__props.mail.subject)}</p></div></div><p class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(isToday)(new Date(__props.mail.date)) ? unref(format)(new Date(__props.mail.date), "HH:mm") : unref(format)(new Date(__props.mail.date), "dd MMM"))}</p></div>`);
            _push2(ssrRenderComponent(_component_UDivider, { class: "my-5" }, null, _parent2, _scopeId));
            _push2(`<div class="flex-1"${_scopeId}><p class="text-lg"${_scopeId}>${ssrInterpolate(__props.mail.body)}</p></div>`);
            _push2(ssrRenderComponent(_component_UDivider, { class: "my-5" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              color: "gray",
              required: "",
              size: "xl",
              rows: 5,
              placeholder: `Reply to ${__props.mail.from.name}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "black",
                    label: "Send",
                    icon: "i-heroicons-paper-airplane",
                    class: "absolute bottom-2.5 right-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "black",
                      label: "Send",
                      icon: "i-heroicons-paper-airplane",
                      class: "absolute bottom-2.5 right-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode(_component_UAvatar, mergeProps(__props.mail.from.avatar, {
                    alt: __props.mail.from.name,
                    size: "lg"
                  }), null, 16, ["alt"]),
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("p", { class: "text-gray-900 dark:text-white font-semibold" }, toDisplayString(__props.mail.from.name), 1),
                    createVNode("p", { class: "text-gray-500 dark:text-gray-400 font-medium" }, toDisplayString(__props.mail.subject), 1)
                  ])
                ]),
                createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(unref(isToday)(new Date(__props.mail.date)) ? unref(format)(new Date(__props.mail.date), "HH:mm") : unref(format)(new Date(__props.mail.date), "dd MMM")), 1)
              ]),
              createVNode(_component_UDivider, { class: "my-5" }),
              createVNode("div", { class: "flex-1" }, [
                createVNode("p", { class: "text-lg" }, toDisplayString(__props.mail.body), 1)
              ]),
              createVNode(_component_UDivider, { class: "my-5" }),
              createVNode("form", {
                onSubmit: withModifiers(() => {
                }, ["prevent"])
              }, [
                createVNode(_component_UTextarea, {
                  color: "gray",
                  required: "",
                  size: "xl",
                  rows: 5,
                  placeholder: `Reply to ${__props.mail.from.name}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "black",
                      label: "Send",
                      icon: "i-heroicons-paper-airplane",
                      class: "absolute bottom-2.5 right-3.5"
                    })
                  ]),
                  _: 1
                }, 8, ["placeholder"])
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inbox/InboxMail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = Object.assign(_sfc_main$1, { __name: "InboxMail" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inbox",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const tabItems = [{
      label: "All"
    }, {
      label: "Unread"
    }];
    const selectedTab = ref(0);
    const dropdownItems = [[{
      label: "Mark as unread",
      icon: "i-heroicons-check-circle"
    }, {
      label: "Mark as important",
      icon: "i-heroicons-exclamation-circle"
    }], [{
      label: "Star thread",
      icon: "i-heroicons-star"
    }, {
      label: "Mute thread",
      icon: "i-heroicons-pause-circle"
    }]];
    const { data: mails } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/mails", { default: () => [] }, "$GNoEu4wE0N")), __temp = await __temp, __restore(), __temp);
    const filteredMails = computed(() => {
      if (selectedTab.value === 1) {
        return mails.value.filter((mail) => !!mail.unread);
      }
      return mails.value;
    });
    const selectedMail = ref();
    const isMailPanelOpen = computed({
      get() {
        return !!selectedMail.value;
      },
      set(value) {
        if (!value) {
          selectedMail.value = null;
        }
      }
    });
    watch(filteredMails, () => {
      if (!filteredMails.value.find((mail) => {
        var _a;
        return mail.id === ((_a = selectedMail.value) == null ? void 0 : _a.id);
      })) {
        selectedMail.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPage = __nuxt_component_0;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UTabs = __nuxt_component_3$1;
      const _component_InboxList = __nuxt_component_4;
      const _component_UDashboardNavbarToggle = __nuxt_component_5$1;
      const _component_UDivider = __nuxt_component_6;
      const _component_UTooltip = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UPopover = __nuxt_component_0$3;
      const _component_DatePicker = __nuxt_component_2$1;
      const _component_UDropdown = __nuxt_component_0$4;
      const _component_InboxMail = __nuxt_component_12;
      const _component_UIcon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_UDashboardPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, {
              id: "inbox",
              width: 400,
              resizable: { min: 300, max: 500 }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Inbox",
                    badge: unref(filteredMails).length
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTabs, {
                          modelValue: unref(selectedTab),
                          "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
                          items: tabItems,
                          ui: { wrapper: "", list: { height: "h-9", tab: { height: "h-7", size: "text-[13px]" } } }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTabs, {
                            modelValue: unref(selectedTab),
                            "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
                            items: tabItems,
                            ui: { wrapper: "", list: { height: "h-9", tab: { height: "h-7", size: "text-[13px]" } } }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InboxList, {
                    modelValue: unref(selectedMail),
                    "onUpdate:modelValue": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                    mails: unref(filteredMails)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      title: "Inbox",
                      badge: unref(filteredMails).length
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_UTabs, {
                          modelValue: unref(selectedTab),
                          "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
                          items: tabItems,
                          ui: { wrapper: "", list: { height: "h-9", tab: { height: "h-7", size: "text-[13px]" } } }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["badge"]),
                    createVNode(_component_InboxList, {
                      modelValue: unref(selectedMail),
                      "onUpdate:modelValue": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                      mails: unref(filteredMails)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "mails"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDashboardPanel, {
              modelValue: unref(isMailPanelOpen),
              "onUpdate:modelValue": ($event) => isRef(isMailPanelOpen) ? isMailPanelOpen.value = $event : null,
              collapsible: "",
              grow: "",
              side: "right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(selectedMail)) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UDashboardNavbar, null, {
                      toggle: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UDashboardNavbarToggle, { icon: "i-heroicons-x-mark" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5 lg:hidden"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UDashboardNavbarToggle, { icon: "i-heroicons-x-mark" }),
                            createVNode(_component_UDivider, {
                              orientation: "vertical",
                              class: "mx-1.5 lg:hidden"
                            })
                          ];
                        }
                      }),
                      left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Archive" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-archive-box",
                                  color: "gray",
                                  variant: "ghost"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-archive-box",
                                    color: "gray",
                                    variant: "ghost"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Move to junk" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-archive-box-x-mark",
                                  color: "gray",
                                  variant: "ghost"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-archive-box-x-mark",
                                    color: "gray",
                                    variant: "ghost"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                            default: withCtx(({ open }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UTooltip, {
                                  text: "Snooze",
                                  prevent: open
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UButton, {
                                        icon: "i-heroicons-clock",
                                        color: "gray",
                                        variant: "ghost",
                                        class: [open && "bg-gray-50 dark:bg-gray-800"]
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UButton, {
                                          icon: "i-heroicons-clock",
                                          color: "gray",
                                          variant: "ghost",
                                          class: [open && "bg-gray-50 dark:bg-gray-800"]
                                        }, null, 8, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UTooltip, {
                                    text: "Snooze",
                                    prevent: open
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UButton, {
                                        icon: "i-heroicons-clock",
                                        color: "gray",
                                        variant: "ghost",
                                        class: [open && "bg-gray-50 dark:bg-gray-800"]
                                      }, null, 8, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["prevent"])
                                ];
                              }
                            }),
                            panel: withCtx(({ close }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_DatePicker, { onClose: close }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_DatePicker, { onClose: close }, null, 8, ["onClose"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UTooltip, { text: "Archive" }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-archive-box",
                                  color: "gray",
                                  variant: "ghost"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UTooltip, { text: "Move to junk" }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-archive-box-x-mark",
                                  color: "gray",
                                  variant: "ghost"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UDivider, {
                              orientation: "vertical",
                              class: "mx-1.5"
                            }),
                            createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                              default: withCtx(({ open }) => [
                                createVNode(_component_UTooltip, {
                                  text: "Snooze",
                                  prevent: open
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UButton, {
                                      icon: "i-heroicons-clock",
                                      color: "gray",
                                      variant: "ghost",
                                      class: [open && "bg-gray-50 dark:bg-gray-800"]
                                    }, null, 8, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["prevent"])
                              ]),
                              panel: withCtx(({ close }) => [
                                createVNode(_component_DatePicker, { onClose: close }, null, 8, ["onClose"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Reply" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-arrow-uturn-left",
                                  color: "gray",
                                  variant: "ghost"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-arrow-uturn-left",
                                    color: "gray",
                                    variant: "ghost"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UTooltip, { text: "Forward" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-arrow-uturn-right",
                                  color: "gray",
                                  variant: "ghost"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-arrow-uturn-right",
                                    color: "gray",
                                    variant: "ghost"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UDropdown, { items: dropdownItems }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UButton, {
                                  icon: "i-heroicons-ellipsis-vertical",
                                  color: "gray",
                                  variant: "ghost"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-ellipsis-vertical",
                                    color: "gray",
                                    variant: "ghost"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UTooltip, { text: "Reply" }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-arrow-uturn-left",
                                  color: "gray",
                                  variant: "ghost"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UTooltip, { text: "Forward" }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-arrow-uturn-right",
                                  color: "gray",
                                  variant: "ghost"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UDivider, {
                              orientation: "vertical",
                              class: "mx-1.5"
                            }),
                            createVNode(_component_UDropdown, { items: dropdownItems }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-ellipsis-vertical",
                                  color: "gray",
                                  variant: "ghost"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_InboxMail, { mail: unref(selectedMail) }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<div class="flex-1 hidden lg:flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-inbox",
                      class: "w-32 h-32 text-gray-400 dark:text-gray-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    unref(selectedMail) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UDashboardNavbar, null, {
                        toggle: withCtx(() => [
                          createVNode(_component_UDashboardNavbarToggle, { icon: "i-heroicons-x-mark" }),
                          createVNode(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5 lg:hidden"
                          })
                        ]),
                        left: withCtx(() => [
                          createVNode(_component_UTooltip, { text: "Archive" }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-archive-box",
                                color: "gray",
                                variant: "ghost"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Move to junk" }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-archive-box-x-mark",
                                color: "gray",
                                variant: "ghost"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5"
                          }),
                          createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                            default: withCtx(({ open }) => [
                              createVNode(_component_UTooltip, {
                                text: "Snooze",
                                prevent: open
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UButton, {
                                    icon: "i-heroicons-clock",
                                    color: "gray",
                                    variant: "ghost",
                                    class: [open && "bg-gray-50 dark:bg-gray-800"]
                                  }, null, 8, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["prevent"])
                            ]),
                            panel: withCtx(({ close }) => [
                              createVNode(_component_DatePicker, { onClose: close }, null, 8, ["onClose"])
                            ]),
                            _: 1
                          })
                        ]),
                        right: withCtx(() => [
                          createVNode(_component_UTooltip, { text: "Reply" }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-arrow-uturn-left",
                                color: "gray",
                                variant: "ghost"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UTooltip, { text: "Forward" }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-arrow-uturn-right",
                                color: "gray",
                                variant: "ghost"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UDivider, {
                            orientation: "vertical",
                            class: "mx-1.5"
                          }),
                          createVNode(_component_UDropdown, { items: dropdownItems }, {
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-ellipsis-vertical",
                                color: "gray",
                                variant: "ghost"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_InboxMail, { mail: unref(selectedMail) }, null, 8, ["mail"])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex-1 hidden lg:flex items-center justify-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-inbox",
                        class: "w-32 h-32 text-gray-400 dark:text-gray-500"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardPanel, {
                id: "inbox",
                width: 400,
                resizable: { min: 300, max: 500 }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardNavbar, {
                    title: "Inbox",
                    badge: unref(filteredMails).length
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_UTabs, {
                        modelValue: unref(selectedTab),
                        "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
                        items: tabItems,
                        ui: { wrapper: "", list: { height: "h-9", tab: { height: "h-7", size: "text-[13px]" } } }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["badge"]),
                  createVNode(_component_InboxList, {
                    modelValue: unref(selectedMail),
                    "onUpdate:modelValue": ($event) => isRef(selectedMail) ? selectedMail.value = $event : null,
                    mails: unref(filteredMails)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "mails"])
                ]),
                _: 1
              }),
              createVNode(_component_UDashboardPanel, {
                modelValue: unref(isMailPanelOpen),
                "onUpdate:modelValue": ($event) => isRef(isMailPanelOpen) ? isMailPanelOpen.value = $event : null,
                collapsible: "",
                grow: "",
                side: "right"
              }, {
                default: withCtx(() => [
                  unref(selectedMail) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(_component_UDashboardNavbar, null, {
                      toggle: withCtx(() => [
                        createVNode(_component_UDashboardNavbarToggle, { icon: "i-heroicons-x-mark" }),
                        createVNode(_component_UDivider, {
                          orientation: "vertical",
                          class: "mx-1.5 lg:hidden"
                        })
                      ]),
                      left: withCtx(() => [
                        createVNode(_component_UTooltip, { text: "Archive" }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-archive-box",
                              color: "gray",
                              variant: "ghost"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "Move to junk" }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-archive-box-x-mark",
                              color: "gray",
                              variant: "ghost"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UDivider, {
                          orientation: "vertical",
                          class: "mx-1.5"
                        }),
                        createVNode(_component_UPopover, { popper: { placement: "bottom-start" } }, {
                          default: withCtx(({ open }) => [
                            createVNode(_component_UTooltip, {
                              text: "Snooze",
                              prevent: open
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-clock",
                                  color: "gray",
                                  variant: "ghost",
                                  class: [open && "bg-gray-50 dark:bg-gray-800"]
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["prevent"])
                          ]),
                          panel: withCtx(({ close }) => [
                            createVNode(_component_DatePicker, { onClose: close }, null, 8, ["onClose"])
                          ]),
                          _: 1
                        })
                      ]),
                      right: withCtx(() => [
                        createVNode(_component_UTooltip, { text: "Reply" }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-arrow-uturn-left",
                              color: "gray",
                              variant: "ghost"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UTooltip, { text: "Forward" }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-arrow-uturn-right",
                              color: "gray",
                              variant: "ghost"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UDivider, {
                          orientation: "vertical",
                          class: "mx-1.5"
                        }),
                        createVNode(_component_UDropdown, { items: dropdownItems }, {
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-ellipsis-vertical",
                              color: "gray",
                              variant: "ghost"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_InboxMail, { mail: unref(selectedMail) }, null, 8, ["mail"])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex-1 hidden lg:flex items-center justify-center"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-inbox",
                      class: "w-32 h-32 text-gray-400 dark:text-gray-500"
                    })
                  ]))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/inbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=inbox-BIeRnGpi.mjs.map
