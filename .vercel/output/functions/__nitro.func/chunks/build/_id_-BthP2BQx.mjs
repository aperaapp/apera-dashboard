import { a as __nuxt_component_2, b as __nuxt_component_5, _ as __nuxt_component_1 } from './DashboardNavbar-BWbGc5-K.mjs';
import { u as useSupabaseClient, b as useRoute, _ as __nuxt_component_1$1, a as __nuxt_component_1$3, c as __nuxt_component_10 } from './server.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3 } from './ErrorCard-CuXRrSP8.mjs';
import { _ as __nuxt_component_0 } from './Card-B4YJjzl5.mjs';
import { _ as __nuxt_component_12 } from './ListItem-Dn8NVO1F.mjs';
import { _ as __nuxt_component_6 } from './Divider-sGwVF3o1.mjs';
import { _ as __nuxt_component_0$1 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_2$2 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$3 } from './Kbd-Yu76GohJ.mjs';
import { _ as __nuxt_component_5$1 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_6$1 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_7 } from './Table-D01mTn5O.mjs';
import { _ as __nuxt_component_0$2 } from './Tooltip-BpAT_8aW.mjs';
import { _ as __nuxt_component_0$3 } from './Slideover-CEHaOStU.mjs';
import { _ as __nuxt_component_11$1 } from './GigCard-sH6p1mms.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, ref, computed, isRef, withKeys, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as defineShortcuts } from './defineShortcuts-Dh20htKv.mjs';
import { _ as __nuxt_component_11$2 } from './PayoutCard-DhdZ0nCY.mjs';
import { useQuery } from '@tanstack/vue-query';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './useFormGroup-CqsCLfTh.mjs';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './usePopper-C_2kou-4.mjs';
import './transition-BOGEnzeo.mjs';
import './portal-CkOWSbPc.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WorkerGigsTable",
  __ssrInlineRender: true,
  props: {
    gigs: {}
  },
  setup(__props) {
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
        key: "location_name",
        label: "Location"
      },
      {
        key: "status",
        label: "Status"
      },
      {
        key: "day",
        label: "Day",
        sortable: true
      },
      {
        key: "start_time",
        label: "Start Time",
        sortable: true
      },
      {
        key: "end_time",
        label: "End Time",
        sortable: true
      },
      {
        key: "created_at",
        label: "Created At",
        sortable: true
      }
    ];
    const q = ref("");
    const selectedColumns = ref(defaultColumns);
    const selectedStatuses = ref([]);
    const selectedLocations = ref([]);
    const sort = ref({ column: "id", direction: "asc" });
    const input = ref();
    const columns = computed(
      () => defaultColumns.filter((column) => selectedColumns.value.includes(column))
    );
    const filterSorted = computed(() => {
      return __props.gigs.filter((gig) => {
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
    const defaultLocations = __props.gigs.reduce((acc, gig) => {
      if (!acc.includes(gig.location_name)) {
        acc.push(gig.location_name);
      }
      return acc;
    }, []);
    const defaultStatuses = __props.gigs.reduce((acc, gig) => {
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
      const _component_UDashboardPage = __nuxt_component_0$1;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UInput = __nuxt_component_2$2;
      const _component_UKbd = __nuxt_component_2$3;
      const _component_UDashboardToolbar = __nuxt_component_5$1;
      const _component_USelectMenu = __nuxt_component_6$1;
      const _component_UTable = __nuxt_component_7;
      const _component_UTooltip = __nuxt_component_0$2;
      const _component_UBadge = __nuxt_component_5;
      const _component_USlideover = __nuxt_component_0$3;
      const _component_GigCard = __nuxt_component_11$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UDashboardPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Gigs",
                    badge: _ctx.gigs.length
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
                    "day-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(new Date(row.day).toDateString())}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                        ];
                      }
                    }),
                    "start_time-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(new Date(row.start_time).toLocaleTimeString("en-US"))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.start_time).toLocaleTimeString("en-US")), 1)
                        ];
                      }
                    }),
                    "end_time-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]"${_scopeId3}>${ssrInterpolate(new Date(row.end_time).toLocaleTimeString("en-US"))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.end_time).toLocaleTimeString("en-US")), 1)
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
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardNavbar, {
                      title: "Gigs",
                      badge: _ctx.gigs.length
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
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          label: row.status.replace("_", " "),
                          color: getStatusColor(row.status),
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      "day-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                      ]),
                      "start_time-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.start_time).toLocaleTimeString("en-US")), 1)
                      ]),
                      "end_time-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.end_time).toLocaleTimeString("en-US")), 1)
                      ]),
                      "created_at-data": withCtx(({ row }) => [
                        createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.created_at).toDateString()), 1)
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
                    badge: _ctx.gigs.length
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
                    "status-data": withCtx(({ row }) => [
                      createVNode(_component_UBadge, {
                        label: row.status.replace("_", " "),
                        color: getStatusColor(row.status),
                        variant: "subtle",
                        class: "capitalize"
                      }, null, 8, ["label", "color"])
                    ]),
                    "day-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.day).toDateString()), 1)
                    ]),
                    "start_time-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.start_time).toLocaleTimeString("en-US")), 1)
                    ]),
                    "end_time-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.end_time).toLocaleTimeString("en-US")), 1)
                    ]),
                    "created_at-data": withCtx(({ row }) => [
                      createVNode("p", { class: "text-gray-900 dark:text-white font-medium line-clamp-2 max-w-[300px]" }, toDisplayString(new Date(row.created_at).toDateString()), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/worker/WorkerGigsTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$2, { __name: "WorkerGigsTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkerPayoutsTable",
  __ssrInlineRender: true,
  props: {
    payouts: {}
  },
  setup(__props) {
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
        key: "wk_amount",
        label: "Amount",
        sortable: true
      }
    ];
    const q = ref("");
    const selectedColumns = ref(defaultColumns);
    const selectedBusiness = ref();
    const sort = ref({ column: "id", direction: "asc" });
    const input = ref();
    const columns = computed(
      () => defaultColumns.filter((column) => selectedColumns.value.includes(column))
    );
    const filterSorted = computed(() => {
      return __props.payouts.filter((payout) => {
        console.log(q.value);
        if (!q.value) return true;
        return payout.worker_name.search(new RegExp(q.value, "i")) !== -1;
      }).filter((payout) => {
        if (!selectedBusiness.value) return true;
        return selectedBusiness.value === payout.business_name;
      }).sort((a, b) => {
        if (!sort.value.column) return 0;
        const aValue = a[sort.value.column];
        const bValue = b[sort.value.column];
        if (aValue < bValue) return sort.value.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.value.direction === "asc" ? 1 : -1;
        return 0;
      });
    });
    const defaultBusinesses = __props.payouts.reduce((acc, payout) => {
      if (!acc.includes(payout.business_name)) {
        acc.push(payout.business_name);
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
      const _component_UDashboardPage = __nuxt_component_0$1;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UInput = __nuxt_component_2$2;
      const _component_UKbd = __nuxt_component_2$3;
      const _component_UDashboardToolbar = __nuxt_component_5$1;
      const _component_USelectMenu = __nuxt_component_6$1;
      const _component_UTable = __nuxt_component_7;
      const _component_UTooltip = __nuxt_component_0$2;
      const _component_USlideover = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_1$1;
      const _component_PayoutCard = __nuxt_component_11$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UDashboardPage, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Payments",
                    badge: _ctx.payouts.length
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
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(selectedBusiness),
                            "onUpdate:modelValue": ($event) => isRef(selectedBusiness) ? selectedBusiness.value = $event : null,
                            icon: "i-heroicons-building-office",
                            placeholder: "Business",
                            options: unref(defaultBusinesses),
                            "ui-menu": { option: { base: "capitalize" } }
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
                      title: "Payments",
                      badge: _ctx.payouts.length
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
                    title: "Payments",
                    badge: _ctx.payouts.length
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/worker/WorkerPayoutsTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main$1, { __name: "WorkerPayoutsTable" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const client = useSupabaseClient();
    const route = useRoute();
    const workerId = route.params.id;
    const {
      isLoading: isLoadingProfile,
      data: profile,
      error: profileError
    } = useQuery({
      queryKey: ["worker", workerId],
      queryFn: async () => {
        const { data, error } = await client.from("workers").select().eq("id", workerId).single();
        if (error) {
          throw error;
        }
        if (!data) {
          throw new Error("No data returned");
        }
        return data;
      }
    });
    const {
      isLoading: isLoadingGigs,
      data: gigs,
      error: gigsError
    } = useQuery({
      queryKey: ["worker", workerId, "gigs"],
      queryFn: async () => {
        const { data, error } = await client.from("gigs_view").select().or(`matched_worker_id.eq.${workerId},assigned_worker_id.eq.${workerId}`);
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
    const {
      isLoading: isLoadingPayouts,
      data: payouts,
      error: payoutsError
    } = useQuery({
      queryKey: ["worker", workerId, "payouts"],
      queryFn: async () => {
        const { data, error } = await client.from("payouts_view").select().eq("worker_id", workerId);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UButton = __nuxt_component_1$1;
      const _component_USkeleton = __nuxt_component_2$1;
      const _component_ErrorCard = __nuxt_component_3;
      const _component_UCard = __nuxt_component_0;
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_ListItem = __nuxt_component_12;
      const _component_UDivider = __nuxt_component_6;
      const _component_UBadge = __nuxt_component_5;
      const _component_WorkerGigsTable = __nuxt_component_9;
      const _component_Icon = __nuxt_component_10;
      const _component_WorkerPayoutsTable = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-screen h-screen overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UDashboardNavbar, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "ghost",
              size: "sm",
              icon: "i-heroicons-arrow-left",
              onClick: ($event) => _ctx.$router.back()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "ghost",
                size: "sm",
                icon: "i-heroicons-arrow-left",
                onClick: ($event) => _ctx.$router.back()
              }, null, 8, ["onClick"])
            ];
          }
        }),
        center: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(profile) ? unref(profile).full_name : "Profile")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(profile) ? unref(profile).full_name : "Profile"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col flex-wrap md:flex-row gap-4 w-full p-4"><div class="flex-1">`);
      if (unref(isLoadingProfile)) {
        _push(ssrRenderComponent(_component_USkeleton, {
          class: "h-full w-full",
          ui: { rounded: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(profileError)) {
        _push(ssrRenderComponent(_component_ErrorCard, {
          title: "Erorr fetching worker profile",
          message: unref(profileError).message
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(profile)) {
        _push(ssrRenderComponent(_component_UCard, { ui: { body: { padding: "px-0 sm:p-0" }, rounded: "rounded-2xl" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y flex flex-col pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ src: unref(profile).avatar }, {
                alt: unref(profile).full_name,
                size: "2xl",
                class: "mx-auto"
              }), null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Name",
                value: unref(profile).full_name
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Email",
                value: unref(profile).email
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Phone Number",
                value: "+" + unref(profile).phone_number
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Specialties",
                value: unref(profile).specialties.join(", ")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Created At",
                value: new Date(unref(profile).created_at).toDateString(),
                class: "border-b-0"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UDivider, { label: "Stripe" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Account ID",
                value: unref(profile).stripe_account_id
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, { label: "Details Submitted" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      label: unref(profile).details_submitted ? "Yes" : "No",
                      color: unref(profile).details_submitted ? "green" : "red",
                      variant: "soft",
                      icon: unref(profile).details_submitted ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBadge, {
                        label: unref(profile).details_submitted ? "Yes" : "No",
                        color: unref(profile).details_submitted ? "green" : "red",
                        variant: "soft",
                        icon: unref(profile).details_submitted ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                      }, null, 8, ["label", "color", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ListItem, {
                label: "Payouts Enabled",
                class: "border-b-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      label: unref(profile).payouts_enabled ? "Yes" : "No",
                      color: unref(profile).payouts_enabled ? "green" : "red",
                      variant: "soft",
                      icon: unref(profile).payouts_enabled ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBadge, {
                        label: unref(profile).payouts_enabled ? "Yes" : "No",
                        color: unref(profile).payouts_enabled ? "green" : "red",
                        variant: "soft",
                        icon: unref(profile).payouts_enabled ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                      }, null, 8, ["label", "color", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y flex flex-col pt-4" }, [
                  createVNode(_component_UAvatar, mergeProps({ src: unref(profile).avatar }, {
                    alt: unref(profile).full_name,
                    size: "2xl",
                    class: "mx-auto"
                  }), null, 16, ["alt"]),
                  createVNode(_component_ListItem, {
                    label: "Name",
                    value: unref(profile).full_name
                  }, null, 8, ["value"]),
                  createVNode(_component_ListItem, {
                    label: "Email",
                    value: unref(profile).email
                  }, null, 8, ["value"]),
                  createVNode(_component_ListItem, {
                    label: "Phone Number",
                    value: "+" + unref(profile).phone_number
                  }, null, 8, ["value"]),
                  createVNode(_component_ListItem, {
                    label: "Specialties",
                    value: unref(profile).specialties.join(", ")
                  }, null, 8, ["value"]),
                  createVNode(_component_ListItem, {
                    label: "Created At",
                    value: new Date(unref(profile).created_at).toDateString(),
                    class: "border-b-0"
                  }, null, 8, ["value"]),
                  createVNode(_component_UDivider, { label: "Stripe" }),
                  createVNode(_component_ListItem, {
                    label: "Account ID",
                    value: unref(profile).stripe_account_id
                  }, null, 8, ["value"]),
                  createVNode(_component_ListItem, { label: "Details Submitted" }, {
                    default: withCtx(() => [
                      createVNode(_component_UBadge, {
                        label: unref(profile).details_submitted ? "Yes" : "No",
                        color: unref(profile).details_submitted ? "green" : "red",
                        variant: "soft",
                        icon: unref(profile).details_submitted ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                      }, null, 8, ["label", "color", "icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ListItem, {
                    label: "Payouts Enabled",
                    class: "border-b-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UBadge, {
                        label: unref(profile).payouts_enabled ? "Yes" : "No",
                        color: unref(profile).payouts_enabled ? "green" : "red",
                        variant: "soft",
                        icon: unref(profile).payouts_enabled ? "i-heroicons-check-badge" : "i-heroicons-shield-exclamation"
                      }, null, 8, ["label", "color", "icon"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-[0.5] max-w-[100%]">`);
      if (unref(isLoadingGigs)) {
        _push(ssrRenderComponent(_component_USkeleton, {
          class: "h-full w-full",
          ui: { rounded: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(gigsError)) {
        _push(ssrRenderComponent(_component_ErrorCard, {
          title: "Error fetching worker profile",
          message: unref(gigsError).message
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, { ui: { body: { padding: "px-0 sm:p-0" }, rounded: "rounded-2xl" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(gigs) && unref(gigs).length > 0) {
              _push2(ssrRenderComponent(_component_WorkerGigsTable, { gigs: unref(gigs) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(gigs) && unref(gigs).length === 0) {
              _push2(`<div class="grid place-items-center gap-2 p-4 h-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-heroicons-folder-open",
                size: "lg"
              }, null, _parent2, _scopeId));
              _push2(`<p${_scopeId}>No Gigs Found</p></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(gigs) && unref(gigs).length > 0 ? (openBlock(), createBlock(_component_WorkerGigsTable, {
                key: 0,
                gigs: unref(gigs)
              }, null, 8, ["gigs"])) : createCommentVNode("", true),
              unref(gigs) && unref(gigs).length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid place-items-center gap-2 p-4 h-full"
              }, [
                createVNode(_component_Icon, {
                  name: "i-heroicons-folder-open",
                  size: "lg"
                }),
                createVNode("p", null, "No Gigs Found")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 max-w-[100%]">`);
      if (unref(isLoadingPayouts)) {
        _push(ssrRenderComponent(_component_USkeleton, {
          class: "h-full w-full",
          ui: { rounded: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(payoutsError)) {
        _push(ssrRenderComponent(_component_ErrorCard, {
          title: "Error fetching worker profile",
          message: unref(payoutsError).message
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, { ui: { body: { padding: "px-0 sm:p-0" }, rounded: "rounded-2xl" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(payouts) && unref(payouts).length > 0) {
              _push2(ssrRenderComponent(_component_WorkerPayoutsTable, { payouts: unref(payouts) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(payouts) && unref(payouts).length === 0) {
              _push2(`<div class="grid place-items-center gap-2 p-4 h-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-heroicons-folder-open",
                size: "lg"
              }, null, _parent2, _scopeId));
              _push2(`<p${_scopeId}>No Payouts Found</p></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(payouts) && unref(payouts).length > 0 ? (openBlock(), createBlock(_component_WorkerPayoutsTable, {
                key: 0,
                payouts: unref(payouts)
              }, null, 8, ["payouts"])) : createCommentVNode("", true),
              unref(payouts) && unref(payouts).length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid place-items-center gap-2 p-4 h-full"
              }, [
                createVNode(_component_Icon, {
                  name: "i-heroicons-folder-open",
                  size: "lg"
                }),
                createVNode("p", null, "No Payouts Found")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/workers/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BthP2BQx.mjs.map
