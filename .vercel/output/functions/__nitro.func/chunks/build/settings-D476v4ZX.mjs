import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { b as __nuxt_component_5, _ as __nuxt_component_1, a as __nuxt_component_2 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_5$1 } from './DashboardToolbar-cILmmzL4.mjs';
import { m as mergeConfig, g as appConfig, f as __nuxt_component_0$2, a as __nuxt_component_1$3, p as __nuxt_component_1$2, h as useUI, q as getULinkProps, j as _export_sfc, r as __nuxt_component_5$2 } from './server.mjs';
import { defineComponent, toRef, computed, useSSRContext, withCtx, createVNode, mergeProps, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import './client-only-1_rDmppN.mjs';
import './index-bOJEI7id.mjs';
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

const horizontalNavigation = {
  wrapper: "relative w-full flex items-center justify-between",
  container: "flex items-center min-w-0",
  inner: "min-w-0",
  base: "group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",
  before: "before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
  after: "after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",
  active: "text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",
  inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
  label: "truncate relative",
  icon: {
    base: "flex-shrink-0 w-5 h-5 relative",
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  badge: {
    base: "flex-shrink-0 ms-auto relative rounded",
    color: "gray",
    variant: "solid",
    size: "xs"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.horizontalNavigation, horizontalNavigation);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$2,
    UAvatar: __nuxt_component_1$3,
    UBadge: __nuxt_component_5,
    ULink: __nuxt_component_1$2
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const { ui, attrs } = useUI("horizontalNavigation", toRef(props, "ui"), config, toRef(props, "class"));
    const sections = computed(() => Array.isArray(props.links[0]) ? props.links : [props.links]);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      sections,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_1$2;
  const _component_UAvatar = __nuxt_component_1$3;
  const _component_UIcon = __nuxt_component_0$2;
  const _component_UBadge = __nuxt_component_5;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.sections, (section, sectionIndex) => {
    _push(`<ul class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
    ssrRenderList(section, (link, index) => {
      _push(`<li class="${ssrRenderClass(_ctx.ui.inner)}">`);
      _push(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, _ctx.getULinkProps(link), {
        class: [_ctx.ui.base, _ctx.ui.before, _ctx.ui.after],
        "active-class": _ctx.ui.active,
        "inactive-class": _ctx.ui.inactive,
        onClick: link.click,
        onKeyup: ($event) => $event.target.blur()
      }), {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => {
              if (link.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => {
              if (link.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => {
              if (link.label) {
                _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>`);
                if (isActive) {
                  _push2(`<span class="sr-only"${_scopeId}> Current page: </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => {
              if (link.badge) {
                _push2(ssrRenderComponent(_component_UBadge, mergeProps({ ref_for: true }, {
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {
                link,
                isActive
              }, () => [
                link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                  key: 0,
                  ref_for: true
                }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "icon", {
                link,
                isActive
              }, () => [
                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {
                link,
                isActive
              }, () => [
                link.label ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
                }, [
                  isActive ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "sr-only"
                  }, " Current page: ")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.label), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "badge", {
                link,
                isActive
              }, () => [
                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                  key: 0,
                  ref_for: true
                }, {
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@2.20.0_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.11_@_zc6sjfyp4c7evy7q42zrsrclzy/node_modules/@nuxt/ui/dist/runtime/components/navigation/HorizontalNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "UHorizontalNavigation" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [[{
      label: "General",
      icon: "i-heroicons-user-circle",
      to: "/settings",
      exact: true
    }, {
      label: "Admins",
      icon: "i-heroicons-user-group",
      to: "/settings/members"
    }, {
      label: "Notifications",
      icon: "i-heroicons-bell",
      to: "/settings/notifications"
    }], []];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPage = __nuxt_component_0;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UDashboardToolbar = __nuxt_component_5$1;
      const _component_UHorizontalNavigation = __nuxt_component_4;
      const _component_NuxtPage = __nuxt_component_5$2;
      _push(ssrRenderComponent(_component_UDashboardPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, { title: "Settings" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardToolbar, { class: "py-0 px-1.5 overflow-x-auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UHorizontalNavigation, { links }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UHorizontalNavigation, { links })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, { title: "Settings" }),
                    createVNode(_component_UDashboardToolbar, { class: "py-0 px-1.5 overflow-x-auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_UHorizontalNavigation, { links })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardPanel, { grow: "" }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardNavbar, { title: "Settings" }),
                  createVNode(_component_UDashboardToolbar, { class: "py-0 px-1.5 overflow-x-auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_UHorizontalNavigation, { links })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-D476v4ZX.mjs.map
