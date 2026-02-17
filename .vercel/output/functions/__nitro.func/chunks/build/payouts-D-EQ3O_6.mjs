import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_2$1 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$2 } from './Kbd-Yu76GohJ.mjs';
import { _ as __nuxt_component_5 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_7 } from './Table-D01mTn5O.mjs';
import { _ as __nuxt_component_0$1 } from './Tooltip-BpAT_8aW.mjs';
import { _ as __nuxt_component_0$2 } from './Slideover-CEHaOStU.mjs';
import { u as useSupabaseClient, d as useAsyncData, _ as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_11 } from './PayoutCard-DhdZ0nCY.mjs';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, withKeys, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as defineShortcuts } from './defineShortcuts-Dh20htKv.mjs';
import 'tailwind-merge';
import './client-only-1_rDmppN.mjs';
import './index-bOJEI7id.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import './useFormGroup-CqsCLfTh.mjs';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './usePopper-C_2kou-4.mjs';
import './transition-BOGEnzeo.mjs';
import './portal-CkOWSbPc.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@tanstack/vue-query';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './ListItem-Dn8NVO1F.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "payouts",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const defaultColumns = [
      {
        key: "id",
        label: "#"
      },
      {
        key: "created_at",
        label: "Date",
        sortable: true
      },
      {
        key: "business_name",
        label: "Business",
        sortable: true
      },
      {
        key: "worker_name",
        label: "Worker",
        sortable: true
      },
      {
        key: "bs_amount",
        label: "Business Payment",
        sortable: true
      },
      {
        key: "wk_amount",
        label: "Worker Payment",
        sortable: true
      }
    ];
    const q = ref("");
    ref([]);
    const selectedColumns = ref(defaultColumns);
    const selectedBusiness = ref();
    const selectedWorker = ref();
    const sort = ref({ column: "id", direction: "asc" });
    const input = ref();
    const columns = computed(
      () => defaultColumns.filter((column) => selectedColumns.value.includes(column))
    );
    const client = useSupabaseClient();
    const { data: payouts, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("payouts", async () => {
      const { data } = await client.from("payouts_view").select().order("created_at", { ascending: true });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const filterSorted = computed(() => {
      return payouts.value.filter((payout) => {
        console.log(q.value);
        if (!q.value) return true;
        return payout.business_name.search(new RegExp(q.value, "i")) !== -1 || payout.worker_name.search(new RegExp(q.value, "i")) !== -1;
      }).filter((payout) => {
        if (!selectedBusiness.value) return true;
        return selectedBusiness.value === payout.business_name;
      }).filter((payout) => {
        if (!selectedWorker.value) return true;
        return selectedWorker.value === payout.worker_name;
      }).sort((a, b) => {
        if (!sort.value.column) return 0;
        const aValue = a[sort.value.column];
        const bValue = b[sort.value.column];
        if (aValue < bValue) return sort.value.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.value.direction === "asc" ? 1 : -1;
        return 0;
      });
    });
    const defaultBusinesses = payouts.value.reduce((acc, payout) => {
      if (!acc.includes(payout.business_name)) {
        acc.push(payout.business_name);
      }
      return acc;
    }, []);
    const defaultWorkers = payouts.value.reduce((acc, payout) => {
      if (!acc.includes(payout.worker_name)) {
        acc.push(payout.worker_name);
      }
      return acc;
    }, []);
    defineShortcuts({
      "/": () => {
        var _a, _b;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.focus();
      }
    });
    const selectedPayout = ref(null);
    const showPayoutDetails = ref(false);
    function onSelectRow(row) {
      selectedPayout.value = row;
      showPayoutDetails.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPage = __nuxt_component_0;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UKbd = __nuxt_component_2$2;
      const _component_UDashboardToolbar = __nuxt_component_5;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UTable = __nuxt_component_7;
      const _component_UTooltip = __nuxt_component_0$1;
      const _component_USlideover = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$1;
      const _component_PayoutCard = __nuxt_component_11;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UDashboardPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Workers",
                    badge: unref(payouts).length
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          ref_key: "input",
                          ref: input,
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-funnel",
                          autocomplete: "off",
                          placeholder: "Filter Payouts...",
                          class: "hidden lg:block",
                          onKeydown: ($event) => $event.target.blur()
                        }, {
                          trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UKbd, { value: "/" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UKbd, { value: "/" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            ref_key: "input",
                            ref: input,
                            modelValue: unref(q),
                            "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                            icon: "i-heroicons-funnel",
                            autocomplete: "off",
                            placeholder: "Filter Payouts...",
                            class: "hidden lg:block",
                            onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UKbd, { value: "/" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardToolbar, null, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(selectedBusiness),
                          "onUpdate:modelValue": ($event) => isRef(selectedBusiness) ? selectedBusiness.value = $event : null,
                          icon: "i-heroicons-building-office",
                          placeholder: "Business",
                          options: unref(defaultBusinesses),
                          "ui-menu": { option: { base: "capitalize" } }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(selectedWorker),
                          "onUpdate:modelValue": ($event) => isRef(selectedWorker) ? selectedWorker.value = $event : null,
                          icon: "i-heroicons-user",
                          placeholder: "Workers",
                          options: unref(defaultWorkers)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(selectedBusiness),
                            "onUpdate:modelValue": ($event) => isRef(selectedBusiness) ? selectedBusiness.value = $event : null,
                            icon: "i-heroicons-building-office",
                            placeholder: "Business",
                            options: unref(defaultBusinesses),
                            "ui-menu": { option: { base: "capitalize" } }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(selectedWorker),
                            "onUpdate:modelValue": ($event) => isRef(selectedWorker) ? selectedWorker.value = $event : null,
                            icon: "i-heroicons-user",
                            placeholder: "Workers",
                            options: unref(defaultWorkers)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ];
                      }
                    }),
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(selectedColumns),
                          "onUpdate:modelValue": ($event) => isRef(selectedColumns) ? selectedColumns.value = $event : null,
                          icon: "i-heroicons-adjustments-horizontal-solid",
                          options: defaultColumns,
                          multiple: "",
                          class: "hidden lg:block"
                        }, {
                          label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Show Columns `);
                            } else {
                              return [
                                createTextVNode(" Show Columns ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(selectedColumns),
                            "onUpdate:modelValue": ($event) => isRef(selectedColumns) ? selectedColumns.value = $event : null,
                            icon: "i-heroicons-adjustments-horizontal-solid",
                            options: defaultColumns,
                            multiple: "",
                            class: "hidden lg:block"
                          }, {
                            label: withCtx(() => [
                              createTextVNode(" Show Columns ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTable, {
                    sort: unref(sort),
                    "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                    rows: unref(filterSorted),
                    columns: unref(columns),
                    "sort-mode": "manual",
                    class: "w-full",
                    ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                    onSelect: onSelectRow
                  }, {
                    "id-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UTooltip, {
                          text: row.id
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-gray-900 dark:text-white font-medium"${_scopeId4}>${ssrInterpolate(row.id.slice(0, 3))}...</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.id.slice(0, 3)) + "...", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(_component_UTooltip, {
                              text: row.id
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.id.slice(0, 3)) + "...", 1)
                              ]),
                              _: 2
                            }, 1032, ["text"])
                          ])
                        ];
                      }
                    }),
                    "created_at-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-gray-900 dark:text-white font-medium"${_scopeId3}>${ssrInterpolate(new Date(row.created_at).toLocaleDateString())}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(new Date(row.created_at).toLocaleDateString()), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      title: "Workers",
                      badge: unref(payouts).length
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_UInput, {
                          ref_key: "input",
                          ref: input,
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-funnel",
                          autocomplete: "off",
                          placeholder: "Filter Payouts...",
                          class: "hidden lg:block",
                          onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UKbd, { value: "/" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                      ]),
                      _: 1
                    }, 8, ["badge"]),
                    createVNode(_component_UDashboardToolbar, null, {
                      left: withCtx(() => [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(selectedBusiness),
                          "onUpdate:modelValue": ($event) => isRef(selectedBusiness) ? selectedBusiness.value = $event : null,
                          icon: "i-heroicons-building-office",
                          placeholder: "Business",
                          options: unref(defaultBusinesses),
                          "ui-menu": { option: { base: "capitalize" } }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(selectedWorker),
                          "onUpdate:modelValue": ($event) => isRef(selectedWorker) ? selectedWorker.value = $event : null,
                          icon: "i-heroicons-user",
                          placeholder: "Workers",
                          options: unref(defaultWorkers)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      right: withCtx(() => [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(selectedColumns),
                          "onUpdate:modelValue": ($event) => isRef(selectedColumns) ? selectedColumns.value = $event : null,
                          icon: "i-heroicons-adjustments-horizontal-solid",
                          options: defaultColumns,
                          multiple: "",
                          class: "hidden lg:block"
                        }, {
                          label: withCtx(() => [
                            createTextVNode(" Show Columns ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTable, {
                      sort: unref(sort),
                      "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                      rows: unref(filterSorted),
                      columns: unref(columns),
                      "sort-mode": "manual",
                      class: "w-full",
                      ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                      onSelect: onSelectRow
                    }, {
                      "id-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_UTooltip, {
                            text: row.id
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.id.slice(0, 3)) + "...", 1)
                            ]),
                            _: 2
                          }, 1032, ["text"])
                        ])
                      ]),
                      "created_at-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(new Date(row.created_at).toLocaleDateString()), 1)
                      ]),
                      _: 1
                    }, 8, ["sort", "onUpdate:sort", "rows", "columns"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardPanel, { grow: "" }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardNavbar, {
                    title: "Workers",
                    badge: unref(payouts).length
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_UInput, {
                        ref_key: "input",
                        ref: input,
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        icon: "i-heroicons-funnel",
                        autocomplete: "off",
                        placeholder: "Filter Payouts...",
                        class: "hidden lg:block",
                        onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                      }, {
                        trailing: withCtx(() => [
                          createVNode(_component_UKbd, { value: "/" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"])
                    ]),
                    _: 1
                  }, 8, ["badge"]),
                  createVNode(_component_UDashboardToolbar, null, {
                    left: withCtx(() => [
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(selectedBusiness),
                        "onUpdate:modelValue": ($event) => isRef(selectedBusiness) ? selectedBusiness.value = $event : null,
                        icon: "i-heroicons-building-office",
                        placeholder: "Business",
                        options: unref(defaultBusinesses),
                        "ui-menu": { option: { base: "capitalize" } }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(selectedWorker),
                        "onUpdate:modelValue": ($event) => isRef(selectedWorker) ? selectedWorker.value = $event : null,
                        icon: "i-heroicons-user",
                        placeholder: "Workers",
                        options: unref(defaultWorkers)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    right: withCtx(() => [
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(selectedColumns),
                        "onUpdate:modelValue": ($event) => isRef(selectedColumns) ? selectedColumns.value = $event : null,
                        icon: "i-heroicons-adjustments-horizontal-solid",
                        options: defaultColumns,
                        multiple: "",
                        class: "hidden lg:block"
                      }, {
                        label: withCtx(() => [
                          createTextVNode(" Show Columns ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UTable, {
                    sort: unref(sort),
                    "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                    rows: unref(filterSorted),
                    columns: unref(columns),
                    "sort-mode": "manual",
                    class: "w-full",
                    ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                    onSelect: onSelectRow
                  }, {
                    "id-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UTooltip, {
                          text: row.id
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.id.slice(0, 3)) + "...", 1)
                          ]),
                          _: 2
                        }, 1032, ["text"])
                      ])
                    ]),
                    "created_at-data": withCtx(({ row }) => [
                      createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(new Date(row.created_at).toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }, 8, ["sort", "onUpdate:sort", "rows", "columns"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(showPayoutDetails),
        "onUpdate:modelValue": ($event) => isRef(showPayoutDetails) ? showPayoutDetails.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "gray",
              variant: "ghost",
              size: "sm",
              icon: "i-heroicons-x-mark-20-solid",
              class: "flex sm:hidden absolute end-5 top-5 z-10",
              square: "",
              padded: "",
              onClick: () => {
                console.log("Closing popover");
                showPayoutDetails.value = null;
                showPayoutDetails.value = false;
              },
              label: "Close"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PayoutCard, { payout: unref(selectedPayout) }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-screen" }, [
                createVNode(_component_UButton, {
                  color: "gray",
                  variant: "ghost",
                  size: "sm",
                  icon: "i-heroicons-x-mark-20-solid",
                  class: "flex sm:hidden absolute end-5 top-5 z-10",
                  square: "",
                  padded: "",
                  onClick: () => {
                    console.log("Closing popover");
                    showPayoutDetails.value = null;
                    showPayoutDetails.value = false;
                  },
                  label: "Close"
                }, null, 8, ["onClick"]),
                createVNode(_component_PayoutCard, { payout: unref(selectedPayout) }, null, 8, ["payout"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/payouts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payouts-D-EQ3O_6.mjs.map
