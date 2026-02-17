import { _ as __nuxt_component_0 } from './DashboardPanelContent-CWR_KFWL.mjs';
import { _ as __nuxt_component_1 } from './DashboardSection-CLrGZ87G.mjs';
import { u as useSupabaseClient, y as useNuxtApp, _ as __nuxt_component_1$1, a as __nuxt_component_1$3 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Card-B4YJjzl5.mjs';
import { _ as __nuxt_component_2 } from './Input-DAwJQMOP.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3 } from './ErrorCard-CuXRrSP8.mjs';
import { _ as __nuxt_component_6 } from './SelectMenu-CkXj8oEj.mjs';
import { _ as __nuxt_component_0$2 } from './Dropdown-DMBXpvvs.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, isRef, openBlock, createBlock, Fragment, renderList, createCommentVNode, reactive } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_8 } from './DashboardModal-BcmmY87y.mjs';
import { _ as __nuxt_component_1$2, a as __nuxt_component_2$2 } from './FormGroup-BXasiweK.mjs';
import { _ as __nuxt_component_4 } from './ButtonGroup-BSSLrlJX.mjs';
import z from 'zod';
import { u as useClipboard } from './index-bOJEI7id.mjs';
import { useQuery, useMutation } from '@tanstack/vue-query';
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
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './useFormGroup-CqsCLfTh.mjs';
import './combobox-BFxCJ4T7.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-177Cd7sN.mjs';
import './usePopper-C_2kou-4.mjs';
import './Kbd-Yu76GohJ.mjs';
import './Modal-0QOr5npF.mjs';
import './transition-BOGEnzeo.mjs';
import './portal-CkOWSbPc.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MembersList",
  __ssrInlineRender: true,
  props: {
    members: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    function getItems(member) {
      return [[{
        label: "Edit member",
        click: () => console.log("Edit", member)
      }, {
        label: "Remove member",
        labelClass: "text-red-500 dark:text-red-400",
        click: () => console.log("Remove", member)
      }]];
    }
    function onRoleChange(member, role) {
      console.log(member.name, role);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = __nuxt_component_1$3;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UDropdown = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({
        role: "list",
        class: "divide-y divide-gray-200 dark:divide-gray-800"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.members, (member, index) => {
        _push(`<li class="flex items-center justify-between gap-3 py-3 px-4 sm:px-6"><div class="flex items-center gap-3 min-w-0">`);
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { src: member.avatar }, {
          alt: member.name,
          size: "md"
        }), null, _parent));
        _push(`<div class="text-sm min-w-0"><p class="text-gray-900 dark:text-white font-medium truncate">${ssrInterpolate(member.name)}</p><p class="text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(member.email)}</p></div></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_USelectMenu, {
          "model-value": member.role,
          options: ["member", "owner"],
          color: "white",
          "ui-menu": { select: "capitalize", option: { base: "capitalize" } },
          "onUpdate:modelValue": ($event) => onRoleChange(member, $event)
        }, null, _parent));
        _push(ssrRenderComponent(_component_UDropdown, {
          items: getItems(member),
          position: "bottom-end"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons-ellipsis-vertical",
                color: "gray",
                variant: "ghost"
              }, null, _parent2, _scopeId));
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
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/MembersList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "SettingsMembersList" });
function generatePassword(length) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
  const allCharacters = lowercase + uppercase + numbers + specialCharacters;
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MembersForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { $toast } = useNuxtApp();
    const client = useSupabaseClient();
    const emit = __emit;
    const REQUEST_PAYLOAD_SCHEMA = z.object({
      fullname: z.string().min(3, "Full Name is required"),
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      role: z.string().min(3, "Role is required")
    });
    const state = reactive({
      password: "",
      email: "",
      role: "",
      fullname: ""
    });
    const createAdminMutation = useMutation({
      mutationFn: async (event) => {
        const { error, data } = await client.functions.invoke("create-dashboard-user", {
          body: event.data
        });
        if (error) {
          console.log({ error });
          throw error;
        }
        if (data.error) {
          throw new Error(data.error);
        }
        return true;
      },
      onSuccess: () => {
        $toast.success("Admin account created", { description: "Share the password to the admin" });
        emit("close");
      },
      onError: (error) => {
        $toast.error("Error adding member", { description: error.message });
      }
    });
    const showPassword = ref(false);
    const { copy } = useClipboard();
    function genPassword() {
      const password = generatePassword(6);
      console.log({ password });
      state.password = password;
      showPassword.value = true;
      copy(password);
      $toast.success("Password copied");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1$2;
      const _component_UFormGroup = __nuxt_component_2$2;
      const _component_UInput = __nuxt_component_2;
      const _component_USelectMenu = __nuxt_component_6;
      const _component_UButtonGroup = __nuxt_component_4;
      const _component_UButton = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        schema: unref(REQUEST_PAYLOAD_SCHEMA),
        "validate-on": ["submit"],
        state: unref(state),
        class: "space-y-4",
        onSubmit: unref(createAdminMutation).mutate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Full name",
              name: "fullname"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).fullname,
                    "onUpdate:modelValue": ($event) => unref(state).fullname = $event,
                    type: "name",
                    placeholder: "John Doe",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).fullname,
                      "onUpdate:modelValue": ($event) => unref(state).fullname = $event,
                      type: "name",
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
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Role",
              name: "role"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelectMenu, {
                    modelValue: unref(state).role,
                    "onUpdate:modelValue": ($event) => unref(state).role = $event,
                    options: ["Viewer", "Editor", "Manager"],
                    "ui-menu": { select: "capitalize", option: { base: "capitalize" } }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelectMenu, {
                      modelValue: unref(state).role,
                      "onUpdate:modelValue": ($event) => unref(state).role = $event,
                      options: ["Viewer", "Editor", "Manager"],
                      "ui-menu": { select: "capitalize", option: { base: "capitalize" } }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Password",
              name: "password",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButtonGroup, {
                    orientation: "horizontal",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).password,
                          "onUpdate:modelValue": ($event) => unref(state).password = $event,
                          type: unref(showPassword) ? "text" : "password",
                          placeholder: "******",
                          class: "flex-1"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-heroicons-eye",
                          color: "white",
                          onClick: ($event) => showPassword.value = !unref(showPassword)
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-heroicons-sparkles",
                          label: "Generate",
                          color: "gray",
                          onClick: genPassword
                        }, null, _parent4, _scopeId3));
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
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-sparkles",
                            label: "Generate",
                            color: "gray",
                            onClick: genPassword
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                        }, null, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          icon: "i-heroicons-sparkles",
                          label: "Generate",
                          color: "gray",
                          onClick: genPassword
                        })
                      ]),
                      _: 1
                    })
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
              label: "Submit",
              color: "black",
              loading: unref(createAdminMutation).isPending.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "Full name",
                name: "fullname"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).fullname,
                    "onUpdate:modelValue": ($event) => unref(state).fullname = $event,
                    type: "name",
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
              createVNode(_component_UFormGroup, {
                label: "Role",
                name: "role"
              }, {
                default: withCtx(() => [
                  createVNode(_component_USelectMenu, {
                    modelValue: unref(state).role,
                    "onUpdate:modelValue": ($event) => unref(state).role = $event,
                    options: ["Viewer", "Editor", "Manager"],
                    "ui-menu": { select: "capitalize", option: { base: "capitalize" } }
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
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        icon: "i-heroicons-sparkles",
                        label: "Generate",
                        color: "gray",
                        onClick: genPassword
                      })
                    ]),
                    _: 1
                  })
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
                  label: "Submit",
                  color: "black",
                  loading: unref(createAdminMutation).isPending.value
                }, null, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/MembersForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "SettingsMembersForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "members",
  __ssrInlineRender: true,
  setup(__props) {
    const client = useSupabaseClient();
    const q = ref("");
    const isInviteModalOpen = ref(false);
    const {
      data: admins,
      isLoading,
      refetch,
      error
    } = useQuery({
      queryKey: ["admins"],
      queryFn: async () => {
        const { data, error: error2 } = await client.from("dashboard_users").select();
        if (error2) {
          throw error2;
        }
        if (!data) {
          throw new Error("No data returned");
        }
        return data;
      }
    });
    const filteredMembers = computed(() => {
      if (!admins.value) return [];
      return admins.value.filter((admin) => {
        return admin.name.search(new RegExp(q.value, "i")) !== -1 || admin.email.search(new RegExp(q.value, "i")) !== -1;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanelContent = __nuxt_component_0;
      const _component_UDashboardSection = __nuxt_component_1;
      const _component_UButton = __nuxt_component_1$1;
      const _component_UCard = __nuxt_component_0$1;
      const _component_UInput = __nuxt_component_2;
      const _component_USkeleton = __nuxt_component_2$1;
      const _component_ErrorCard = __nuxt_component_3;
      const _component_SettingsMembersList = __nuxt_component_7;
      const _component_UDashboardModal = __nuxt_component_8;
      const _component_SettingsMembersForm = __nuxt_component_9;
      _push(ssrRenderComponent(_component_UDashboardPanelContent, mergeProps({ class: "pb-24" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardSection, {
              title: "Manage access",
              description: "Invite new members by email address.",
              orientation: "horizontal",
              ui: { container: "lg:sticky top-2" }
            }, {
              links: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "Add Admin",
                    color: "black",
                    onClick: ($event) => isInviteModalOpen.value = true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      label: "Add Admin",
                      color: "black",
                      onClick: ($event) => isInviteModalOpen.value = true
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCard, {
                    ui: { header: { padding: "p-4 sm:px-6" }, body: { padding: "" } },
                    class: "min-w-0"
                  }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-magnifying-glass",
                          placeholder: "Search admins",
                          autofocus: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(q),
                            "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                            icon: "i-heroicons-magnifying-glass",
                            placeholder: "Search admins",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isLoading)) {
                          _push4(`<div class="w-full space-y-2 p-4"${_scopeId3}><!--[-->`);
                          ssrRenderList(new Array(5).fill(0), (i, index) => {
                            _push4(ssrRenderComponent(_component_USkeleton, {
                              key: index,
                              class: "h-[60px] w-full",
                              ui: { rounded: "rounded-md" }
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(error)) {
                          _push4(ssrRenderComponent(_component_ErrorCard, {
                            title: "Error fetching memebers",
                            message: unref(error).message
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(filteredMembers)) {
                          _push4(ssrRenderComponent(_component_SettingsMembersList, { members: unref(filteredMembers) }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(isLoading) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-full space-y-2 p-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(new Array(5).fill(0), (i, index) => {
                              return openBlock(), createBlock(_component_USkeleton, {
                                key: index,
                                class: "h-[60px] w-full",
                                ui: { rounded: "rounded-md" }
                              });
                            }), 128))
                          ])) : createCommentVNode("", true),
                          unref(error) ? (openBlock(), createBlock(_component_ErrorCard, {
                            key: 1,
                            title: "Error fetching memebers",
                            message: unref(error).message
                          }, null, 8, ["message"])) : createCommentVNode("", true),
                          unref(filteredMembers) ? (openBlock(), createBlock(_component_SettingsMembersList, {
                            key: 2,
                            members: unref(filteredMembers)
                          }, null, 8, ["members"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCard, {
                      ui: { header: { padding: "p-4 sm:px-6" }, body: { padding: "" } },
                      class: "min-w-0"
                    }, {
                      header: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(q),
                          "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                          icon: "i-heroicons-magnifying-glass",
                          placeholder: "Search admins",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      default: withCtx(() => [
                        unref(isLoading) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full space-y-2 p-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(new Array(5).fill(0), (i, index) => {
                            return openBlock(), createBlock(_component_USkeleton, {
                              key: index,
                              class: "h-[60px] w-full",
                              ui: { rounded: "rounded-md" }
                            });
                          }), 128))
                        ])) : createCommentVNode("", true),
                        unref(error) ? (openBlock(), createBlock(_component_ErrorCard, {
                          key: 1,
                          title: "Error fetching memebers",
                          message: unref(error).message
                        }, null, 8, ["message"])) : createCommentVNode("", true),
                        unref(filteredMembers) ? (openBlock(), createBlock(_component_SettingsMembersList, {
                          key: 2,
                          members: unref(filteredMembers)
                        }, null, 8, ["members"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDashboardModal, {
              modelValue: unref(isInviteModalOpen),
              "onUpdate:modelValue": ($event) => isRef(isInviteModalOpen) ? isInviteModalOpen.value = $event : null,
              title: "Create Admin Account",
              description: "Admins have access to the dashbaord",
              ui: { width: "sm:max-w-md" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SettingsMembersForm, {
                    onClose: ($event) => isInviteModalOpen.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SettingsMembersForm, {
                      onClose: ($event) => isInviteModalOpen.value = false
                    }, null, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardSection, {
                title: "Manage access",
                description: "Invite new members by email address.",
                orientation: "horizontal",
                ui: { container: "lg:sticky top-2" }
              }, {
                links: withCtx(() => [
                  createVNode(_component_UButton, {
                    label: "Add Admin",
                    color: "black",
                    onClick: ($event) => isInviteModalOpen.value = true
                  }, null, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UCard, {
                    ui: { header: { padding: "p-4 sm:px-6" }, body: { padding: "" } },
                    class: "min-w-0"
                  }, {
                    header: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        icon: "i-heroicons-magnifying-glass",
                        placeholder: "Search admins",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    default: withCtx(() => [
                      unref(isLoading) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full space-y-2 p-4"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(new Array(5).fill(0), (i, index) => {
                          return openBlock(), createBlock(_component_USkeleton, {
                            key: index,
                            class: "h-[60px] w-full",
                            ui: { rounded: "rounded-md" }
                          });
                        }), 128))
                      ])) : createCommentVNode("", true),
                      unref(error) ? (openBlock(), createBlock(_component_ErrorCard, {
                        key: 1,
                        title: "Error fetching memebers",
                        message: unref(error).message
                      }, null, 8, ["message"])) : createCommentVNode("", true),
                      unref(filteredMembers) ? (openBlock(), createBlock(_component_SettingsMembersList, {
                        key: 2,
                        members: unref(filteredMembers)
                      }, null, 8, ["members"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UDashboardModal, {
                modelValue: unref(isInviteModalOpen),
                "onUpdate:modelValue": ($event) => isRef(isInviteModalOpen) ? isInviteModalOpen.value = $event : null,
                title: "Create Admin Account",
                description: "Admins have access to the dashbaord",
                ui: { width: "sm:max-w-md" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_SettingsMembersForm, {
                    onClose: ($event) => isInviteModalOpen.value = false
                  }, null, 8, ["onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/members.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=members-DKFxlIps.mjs.map
