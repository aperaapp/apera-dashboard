import { _ as __nuxt_component_0$1 } from './Card-B4YJjzl5.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './FormGroup-BXasiweK.mjs';
import { _ as __nuxt_component_2$1 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_4 } from './ButtonGroup-BSSLrlJX.mjs';
import { y as useNuxtApp, w as useUserStore, e as useRouter, _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, reactive, ref, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import z from 'zod';
import { useMutation } from '@tanstack/vue-query';
import 'tailwind-merge';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { $toast } = useNuxtApp();
    const userStore = useUserStore();
    const REQUEST_PAYLOAD_SCHEMA = z.object({
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password must be at least 6 characters")
    });
    const state = reactive({
      password: "",
      email: ""
    });
    const router = useRouter();
    const login = useMutation({
      mutationFn: async (event) => {
        const { data, error } = await $fetch("/api/signin", {
          method: "post",
          body: { email: event.data.email, password: event.data.password }
        });
        if (error) {
          console.log({ error });
          throw error;
        }
        return data;
      },
      onSuccess: (profile) => {
        console.log("Login succesful");
        userStore.profile = profile;
        router.push("/dashboard");
      },
      onError: (error) => {
        $toast.error("Error", { description: error.message });
      }
    });
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0$1;
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButtonGroup = __nuxt_component_4;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-bold text-center"${_scopeId}>Apera Login</p>`);
          } else {
            return [
              createVNode("p", { class: "font-bold text-center" }, "Apera Login")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              schema: unref(REQUEST_PAYLOAD_SCHEMA),
              "validate-on": ["submit"],
              state: unref(state),
              class: "space-y-4 w-full md:w-[40vh]",
              onSubmit: unref(login).mutate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).email,
                          "onUpdate:modelValue": ($event) => unref(state).email = $event,
                          type: "email",
                          placeholder: "john.doe@example.com"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Password",
                    name: "password",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UButtonGroup, {
                          orientation: "horizontal",
                          class: "w-full"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(state).password,
                                "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                type: unref(showPassword) ? "text" : "password",
                                placeholder: "******",
                                class: "flex-1"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UButton, {
                                icon: "i-heroicons-eye",
                                color: "white",
                                onClick: ($event) => showPassword.value = !unref(showPassword)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(state).password,
                                  "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                  type: unref(showPassword) ? "text" : "password",
                                  placeholder: "******",
                                  class: "flex-1"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                                createVNode(_component_UButton, {
                                  icon: "i-heroicons-eye",
                                  color: "white",
                                  onClick: ($event) => showPassword.value = !unref(showPassword)
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UButtonGroup, {
                            orientation: "horizontal",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(state).password,
                                "onUpdate:modelValue": ($event) => unref(state).password = $event,
                                type: unref(showPassword) ? "text" : "password",
                                placeholder: "******",
                                class: "flex-1"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                              createVNode(_component_UButton, {
                                icon: "i-heroicons-eye",
                                color: "white",
                                onClick: ($event) => showPassword.value = !unref(showPassword)
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    label: "Submit",
                    color: "black",
                    block: "",
                    loading: unref(login).isPending.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
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
                    createVNode(_component_UFormGroup, {
                      label: "Password",
                      name: "password",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButtonGroup, {
                          orientation: "horizontal",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(state).password,
                              "onUpdate:modelValue": ($event) => unref(state).password = $event,
                              type: unref(showPassword) ? "text" : "password",
                              placeholder: "******",
                              class: "flex-1"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-eye",
                              color: "white",
                              onClick: ($event) => showPassword.value = !unref(showPassword)
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      type: "submit",
                      label: "Submit",
                      color: "black",
                      block: "",
                      loading: unref(login).isPending.value
                    }, null, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                schema: unref(REQUEST_PAYLOAD_SCHEMA),
                "validate-on": ["submit"],
                state: unref(state),
                class: "space-y-4 w-full md:w-[40vh]",
                onSubmit: unref(login).mutate
              }, {
                default: withCtx(() => [
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
                  createVNode(_component_UFormGroup, {
                    label: "Password",
                    name: "password",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButtonGroup, {
                        orientation: "horizontal",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).password,
                            "onUpdate:modelValue": ($event) => unref(state).password = $event,
                            type: unref(showPassword) ? "text" : "password",
                            placeholder: "******",
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-eye",
                            color: "white",
                            onClick: ($event) => showPassword.value = !unref(showPassword)
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    type: "submit",
                    label: "Submit",
                    color: "black",
                    block: "",
                    loading: unref(login).isPending.value
                  }, null, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["schema", "state", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "LoginForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoginForm = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center w-full height-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LoginForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BEa7EQVL.mjs.map
