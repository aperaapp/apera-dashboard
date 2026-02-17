import { _ as __nuxt_component_0$1 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_5$1 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_0$3 } from './Popover-DYJ8gvLv.mjs';
import { h as useUI, u as useSupabaseClient, _ as __nuxt_component_1$1, k as __nuxt_component_2$1, f as __nuxt_component_0$2$1, n as __nuxt_component_1$5, c as __nuxt_component_10 } from './server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, isRef, createVNode, useModel, mergeProps, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeModels, computed, watch, useSlots, toRef, createSlots, renderSlot, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { sub, format, eachDayOfInterval, isSameDay } from 'date-fns';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_0$2 } from './DashboardPanelContent-CWR_KFWL.mjs';
import { _ as __nuxt_component_0$4 } from './Card-B4YJjzl5.mjs';
import { twMerge } from 'tailwind-merge';
import { _ as __nuxt_component_2$2, a as __nuxt_component_3 } from './ErrorCard-CuXRrSP8.mjs';
import { useQuery } from '@tanstack/vue-query';
import { u as useDashboard } from './useDashboard-CHyEyBSu.mjs';
import './client-only-1_rDmppN.mjs';
import './index-bOJEI7id.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import './portal-CkOWSbPc.mjs';
import './usePopper-C_2kou-4.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './useFormGroup-CqsCLfTh.mjs';
import './defineShortcuts-Dh20htKv.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeDateRangePicker",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: Object,
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const ranges = [
      { label: "Last 7 days", duration: { days: 7 } },
      { label: "Last 14 days", duration: { days: 14 } },
      { label: "Last 30 days", duration: { days: 30 } },
      { label: "Last 3 months", duration: { months: 3 } },
      { label: "Last 6 months", duration: { months: 6 } },
      { label: "Last year", duration: { years: 1 } }
    ];
    const selected = useModel(__props, "modelValue");
    function isRangeSelected(duration) {
      return isSameDay(selected.value.start, sub(/* @__PURE__ */ new Date(), duration)) && isSameDay(selected.value.end, /* @__PURE__ */ new Date());
    }
    function selectRange(duration) {
      selected.value = { start: sub(/* @__PURE__ */ new Date(), duration), end: /* @__PURE__ */ new Date() };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPopover = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_1$1;
      const _component_DatePicker = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UPopover, mergeProps({ popper: { placement: "bottom-start" } }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "gray",
              variant: "ghost",
              class: [open && "bg-gray-50 dark:bg-gray-800"],
              "trailing-icon": "i-heroicons-chevron-down-20-solid"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(format)(selected.value.start, "d MMM, yyy"))} - ${ssrInterpolate(unref(format)(selected.value.end, "d MMM, yyy"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(format)(selected.value.start, "d MMM, yyy")) + " - " + toDisplayString(unref(format)(selected.value.end, "d MMM, yyy")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "gray",
                variant: "ghost",
                class: [open && "bg-gray-50 dark:bg-gray-800"],
                "trailing-icon": "i-heroicons-chevron-down-20-solid"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(format)(selected.value.start, "d MMM, yyy")) + " - " + toDisplayString(unref(format)(selected.value.end, "d MMM, yyy")), 1)
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        panel: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800"${_scopeId}><div class="hidden sm:flex flex-col py-4"${_scopeId}><!--[-->`);
            ssrRenderList(ranges, (range, index) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: index,
                label: range.label,
                color: "gray",
                variant: "ghost",
                class: ["rounded-none px-6", [isRangeSelected(range.duration) ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"]],
                truncate: "",
                onClick: ($event) => selectRange(range.duration)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_DatePicker, {
              modelValue: selected.value,
              "onUpdate:modelValue": ($event) => selected.value = $event,
              onClose: close
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800" }, [
                createVNode("div", { class: "hidden sm:flex flex-col py-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(ranges, (range, index) => {
                    return createVNode(_component_UButton, {
                      key: index,
                      label: range.label,
                      color: "gray",
                      variant: "ghost",
                      class: ["rounded-none px-6", [isRangeSelected(range.duration) ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"]],
                      truncate: "",
                      onClick: ($event) => selectRange(range.duration)
                    }, null, 8, ["label", "class", "onClick"]);
                  }), 64))
                ]),
                createVNode(_component_DatePicker, {
                  modelValue: selected.value,
                  "onUpdate:modelValue": ($event) => selected.value = $event,
                  onClose: close
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeDateRangePicker.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$4, { __name: "HomeDateRangePicker" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomePeriodSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    range: {
      type: Object,
      required: true
    }
  }, {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const days = computed(() => eachDayOfInterval(props.range));
    const periods = computed(() => {
      if (days.value.length <= 8) {
        return [
          "daily"
        ];
      }
      if (days.value.length <= 31) {
        return [
          "daily",
          "weekly"
        ];
      }
      return [
        "weekly",
        "monthly"
      ];
    });
    watch(periods, () => {
      if (!periods.value.includes(model.value)) {
        model.value = periods.value[0];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_USelectMenu, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        options: unref(periods),
        "ui-menu": { width: "w-32", option: { base: "capitalize" } },
        popper: { placement: "bottom-start" }
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: model.value,
              color: "gray",
              variant: "ghost",
              class: ["capitalize", [open && "bg-gray-50 dark:bg-gray-800"]],
              "trailing-icon": "i-heroicons-chevron-down-20-solid"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: model.value,
                color: "gray",
                variant: "ghost",
                class: ["capitalize", [open && "bg-gray-50 dark:bg-gray-800"]],
                "trailing-icon": "i-heroicons-chevron-down-20-solid"
              }, null, 8, ["label", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomePeriodSelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "HomePeriodSelect" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DashboardCard",
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
    const slots = useSlots();
    const config = computed(() => ({
      wrapper: "",
      divide: "",
      header: {
        base: "flex flex-wrap items-center justify-between gap-2",
        inner: "flex items-start gap-4",
        padding: twMerge("px-4 py-4 sm:px-6", slots.default || slots.footer ? "pb-0" : void 0)
      },
      title: "text-gray-900 dark:text-white font-semibold",
      description: "mt-1 text-gray-500 dark:text-gray-400 text-sm",
      links: "flex flex-wrap items-center gap-1.5",
      icon: {
        wrapper: "inline-flex",
        base: "w-12 h-12 flex-shrink-0 text-gray-900 dark:text-white"
      }
    }));
    const props = __props;
    const { ui, attrs } = useUI("dashboard.card", toRef(props, "ui"), config, toRef(props, "class"), true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$4;
      const _component_UIcon = __nuxt_component_0$2$1;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        ui: unref(ui),
        class: unref(ui).wrapper
      }, unref(attrs), _attrs), createSlots({ _: 2 }, [
        _ctx.$slots.header || (__props.icon || _ctx.$slots.icon) || (__props.title || _ctx.$slots.title) || (__props.description || _ctx.$slots.description) ? {
          name: "header",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a;
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
                  _push2(`<div class="${ssrRenderClass(unref(ui).description)}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                    _push2(`${ssrInterpolate(__props.description)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
                if (((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links) {
                  _push2(`<div class="${ssrRenderClass(unref(ui).links)}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                    _push2(`<!--[-->`);
                    ssrRenderList(__props.links, (link, index) => {
                      _push2(ssrRenderComponent(_component_UButton, mergeProps({
                        key: index,
                        ref_for: true
                      }, link, {
                        onClick: link.click
                      }), null, _parent2, _scopeId));
                    });
                    _push2(`<!--]-->`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "header", {}, () => {
                  var _a;
                  return [
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
                        __props.description || _ctx.$slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: unref(ui).description
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ], 2),
                    ((_a = __props.links) == null ? void 0 : _a.length) || _ctx.$slots.links ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: unref(ui).links
                    }, [
                      renderSlot(_ctx.$slots, "links", {}, () => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link, index) => {
                          return openBlock(), createBlock(_component_UButton, mergeProps({
                            key: index,
                            ref_for: true
                          }, link, {
                            onClick: link.click
                          }), null, 16, ["onClick"]);
                        }), 128))
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ];
                })
              ];
            }
          }),
          key: "0"
        } : void 0,
        _ctx.$slots.default ? {
          name: "default",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          key: "1"
        } : void 0,
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "footer")
              ];
            }
          }),
          key: "2"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/dashboard/DashboardCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UDashboardCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeSales",
  __ssrInlineRender: true,
  setup(__props) {
    const formatNumber = new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format;
    const client = useSupabaseClient();
    const { isLoading: isLoadingPayouts, data: payouts, error: payoutsError } = useQuery({
      queryKey: ["payouts", "preview"],
      queryFn: async () => {
        const { data, error } = await client.from("payouts_view").select().order("created_at", { ascending: false });
        console.log({ data, error });
        if (error) {
          throw error;
        }
        if (!data) {
          throw new Error("No data returned");
        }
        return data;
      }
    });
    const summaryMessage = computed(() => {
      if (!payouts.value) {
        return "";
      } else {
        const totalAmountSales = payouts.value.reduce((previous, current) => {
          return previous + current.wk_fee + current.bs_fee;
        }, 0);
        return `${totalAmountSales}$ made in ${payouts.value.length} sale${payouts.value.length === 0 ? "" : "s"}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardCard = __nuxt_component_0;
      const _component_USkeleton = __nuxt_component_2$2;
      const _component_ErrorCard = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_1$5;
      const _component_Icon = __nuxt_component_10;
      _push(ssrRenderComponent(_component_UDashboardCard, mergeProps({
        title: "Sales",
        description: unref(summaryMessage),
        icon: "i-heroicons-banknotes"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLoadingPayouts)) {
              _push2(ssrRenderComponent(_component_USkeleton, {
                class: "h-full w-full min-h-[100px]",
                ui: { rounded: "rounded-xl" }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(payoutsError)) {
              _push2(ssrRenderComponent(_component_ErrorCard, {
                title: "Error fetching payouts",
                message: unref(payoutsError).message
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(payouts)) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(payouts), (payout) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: payout.id,
                  class: "px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="pa-2 size-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "i-heroicons-currency-dollar",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="text-sm flex-1"${_scopeId2}><div${_scopeId2}><p class="text-gray-900 dark:text-white font-medium"${_scopeId2}>${ssrInterpolate(new Date(payout.created_at).toDateString())}</p><div class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, { name: "i-heroicons-user" }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(payout.worker_name)}</span></div><div class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, { name: "i-heroicons-building-storefront" }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(payout.business_name)}</span></div></div></div><p class="text-gray-900 dark:text-white font-medium text-lg"${_scopeId2}>${ssrInterpolate(unref(formatNumber)(payout.wk_fee + payout.bs_fee))}</p>`);
                    } else {
                      return [
                        createVNode("div", { class: "pa-2 size-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5" }, [
                          createVNode(_component_Icon, {
                            name: "i-heroicons-currency-dollar",
                            class: "size-5"
                          })
                        ]),
                        createVNode("div", { class: "text-sm flex-1" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(new Date(payout.created_at).toDateString()), 1),
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              createVNode(_component_Icon, { name: "i-heroicons-user" }),
                              createVNode("span", null, toDisplayString(payout.worker_name), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              createVNode(_component_Icon, { name: "i-heroicons-building-storefront" }),
                              createVNode("span", null, toDisplayString(payout.business_name), 1)
                            ])
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium text-lg" }, toDisplayString(unref(formatNumber)(payout.wk_fee + payout.bs_fee)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(isLoadingPayouts) ? (openBlock(), createBlock(_component_USkeleton, {
                key: 0,
                class: "h-full w-full min-h-[100px]",
                ui: { rounded: "rounded-xl" }
              })) : createCommentVNode("", true),
              unref(payoutsError) ? (openBlock(), createBlock(_component_ErrorCard, {
                key: 1,
                title: "Error fetching payouts",
                message: unref(payoutsError).message
              }, null, 8, ["message"])) : createCommentVNode("", true),
              unref(payouts) ? (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(unref(payouts), (payout) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: payout.id,
                  class: "px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pa-2 size-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5" }, [
                      createVNode(_component_Icon, {
                        name: "i-heroicons-currency-dollar",
                        class: "size-5"
                      })
                    ]),
                    createVNode("div", { class: "text-sm flex-1" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(new Date(payout.created_at).toDateString()), 1),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode(_component_Icon, { name: "i-heroicons-user" }),
                          createVNode("span", null, toDisplayString(payout.worker_name), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode(_component_Icon, { name: "i-heroicons-building-storefront" }),
                          createVNode("span", null, toDisplayString(payout.business_name), 1)
                        ])
                      ])
                    ]),
                    createVNode("p", { class: "text-gray-900 dark:text-white font-medium text-lg" }, toDisplayString(unref(formatNumber)(payout.wk_fee + payout.bs_fee)), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeSales.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "HomeSales" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDashboard();
    const range = ref({
      start: sub(/* @__PURE__ */ new Date(), { days: 14 }),
      end: /* @__PURE__ */ new Date()
    });
    const period = ref("daily");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPage = __nuxt_component_0$1;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UDashboardToolbar = __nuxt_component_5$1;
      const _component_HomeDateRangePicker = __nuxt_component_4;
      const _component_HomePeriodSelect = __nuxt_component_5;
      const _component_UDashboardPanelContent = __nuxt_component_0$2;
      const _component_HomeSales = __nuxt_component_7;
      _push(ssrRenderComponent(_component_UDashboardPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, { title: "Home" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardToolbar, null, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_HomeDateRangePicker, {
                          modelValue: unref(range),
                          "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                          class: "-ml-2.5"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_HomePeriodSelect, {
                          modelValue: unref(period),
                          "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                          range: unref(range)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_HomeDateRangePicker, {
                            modelValue: unref(range),
                            "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                            class: "-ml-2.5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_HomePeriodSelect, {
                            modelValue: unref(period),
                            "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                            range: unref(range)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "range"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardPanelContent, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_HomeSales, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid lg:grid-cols-2 lg:items-start gap-8 mt-8" }, [
                            createVNode(_component_HomeSales)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, { title: "Home" }),
                    createVNode(_component_UDashboardToolbar, null, {
                      left: withCtx(() => [
                        createVNode(_component_HomeDateRangePicker, {
                          modelValue: unref(range),
                          "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                          class: "-ml-2.5"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_HomePeriodSelect, {
                          modelValue: unref(period),
                          "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                          range: unref(range)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "range"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UDashboardPanelContent, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid lg:grid-cols-2 lg:items-start gap-8 mt-8" }, [
                          createVNode(_component_HomeSales)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardPanel, { grow: "" }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardNavbar, { title: "Home" }),
                  createVNode(_component_UDashboardToolbar, null, {
                    left: withCtx(() => [
                      createVNode(_component_HomeDateRangePicker, {
                        modelValue: unref(range),
                        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
                        class: "-ml-2.5"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_HomePeriodSelect, {
                        modelValue: unref(period),
                        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
                        range: unref(range)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "range"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UDashboardPanelContent, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid lg:grid-cols-2 lg:items-start gap-8 mt-8" }, [
                        createVNode(_component_HomeSales)
                      ])
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BTlYr7J2.mjs.map
