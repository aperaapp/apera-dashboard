import { _ as __nuxt_component_0 } from './DashboardPanelContent-CWR_KFWL.mjs';
import { _ as __nuxt_component_1 } from './DashboardSection-CLrGZ87G.mjs';
import { _ as __nuxt_component_10 } from './client-only-1_rDmppN.mjs';
import { _ as __nuxt_component_6$1 } from './SelectMenu-CkXj8oEj.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, withCtx, createVNode, unref, computed } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { w as useUserStore, x as useToast, s as useColorMode, v as useAppConfig, _ as __nuxt_component_1$1$1 } from './server.mjs';
import { _ as __nuxt_component_6 } from './Divider-sGwVF3o1.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2$1 } from './FormGroup-BXasiweK.mjs';
import { _ as __nuxt_component_2$2 } from './Input-DAwJQMOP.mjs';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './usePopper-C_2kou-4.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'tailwind-merge';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ColorModeSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const appConfig = useAppConfig();
    const options = computed(() => [
      { label: "System", value: "system", icon: appConfig.ui.icons.system },
      { label: "Light", value: "light", icon: appConfig.ui.icons.light },
      { label: "Dark", value: "dark", icon: appConfig.ui.icons.dark }
    ]);
    computed({
      get() {
        return options.value.find((option) => option.value === colorMode.preference) || options.value[0];
      },
      set(option) {
        colorMode.preference = option.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ClientOnly = __nuxt_component_10;
      const _component_USelectMenu = __nuxt_component_6$1;
      if (!((_a = unref(colorMode)) == null ? void 0 : _a.forced)) {
        _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
          fallback: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(ssrRenderComponent(_component_USelectMenu, mergeProps(_ctx.$attrs, {
                "model-value": unref(options)[0],
                "leading-icon": (_a2 = unref(options)[0]) == null ? void 0 : _a2.icon,
                disabled: ""
              }), null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_USelectMenu, mergeProps(_ctx.$attrs, {
                  "model-value": unref(options)[0],
                  "leading-icon": (_b = unref(options)[0]) == null ? void 0 : _b.icon,
                  disabled: ""
                }), null, 16, ["model-value", "leading-icon"])
              ];
            }
          })
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui-pro@1.4.3_change-case@5.4.4_magicast@0.3.5_rollup@4.28.1_typescript@5.7.2_vite@5.4.1_o5gejxwgvlqmtbh7k6egx4ja3i/node_modules/@nuxt/ui-pro/components/color-mode/ColorModeSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UColorModeSelect" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    ref();
    ref(false);
    const state = reactive({
      name: userStore.profile.name,
      email: userStore.profile.email,
      avatar: userStore.profile.avatar,
      password_new: ""
    });
    const toast = useToast();
    function validate(state2) {
      const errors = [];
      if (!state2.name)
        errors.push({ path: "name", message: "Please enter your name." });
      if (!state2.email)
        errors.push({ path: "email", message: "Please enter your email." });
      if (state2.password_current && !state2.password_new || !state2.password_current && state2.password_new)
        errors.push({
          path: "password",
          message: "Please enter a valid password."
        });
      return errors;
    }
    async function onSubmit(event) {
      console.log(event.data);
      toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelContent = __nuxt_component_0;
      const _component_UDashboardSection = __nuxt_component_1;
      const _component_UColorModeSelect = __nuxt_component_2;
      const _component_UDivider = __nuxt_component_6;
      const _component_UForm = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_1$1$1;
      const _component_UFormGroup = __nuxt_component_2$1;
      const _component_UInput = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_UDashboardPanelContent, mergeProps({ class: "pb-24" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardSection, {
              title: "Theme",
              description: "Customize the look and feel of your dashboard."
            }, {
              links: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UColorModeSelect, { color: "gray" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UColorModeSelect, { color: "gray" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDivider, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state),
              validate,
              "validate-on": ["submit"],
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UDashboardSection, {
                    title: "Profile",
                    description: "This information will be displayed publicly so be careful what you share."
                  }, {
                    links: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          label: "Save changes",
                          color: "black"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UButton, {
                            type: "submit",
                            label: "Save changes",
                            color: "black"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          name: "name",
                          label: "Name",
                          description: "Change your displayed name",
                          required: "",
                          class: "grid grid-cols-2 gap-2 items-center",
                          ui: { container: "" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                autocomplete: "off",
                                icon: "i-heroicons-user",
                                size: "md"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).name,
                                  "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                  autocomplete: "off",
                                  icon: "i-heroicons-user",
                                  size: "md"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          name: "email",
                          label: "Email",
                          description: "Change your email",
                          required: "",
                          class: "grid grid-cols-2 gap-2",
                          ui: { container: "" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).email,
                                "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                type: "email",
                                autocomplete: "off",
                                icon: "i-heroicons-envelope",
                                size: "md"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).email,
                                  "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                  type: "email",
                                  autocomplete: "off",
                                  icon: "i-heroicons-envelope",
                                  size: "md"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          name: "password",
                          label: "Change Password",
                          description: "Set a new password for your account",
                          class: "grid grid-cols-2 gap-2",
                          ui: { container: "" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                id: "password_new",
                                modelValue: unref(state).password_new,
                                "onUpdate:modelValue": ($event) => unref(state).password_new = $event,
                                type: "password",
                                placeholder: "New password",
                                size: "md",
                                class: "mt-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  id: "password_new",
                                  modelValue: unref(state).password_new,
                                  "onUpdate:modelValue": ($event) => unref(state).password_new = $event,
                                  type: "password",
                                  placeholder: "New password",
                                  size: "md",
                                  class: "mt-2"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            name: "name",
                            label: "Name",
                            description: "Change your displayed name",
                            required: "",
                            class: "grid grid-cols-2 gap-2 items-center",
                            ui: { container: "" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).name,
                                "onUpdate:modelValue": ($event) => unref(state).name = $event,
                                autocomplete: "off",
                                icon: "i-heroicons-user",
                                size: "md"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            name: "email",
                            label: "Email",
                            description: "Change your email",
                            required: "",
                            class: "grid grid-cols-2 gap-2",
                            ui: { container: "" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).email,
                                "onUpdate:modelValue": ($event) => unref(state).email = $event,
                                type: "email",
                                autocomplete: "off",
                                icon: "i-heroicons-envelope",
                                size: "md"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            name: "password",
                            label: "Change Password",
                            description: "Set a new password for your account",
                            class: "grid grid-cols-2 gap-2",
                            ui: { container: "" }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                id: "password_new",
                                modelValue: unref(state).password_new,
                                "onUpdate:modelValue": ($event) => unref(state).password_new = $event,
                                type: "password",
                                placeholder: "New password",
                                size: "md",
                                class: "mt-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UDashboardSection, {
                      title: "Profile",
                      description: "This information will be displayed publicly so be careful what you share."
                    }, {
                      links: withCtx(() => [
                        createVNode(_component_UButton, {
                          type: "submit",
                          label: "Save changes",
                          color: "black"
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          name: "name",
                          label: "Name",
                          description: "Change your displayed name",
                          required: "",
                          class: "grid grid-cols-2 gap-2 items-center",
                          ui: { container: "" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).name,
                              "onUpdate:modelValue": ($event) => unref(state).name = $event,
                              autocomplete: "off",
                              icon: "i-heroicons-user",
                              size: "md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          name: "email",
                          label: "Email",
                          description: "Change your email",
                          required: "",
                          class: "grid grid-cols-2 gap-2",
                          ui: { container: "" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).email,
                              "onUpdate:modelValue": ($event) => unref(state).email = $event,
                              type: "email",
                              autocomplete: "off",
                              icon: "i-heroicons-envelope",
                              size: "md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          name: "password",
                          label: "Change Password",
                          description: "Set a new password for your account",
                          class: "grid grid-cols-2 gap-2",
                          ui: { container: "" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              id: "password_new",
                              modelValue: unref(state).password_new,
                              "onUpdate:modelValue": ($event) => unref(state).password_new = $event,
                              type: "password",
                              placeholder: "New password",
                              size: "md",
                              class: "mt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDivider, { class: "mb-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardSection, {
                title: "Theme",
                description: "Customize the look and feel of your dashboard."
              }, {
                links: withCtx(() => [
                  createVNode(_component_UColorModeSelect, { color: "gray" })
                ]),
                _: 1
              }),
              createVNode(_component_UDivider, { class: "mb-4" }),
              createVNode(_component_UForm, {
                state: unref(state),
                validate,
                "validate-on": ["submit"],
                onSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UDashboardSection, {
                    title: "Profile",
                    description: "This information will be displayed publicly so be careful what you share."
                  }, {
                    links: withCtx(() => [
                      createVNode(_component_UButton, {
                        type: "submit",
                        label: "Save changes",
                        color: "black"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        name: "name",
                        label: "Name",
                        description: "Change your displayed name",
                        required: "",
                        class: "grid grid-cols-2 gap-2 items-center",
                        ui: { container: "" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).name,
                            "onUpdate:modelValue": ($event) => unref(state).name = $event,
                            autocomplete: "off",
                            icon: "i-heroicons-user",
                            size: "md"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        name: "email",
                        label: "Email",
                        description: "Change your email",
                        required: "",
                        class: "grid grid-cols-2 gap-2",
                        ui: { container: "" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).email,
                            "onUpdate:modelValue": ($event) => unref(state).email = $event,
                            type: "email",
                            autocomplete: "off",
                            icon: "i-heroicons-envelope",
                            size: "md"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        name: "password",
                        label: "Change Password",
                        description: "Set a new password for your account",
                        class: "grid grid-cols-2 gap-2",
                        ui: { container: "" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            id: "password_new",
                            modelValue: unref(state).password_new,
                            "onUpdate:modelValue": ($event) => unref(state).password_new = $event,
                            type: "password",
                            placeholder: "New password",
                            size: "md",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["state"]),
              createVNode(_component_UDivider, { class: "mb-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DXDxkkHf.mjs.map
