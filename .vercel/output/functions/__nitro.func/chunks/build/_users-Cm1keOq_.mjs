import { _ as __nuxt_component_0 } from './DashboardPage-DYDyCgze.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_5$1 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_2$1 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$2 } from './Kbd-Yu76GohJ.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_1$3 } from './server.mjs';
import { _ as __nuxt_component_5 } from './DashboardToolbar-cILmmzL4.mjs';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_8 } from './DashboardModal-BcmmY87y.mjs';
import { _ as __nuxt_component_1$2, a as __nuxt_component_2$3 } from './FormGroup-BXasiweK.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, withKeys, createTextVNode, mergeProps, toDisplayString, reactive } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_7 } from './Table-D01mTn5O.mjs';
import { u as useFetch } from './fetch-3sWffV1N.mjs';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'deep-pick-omit';
import '@tanstack/vue-query';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './usePopper-C_2kou-4.mjs';
import './Modal-0QOr5npF.mjs';
import './transition-BOGEnzeo.mjs';
import './portal-CkOWSbPc.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UsersForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const state = reactive({
      name: void 0,
      email: void 0
    });
    const validate = (state2) => {
      const errors = [];
      if (!state2.name) errors.push({ path: "name", message: "Please enter a name." });
      if (!state2.email) errors.push({ path: "email", message: "Please enter an email." });
      return errors;
    };
    async function onSubmit(event) {
      console.log(event.data);
      emit("close");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1$2;
      const _component_UFormGroup = __nuxt_component_2$3;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        validate,
        "validate-on": ["submit"],
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Name",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    placeholder: "John Doe",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      placeholder: "John Doe",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    type: "email",
                    placeholder: "john.doe@example.com"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      type: "email",
                      placeholder: "john.doe@example.com"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Cancel",
              color: "gray",
              variant: "ghost",
              onClick: ($event) => emit("close")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              label: "Save",
              color: "black"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "Name",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    placeholder: "John Doe",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    type: "email",
                    placeholder: "john.doe@example.com"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end gap-3" }, [
                createVNode(_component_UButton, {
                  label: "Cancel",
                  color: "gray",
                  variant: "ghost",
                  onClick: ($event) => emit("close")
                }, null, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  type: "submit",
                  label: "Save",
                  color: "black"
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/UsersForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "UsersForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_users",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const defaultColumns = [{
      key: "id",
      label: "#"
    }, {
      key: "name",
      label: "Name",
      sortable: true
    }, {
      key: "email",
      label: "Email",
      sortable: true
    }, {
      key: "location",
      label: "Location"
    }, {
      key: "status",
      label: "Status"
    }];
    const q = ref("");
    const selected = ref([]);
    const selectedColumns = ref(defaultColumns);
    const selectedStatuses = ref([]);
    const selectedLocations = ref([]);
    const sort = ref({ column: "id", direction: "asc" });
    const input = ref();
    const isNewUserModalOpen = ref(false);
    const columns = computed(() => defaultColumns.filter((column) => selectedColumns.value.includes(column)));
    const query = computed(() => ({ q: q.value, statuses: selectedStatuses.value, locations: selectedLocations.value, sort: sort.value.column, order: sort.value.direction }));
    const { data: users, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users", { query, default: () => [] }, "$v8g78duKTE")), __temp = await __temp, __restore(), __temp);
    const defaultLocations = users.value.reduce((acc, user) => {
      if (!acc.includes(user.location)) {
        acc.push(user.location);
      }
      return acc;
    }, []);
    const defaultStatuses = users.value.reduce((acc, user) => {
      if (!acc.includes(user.status)) {
        acc.push(user.status);
      }
      return acc;
    }, []);
    function onSelect(row) {
      const index = selected.value.findIndex((item) => item.id === row.id);
      if (index === -1) {
        selected.value.push(row);
      } else {
        selected.value.splice(index, 1);
      }
    }
    defineShortcuts({
      "/": () => {
        var _a, _b;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPage = __nuxt_component_0;
      const _component_UDashboardPanel = __nuxt_component_1;
      const _component_UDashboardNavbar = __nuxt_component_2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UKbd = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UDashboardToolbar = __nuxt_component_5;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UDashboardModal = __nuxt_component_8;
      const _component_UsersForm = __nuxt_component_9;
      const _component_UTable = __nuxt_component_7;
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_UBadge = __nuxt_component_5$1;
      _push(ssrRenderComponent(_component_UDashboardPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardPanel, { grow: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardNavbar, {
                    title: "Users",
                    badge: unref(users).length
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
                          placeholder: "Filter users...",
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
                        _push4(ssrRenderComponent(_component_UButton, {
                          label: "New user",
                          "trailing-icon": "i-heroicons-plus",
                          color: "gray",
                          onClick: ($event) => isNewUserModalOpen.value = true
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            ref_key: "input",
                            ref: input,
                            modelValue: unref(q),
                            "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                            icon: "i-heroicons-funnel",
                            autocomplete: "off",
                            placeholder: "Filter users...",
                            class: "hidden lg:block",
                            onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                          }, {
                            trailing: withCtx(() => [
                              createVNode(_component_UKbd, { value: "/" })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                          createVNode(_component_UButton, {
                            label: "New user",
                            "trailing-icon": "i-heroicons-plus",
                            color: "gray",
                            onClick: ($event) => isNewUserModalOpen.value = true
                          }, null, 8, ["onClick"])
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
                              _push5(` Display `);
                            } else {
                              return [
                                createTextVNode(" Display ")
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
                              createTextVNode(" Display ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDashboardModal, {
                    modelValue: unref(isNewUserModalOpen),
                    "onUpdate:modelValue": ($event) => isRef(isNewUserModalOpen) ? isNewUserModalOpen.value = $event : null,
                    title: "New user",
                    description: "Add a new user to your database",
                    ui: { width: "sm:max-w-md" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UsersForm, {
                          onClose: ($event) => isNewUserModalOpen.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UsersForm, {
                            onClose: ($event) => isNewUserModalOpen.value = false
                          }, null, 8, ["onClose"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTable, {
                    modelValue: unref(selected),
                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                    sort: unref(sort),
                    "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                    rows: unref(users),
                    columns: unref(columns),
                    loading: unref(pending),
                    "sort-mode": "manual",
                    class: "w-full",
                    ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                    onSelect
                  }, {
                    "name-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, mergeProps(row.avatar, {
                          alt: row.name,
                          size: "xs"
                        }), null, _parent4, _scopeId3));
                        _push4(`<span class="text-gray-900 dark:text-white font-medium"${_scopeId3}>${ssrInterpolate(row.name)}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(_component_UAvatar, mergeProps(row.avatar, {
                              alt: row.name,
                              size: "xs"
                            }), null, 16, ["alt"]),
                            createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.name), 1)
                          ])
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          label: row.status,
                          color: row.status === "subscribed" ? "green" : row.status === "bounced" ? "orange" : "red",
                          variant: "subtle",
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            label: row.status,
                            color: row.status === "subscribed" ? "green" : row.status === "bounced" ? "orange" : "red",
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
                      title: "Users",
                      badge: unref(users).length
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_UInput, {
                          ref_key: "input",
                          ref: input,
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-funnel",
                          autocomplete: "off",
                          placeholder: "Filter users...",
                          class: "hidden lg:block",
                          onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                        }, {
                          trailing: withCtx(() => [
                            createVNode(_component_UKbd, { value: "/" })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                        createVNode(_component_UButton, {
                          label: "New user",
                          "trailing-icon": "i-heroicons-plus",
                          color: "gray",
                          onClick: ($event) => isNewUserModalOpen.value = true
                        }, null, 8, ["onClick"])
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
                            createTextVNode(" Display ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UDashboardModal, {
                      modelValue: unref(isNewUserModalOpen),
                      "onUpdate:modelValue": ($event) => isRef(isNewUserModalOpen) ? isNewUserModalOpen.value = $event : null,
                      title: "New user",
                      description: "Add a new user to your database",
                      ui: { width: "sm:max-w-md" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UsersForm, {
                          onClose: ($event) => isNewUserModalOpen.value = false
                        }, null, 8, ["onClose"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UTable, {
                      modelValue: unref(selected),
                      "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                      sort: unref(sort),
                      "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                      rows: unref(users),
                      columns: unref(columns),
                      loading: unref(pending),
                      "sort-mode": "manual",
                      class: "w-full",
                      ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                      onSelect
                    }, {
                      "name-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_UAvatar, mergeProps(row.avatar, {
                            alt: row.name,
                            size: "xs"
                          }), null, 16, ["alt"]),
                          createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.name), 1)
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          label: row.status,
                          color: row.status === "subscribed" ? "green" : row.status === "bounced" ? "orange" : "red",
                          variant: "subtle",
                          class: "capitalize"
                        }, null, 8, ["label", "color"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "sort", "onUpdate:sort", "rows", "columns", "loading"])
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
                    title: "Users",
                    badge: unref(users).length
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_UInput, {
                        ref_key: "input",
                        ref: input,
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        icon: "i-heroicons-funnel",
                        autocomplete: "off",
                        placeholder: "Filter users...",
                        class: "hidden lg:block",
                        onKeydown: withKeys(($event) => $event.target.blur(), ["esc"])
                      }, {
                        trailing: withCtx(() => [
                          createVNode(_component_UKbd, { value: "/" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                      createVNode(_component_UButton, {
                        label: "New user",
                        "trailing-icon": "i-heroicons-plus",
                        color: "gray",
                        onClick: ($event) => isNewUserModalOpen.value = true
                      }, null, 8, ["onClick"])
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
                          createTextVNode(" Display ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UDashboardModal, {
                    modelValue: unref(isNewUserModalOpen),
                    "onUpdate:modelValue": ($event) => isRef(isNewUserModalOpen) ? isNewUserModalOpen.value = $event : null,
                    title: "New user",
                    description: "Add a new user to your database",
                    ui: { width: "sm:max-w-md" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UsersForm, {
                        onClose: ($event) => isNewUserModalOpen.value = false
                      }, null, 8, ["onClose"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UTable, {
                    modelValue: unref(selected),
                    "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                    sort: unref(sort),
                    "onUpdate:sort": ($event) => isRef(sort) ? sort.value = $event : null,
                    rows: unref(users),
                    columns: unref(columns),
                    loading: unref(pending),
                    "sort-mode": "manual",
                    class: "w-full",
                    ui: { divide: "divide-gray-200 dark:divide-gray-800" },
                    onSelect
                  }, {
                    "name-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UAvatar, mergeProps(row.avatar, {
                          alt: row.name,
                          size: "xs"
                        }), null, 16, ["alt"]),
                        createVNode("span", { class: "text-gray-900 dark:text-white font-medium" }, toDisplayString(row.name), 1)
                      ])
                    ]),
                    "status-data": withCtx(({ row }) => [
                      createVNode(_component_UBadge, {
                        label: row.status,
                        color: row.status === "subscribed" ? "green" : row.status === "bounced" ? "orange" : "red",
                        variant: "subtle",
                        class: "capitalize"
                      }, null, 8, ["label", "color"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "sort", "onUpdate:sort", "rows", "columns", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/_users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_users-Cm1keOq_.mjs.map
