import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_2$1 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$2 } from './Kbd-Yu76GohJ.mjs';
import { _ as __nuxt_component_5 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_7 } from './Table-D01mTn5O.mjs';
import { _ as __nuxt_component_0$1 } from './Tooltip-BpAT_8aW.mjs';
import { u as useSupabaseClient, d as useAsyncData, e as useRouter, a as __nuxt_component_1$3, _ as __nuxt_component_1$1, f as __nuxt_component_0$2$1 } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './Slideover-CEHaOStU.mjs';
import { _ as __nuxt_component_12 } from './ListItem-Dn8NVO1F.mjs';
import { _ as __nuxt_component_0$3 } from './Card-B4YJjzl5.mjs';
import { _ as __nuxt_component_15 } from './SummaryItem-B5YkN3sq.mjs';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, withKeys, createTextVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const defaultColumns = [
      {
        key: "id",
        label: "#"
      },
      {
        key: "stripe_customer_id",
        label: "Stripe ID"
      },
      {
        key: "full_name",
        label: "Name",
        sortable: true
      },
      {
        key: "email",
        label: "Email",
        sortable: true
      },
      {
        key: "phone_number",
        label: "Phone Number",
        sortable: true
      },
      {
        key: "address",
        label: "Address"
      }
    ];
    const q = ref("");
    ref([]);
    const selectedColumns = ref(defaultColumns);
    const selectedLocations = ref([]);
    const sort = ref({ column: "created_at", direction: "desc" });
    const input = ref();
    const columns = computed(() => defaultColumns.filter((column) => selectedColumns.value.includes(column)));
    const client = useSupabaseClient();
    const { data: businesses, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("businesses", async () => {
      const { data } = await client.from("businesses").select().order("created_at", { ascending: true });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const filterSorted = computed(() => {
      return businesses.value.filter((business) => {
        var _a;
        console.log(q.value);
        if (!q.value) return true;
        return ((_a = business.full_name) == null ? void 0 : _a.search(new RegExp(q.value, "i"))) !== -1 || business.email.search(new RegExp(q.value, "i")) !== -1;
      }).filter((business) => {
        var _a;
        if (!((_a = selectedLocations.value) == null ? void 0 : _a.length)) return true;
        return selectedLocations.value.includes(business.address);
      }).sort((a, b) => {
        if (!sort.value.column) return 0;
        const aValue = a[sort.value.column];
        const bValue = b[sort.value.column];
        if (aValue < bValue) return sort.value.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.value.direction === "asc" ? 1 : -1;
        return 0;
      });
    });
    const defaultLocations = businesses.value.reduce((acc, business) => {
      if (!acc.includes(business.address)) {
        acc.push(business.address);
      }
      return acc;
    }, []);
    defineShortcuts({
      "/": () => {
        var _a, _b;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.focus();
      }
    });
    const selectedBusiness = ref(null);
    const showBusinessDetails = ref(false);
    const router = useRouter();
    function onSelectRow(row) {
      router.push(`/dashboard/business/${row.id}`);
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
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_USlideover = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$1;
      const _component_ListItem = __nuxt_component_12;
      const _component_UCard = __nuxt_component_0$3;
      const _component_UIcon = __nuxt_component_0$2$1;
      const _component_SummaryItem = __nuxt_component_15;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UDashboardPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Businesses",
                    badge: unref(businesses).length
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
                          placeholder: "Filter businesses...",
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
                            placeholder: "Filter businesses...",
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
                          modelValue: unref(selectedLocations),
                          "onUpdate:modelValue": ($event) => isRef(selectedLocations) ? selectedLocations.value = $event : null,
                          icon: "i-heroicons-map-pin",
                          placeholder: "Location",
                          options: unref(defaultLocations),
                          multiple: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(selectedLocations),
                            "onUpdate:modelValue": ($event) => isRef(selectedLocations) ? selectedLocations.value = $event : null,
                            icon: "i-heroicons-map-pin",
                            placeholder: "Location",
                            options: unref(defaultLocations),
                            multiple: ""
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
                    "full_name-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ src: row.avatar }, {
                          alt: row.name,
                          size: "xs"
                        }), null, _parent4, _scopeId3));
                        _push4(`<span class="text-gray-900 dark:text-white font-medium"${_scopeId3}>${ssrInterpolate(row.full_name)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(_component_UAvatar, mergeProps({ src: row.avatar }, {
                              alt: row.name,
                              size: "xs"
                            }), null, 16, ["alt"]),
                            createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.full_name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      title: "Businesses",
                      badge: unref(businesses).length
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_UInput, {
                          ref_key: "input",
                          ref: input,
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-funnel",
                          autocomplete: "off",
                          placeholder: "Filter businesses...",
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
                          modelValue: unref(selectedLocations),
                          "onUpdate:modelValue": ($event) => isRef(selectedLocations) ? selectedLocations.value = $event : null,
                          icon: "i-heroicons-map-pin",
                          placeholder: "Location",
                          options: unref(defaultLocations),
                          multiple: ""
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
                      "full_name-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_UAvatar, mergeProps({ src: row.avatar }, {
                            alt: row.name,
                            size: "xs"
                          }), null, 16, ["alt"]),
                          createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.full_name), 1)
                        ])
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
                    title: "Businesses",
                    badge: unref(businesses).length
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_UInput, {
                        ref_key: "input",
                        ref: input,
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        icon: "i-heroicons-funnel",
                        autocomplete: "off",
                        placeholder: "Filter businesses...",
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
                        modelValue: unref(selectedLocations),
                        "onUpdate:modelValue": ($event) => isRef(selectedLocations) ? selectedLocations.value = $event : null,
                        icon: "i-heroicons-map-pin",
                        placeholder: "Location",
                        options: unref(defaultLocations),
                        multiple: ""
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
                    "full_name-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UAvatar, mergeProps({ src: row.avatar }, {
                          alt: row.name,
                          size: "xs"
                        }), null, 16, ["alt"]),
                        createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.full_name), 1)
                      ])
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
        modelValue: unref(showBusinessDetails),
        "onUpdate:modelValue": ($event) => isRef(showBusinessDetails) ? showBusinessDetails.value = $event : null
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
                selectedBusiness.value = null;
                showBusinessDetails.value = false;
              },
              label: "Close"
            }, null, _parent2, _scopeId));
            _push2(`<div class="h-full w-full overflow-y-auto"${_scopeId}><div class="pt-4 grid place-items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              size: "xl",
              src: unref(selectedBusiness).avatar,
              alt: unref(selectedBusiness).full_name
            }, null, _parent2, _scopeId));
            _push2(`<p class="font-bold md:text-lg text-center"${_scopeId}>${ssrInterpolate(unref(selectedBusiness).full_name)}</p></div><div class="w-full space-y"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "ID",
              value: unref(selectedBusiness).id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "Stripe Customer ID",
              value: unref(selectedBusiness).stripe_customer_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "Created At",
              value: new Date(unref(selectedBusiness).created_at).toDateString()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "Email",
              value: unref(selectedBusiness).email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "Phone Number",
              value: "+" + unref(selectedBusiness).phone_number
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ListItem, {
              label: "Address",
              value: unref(selectedBusiness).address
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "m-4" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid place-items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-square-3-stack-3d",
                    class: "w-5 h-5 mx-auto"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="font-medium text-lg text-center"${_scopeId2}>Gigs</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid place-items-center" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-square-3-stack-3d",
                        class: "w-5 h-5 mx-auto"
                      }),
                      createVNode("p", { class: "font-medium text-lg text-center" }, "Gigs")
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "View All",
                    block: "",
                    variant: "solid",
                    color: "gray"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: "View All",
                      block: "",
                      variant: "solid",
                      color: "gray"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "in Total Posted",
                    value: "10",
                    class: "col-span-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "Pending Match",
                    value: "2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "Match Found",
                    value: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "Ongoing",
                    value: "1"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "Completed",
                    value: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                      createVNode(_component_SummaryItem, {
                        label: "in Total Posted",
                        value: "10",
                        class: "col-span-2"
                      }),
                      createVNode(_component_SummaryItem, {
                        label: "Pending Match",
                        value: "2"
                      }),
                      createVNode(_component_SummaryItem, {
                        label: "Match Found",
                        value: "3"
                      }),
                      createVNode(_component_SummaryItem, {
                        label: "Ongoing",
                        value: "1"
                      }),
                      createVNode(_component_SummaryItem, {
                        label: "Completed",
                        value: "3"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, { class: "m-4" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid place-items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-square-3-stack-3d",
                    class: "w-5 h-5 mx-auto"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="font-medium text-lg text-center"${_scopeId2}>Payouts</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid place-items-center" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-square-3-stack-3d",
                        class: "w-5 h-5 mx-auto"
                      }),
                      createVNode("p", { class: "font-medium text-lg text-center" }, "Payouts")
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "View All",
                    block: "",
                    variant: "solid",
                    color: "gray"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: "View All",
                      block: "",
                      variant: "solid",
                      color: "gray"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "in Total Paid",
                    value: "$200"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SummaryItem, {
                    label: "Pending Payouts",
                    value: "3 → $50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 gap-3" }, [
                      createVNode(_component_SummaryItem, {
                        label: "in Total Paid",
                        value: "$200"
                      }),
                      createVNode(_component_SummaryItem, {
                        label: "Pending Payouts",
                        value: "3 → $50"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
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
                    selectedBusiness.value = null;
                    showBusinessDetails.value = false;
                  },
                  label: "Close"
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "h-full w-full overflow-y-auto" }, [
                  createVNode("div", { class: "pt-4 grid place-items-center gap-2" }, [
                    createVNode(_component_UAvatar, {
                      size: "xl",
                      src: unref(selectedBusiness).avatar,
                      alt: unref(selectedBusiness).full_name
                    }, null, 8, ["src", "alt"]),
                    createVNode("p", { class: "font-bold md:text-lg text-center" }, toDisplayString(unref(selectedBusiness).full_name), 1)
                  ]),
                  createVNode("div", { class: "w-full space-y" }, [
                    createVNode(_component_ListItem, {
                      label: "ID",
                      value: unref(selectedBusiness).id
                    }, null, 8, ["value"]),
                    createVNode(_component_ListItem, {
                      label: "Stripe Customer ID",
                      value: unref(selectedBusiness).stripe_customer_id
                    }, null, 8, ["value"]),
                    createVNode(_component_ListItem, {
                      label: "Created At",
                      value: new Date(unref(selectedBusiness).created_at).toDateString()
                    }, null, 8, ["value"]),
                    createVNode(_component_ListItem, {
                      label: "Email",
                      value: unref(selectedBusiness).email
                    }, null, 8, ["value"]),
                    createVNode(_component_ListItem, {
                      label: "Phone Number",
                      value: "+" + unref(selectedBusiness).phone_number
                    }, null, 8, ["value"]),
                    createVNode(_component_ListItem, {
                      label: "Address",
                      value: unref(selectedBusiness).address
                    }, null, 8, ["value"])
                  ]),
                  createVNode(_component_UCard, { class: "m-4" }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "grid place-items-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-square-3-stack-3d",
                          class: "w-5 h-5 mx-auto"
                        }),
                        createVNode("p", { class: "font-medium text-lg text-center" }, "Gigs")
                      ])
                    ]),
                    footer: withCtx(() => [
                      createVNode(_component_UButton, {
                        label: "View All",
                        block: "",
                        variant: "solid",
                        color: "gray"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                        createVNode(_component_SummaryItem, {
                          label: "in Total Posted",
                          value: "10",
                          class: "col-span-2"
                        }),
                        createVNode(_component_SummaryItem, {
                          label: "Pending Match",
                          value: "2"
                        }),
                        createVNode(_component_SummaryItem, {
                          label: "Match Found",
                          value: "3"
                        }),
                        createVNode(_component_SummaryItem, {
                          label: "Ongoing",
                          value: "1"
                        }),
                        createVNode(_component_SummaryItem, {
                          label: "Completed",
                          value: "3"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UCard, { class: "m-4" }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "grid place-items-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-square-3-stack-3d",
                          class: "w-5 h-5 mx-auto"
                        }),
                        createVNode("p", { class: "font-medium text-lg text-center" }, "Payouts")
                      ])
                    ]),
                    footer: withCtx(() => [
                      createVNode(_component_UButton, {
                        label: "View All",
                        block: "",
                        variant: "solid",
                        color: "gray"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 gap-3" }, [
                        createVNode(_component_SummaryItem, {
                          label: "in Total Paid",
                          value: "$200"
                        }),
                        createVNode(_component_SummaryItem, {
                          label: "Pending Payouts",
                          value: "3 → $50"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/business/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-azmD8wEe.mjs.map
