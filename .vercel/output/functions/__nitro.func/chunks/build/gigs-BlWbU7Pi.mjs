import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_5$1 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_2$1 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$2 } from './Kbd-Yu76GohJ.mjs';
import { _ as __nuxt_component_5 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_7 } from './Table-D01mTn5O.mjs';
import { _ as __nuxt_component_0$1 } from './Tooltip-BpAT_8aW.mjs';
import { _ as __nuxt_component_0$2 } from './Slideover-CEHaOStU.mjs';
import { _ as __nuxt_component_11 } from './GigCard-sH6p1mms.mjs';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, withKeys, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useSupabaseClient, d as useAsyncData } from './server.mjs';
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
import './ListItem-Dn8NVO1F.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@tanstack/vue-query';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gigs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const defaultColumns = [
      {
        key: "id",
        label: "#"
      },
      {
        key: "title",
        label: "Title"
      },
      {
        key: "required_specialties",
        label: "Required Specialties"
      },
      {
        key: "created_at",
        label: "Posted On",
        sortable: true
      },
      {
        key: "day",
        label: "Day",
        sortable: true
      },
      {
        key: "location_name",
        label: "Location"
      },
      {
        key: "status",
        label: "Status"
      }
    ];
    const q = ref("");
    ref([]);
    const selectedColumns = ref(defaultColumns);
    const selectedStatuses = ref([]);
    const selectedLocations = ref([]);
    const sort = ref({ column: "id", direction: "asc" });
    const input = ref();
    const columns = computed(
      () => defaultColumns.filter((column) => selectedColumns.value.includes(column))
    );
    const client = useSupabaseClient();
    const { data: gigs, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("gigs", async () => {
      const { data } = await client.from("gigs_view").select().order("created_at", { ascending: true });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    const filterSorted = computed(() => {
      return gigs.value.filter((gig) => {
        console.log(q.value);
        if (!q.value) return true;
        return gig.title.search(new RegExp(q.value, "i")) !== -1;
      }).filter((gig) => {
        var _a;
        if (!((_a = selectedStatuses.value) == null ? void 0 : _a.length)) return true;
        return selectedStatuses.value.includes(gig.status.replace("_", " "));
      }).filter((gig) => {
        var _a;
        if (!((_a = selectedLocations.value) == null ? void 0 : _a.length)) return true;
        return selectedLocations.value.includes(gig.location_name);
      }).sort((a, b) => {
        if (!sort.value.column) return 0;
        const aValue = a[sort.value.column];
        const bValue = b[sort.value.column];
        if (aValue < bValue) return sort.value.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.value.direction === "asc" ? 1 : -1;
        return 0;
      });
    });
    const defaultLocations = gigs.value.reduce(
      (acc, gig) => {
        if (!acc.includes(gig.location_name)) {
          acc.push(gig.location_name);
        }
        return acc;
      },
      []
    );
    const defaultStatuses = gigs.value.reduce((acc, gig) => {
      const st = gig.status.replace("_", " ");
      if (!acc.includes(st)) {
        acc.push(st);
      }
      return acc;
    }, []);
    function getStatusColor(status) {
      switch (status) {
        case "not_started":
          return "orange";
        case "started":
          return "blue";
        case "completed":
          return "green";
        case "not_matched":
          return "red";
        case "matched":
          return "purple";
        default:
          return "black";
      }
    }
    defineShortcuts({
      "/": () => {
        var _a, _b;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.focus();
      }
    });
    const selectedGig = ref(null);
    const showGigDetails = ref(false);
    function onSelectRow(row) {
      selectedGig.value = row;
      showGigDetails.value = true;
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
      const _component_UBadge = __nuxt_component_5$1;
      const _component_USlideover = __nuxt_component_0$2;
      const _component_GigCard = __nuxt_component_11;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UDashboardPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Gigs",
                    badge: unref(gigs).length
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
                          placeholder: "Filter gigs...",
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
                            placeholder: "Filter gigs...",
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
                          modelValue: unref(selectedStatuses),
                          "onUpdate:modelValue": ($event) => isRef(selectedStatuses) ? selectedStatuses.value = $event : null,
                          icon: "i-heroicons-check-circle",
                          placeholder: "Status",
                          multiple: "",
                          options: unref(defaultStatuses),
                          "ui-menu": { option: { base: "capitalize" } }
                        }, null, _parent4, _scopeId3));
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
                            modelValue: unref(selectedStatuses),
                            "onUpdate:modelValue": ($event) => isRef(selectedStatuses) ? selectedStatuses.value = $event : null,
                            icon: "i-heroicons-check-circle",
                            placeholder: "Status",
                            multiple: "",
                            options: unref(defaultStatuses),
                            "ui-menu": { option: { base: "capitalize" } }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
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
                    "title-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(row.title)}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(row.title), 1)
                        ];
                      }
                    }),
                    "created_at-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(new Date(row.created_at).toDateString())}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.created_at).toDateString()), 1)
                        ];
                      }
                    }),
                    "day-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(new Date(row.day).toDateString())}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                        ];
                      }
                    }),
                    "required_specialties-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}><span class="text-gray-900 dark:text-white font-medium"${_scopeId3}>`);
                        if (row.required_specialties) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(row.required_specialties.slice(0, 2).join(", "))}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!row.required_specialties) {
                          _push4(`<span class="opacity-10"${_scopeId3}> Empty </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.required_specialties && row.required_specialties.length > 3) {
                          _push4(`<span class="ml-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UKbd, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a, _b, _c, _d;
                              if (_push5) {
                                _push5(`${ssrInterpolate(((_a = row.required_specialties) == null ? void 0 : _a.length) <= 3 ? "" : `+${(_b = row.required_specialties) == null ? void 0 : _b.slice(2).length} more`)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(((_c = row.required_specialties) == null ? void 0 : _c.length) <= 3 ? "" : `+${(_d = row.required_specialties) == null ? void 0 : _d.slice(2).length} more`), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, [
                              row.required_specialties ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.required_specialties.slice(0, 2).join(", ")), 1)) : createCommentVNode("", true),
                              !row.required_specialties ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "opacity-10"
                              }, " Empty ")) : createCommentVNode("", true),
                              row.required_specialties && row.required_specialties.length > 3 ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "ml-2"
                              }, [
                                createVNode(_component_UKbd, null, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      createTextVNode(toDisplayString(((_a = row.required_specialties) == null ? void 0 : _a.length) <= 3 ? "" : `+${(_b = row.required_specialties) == null ? void 0 : _b.slice(2).length} more`), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          label: row.status.replace("_", " "),
                          color: getStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            label: row.status.replace("_", " "),
                            color: getStatusColor(row.status),
                            variant: "subtle",
                            class: "capitalize"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      title: "Gigs",
                      badge: unref(gigs).length
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_UInput, {
                          ref_key: "input",
                          ref: input,
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-funnel",
                          autocomplete: "off",
                          placeholder: "Filter gigs...",
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
                          modelValue: unref(selectedStatuses),
                          "onUpdate:modelValue": ($event) => isRef(selectedStatuses) ? selectedStatuses.value = $event : null,
                          icon: "i-heroicons-check-circle",
                          placeholder: "Status",
                          multiple: "",
                          options: unref(defaultStatuses),
                          "ui-menu": { option: { base: "capitalize" } }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
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
                      "title-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(row.title), 1)
                      ]),
                      "created_at-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.created_at).toDateString()), 1)
                      ]),
                      "day-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                      ]),
                      "required_specialties-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, [
                            row.required_specialties ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.required_specialties.slice(0, 2).join(", ")), 1)) : createCommentVNode("", true),
                            !row.required_specialties ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "opacity-10"
                            }, " Empty ")) : createCommentVNode("", true),
                            row.required_specialties && row.required_specialties.length > 3 ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "ml-2"
                            }, [
                              createVNode(_component_UKbd, null, {
                                default: withCtx(() => {
                                  var _a, _b;
                                  return [
                                    createTextVNode(toDisplayString(((_a = row.required_specialties) == null ? void 0 : _a.length) <= 3 ? "" : `+${(_b = row.required_specialties) == null ? void 0 : _b.slice(2).length} more`), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          label: row.status.replace("_", " "),
                          color: getStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
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
                    title: "Gigs",
                    badge: unref(gigs).length
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_UInput, {
                        ref_key: "input",
                        ref: input,
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        icon: "i-heroicons-funnel",
                        autocomplete: "off",
                        placeholder: "Filter gigs...",
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
                        modelValue: unref(selectedStatuses),
                        "onUpdate:modelValue": ($event) => isRef(selectedStatuses) ? selectedStatuses.value = $event : null,
                        icon: "i-heroicons-check-circle",
                        placeholder: "Status",
                        multiple: "",
                        options: unref(defaultStatuses),
                        "ui-menu": { option: { base: "capitalize" } }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
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
                    "title-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(row.title), 1)
                    ]),
                    "created_at-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.created_at).toDateString()), 1)
                    ]),
                    "day-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                    ]),
                    "required_specialties-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, [
                          row.required_specialties ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(row.required_specialties.slice(0, 2).join(", ")), 1)) : createCommentVNode("", true),
                          !row.required_specialties ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "opacity-10"
                          }, " Empty ")) : createCommentVNode("", true),
                          row.required_specialties && row.required_specialties.length > 3 ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: "ml-2"
                          }, [
                            createVNode(_component_UKbd, null, {
                              default: withCtx(() => {
                                var _a, _b;
                                return [
                                  createTextVNode(toDisplayString(((_a = row.required_specialties) == null ? void 0 : _a.length) <= 3 ? "" : `+${(_b = row.required_specialties) == null ? void 0 : _b.slice(2).length} more`), 1)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    "status-data": withCtx(({ row }) => [
                      createVNode(_component_UBadge, {
                        label: row.status.replace("_", " "),
                        color: getStatusColor(row.status),
                        variant: "subtle",
                        class: "capitalize"
                      }, null, 8, ["label", "color"])
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
        modelValue: unref(showGigDetails),
        "onUpdate:modelValue": ($event) => isRef(showGigDetails) ? showGigDetails.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GigCard, { gig: unref(selectedGig) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GigCard, { gig: unref(selectedGig) }, null, 8, ["gig"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/gigs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gigs-BlWbU7Pi.mjs.map
