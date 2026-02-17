import { _ as __nuxt_component_12 } from './ListItem-Dn8NVO1F.mjs';
import { b as __nuxt_component_5 } from './DashboardNavbar-BWbGc5-K.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GigCard",
  __ssrInlineRender: true,
  props: {
    gig: {}
  },
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListItem = __nuxt_component_12;
      const _component_UBadge = __nuxt_component_5;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-y-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "ID",
        value: _ctx.gig.id
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Title",
        value: _ctx.gig.title
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Hourly Pay",
        value: _ctx.gig.hourly_pay
      }, null, _parent));
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_ListItem, {
        class: "flex-1",
        label: "Status"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              label: _ctx.gig.status.replace("_", " "),
              color: getStatusColor(_ctx.gig.status),
              variant: "solid",
              class: "capitalize mt-2",
              ui: { rounded: "rounded-full" },
              icon: "i-solar-notification-unread-linear"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                label: _ctx.gig.status.replace("_", " "),
                color: getStatusColor(_ctx.gig.status),
                variant: "solid",
                class: "capitalize mt-2",
                ui: { rounded: "rounded-full" },
                icon: "i-solar-notification-unread-linear"
              }, null, 8, ["label", "color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        class: "flex-1",
        label: "Posted By",
        value: _ctx.gig.business_name
      }, null, _parent));
      _push(`</div><div class="flex">`);
      if (_ctx.gig.matched_worker_id) {
        _push(ssrRenderComponent(_component_ListItem, {
          label: "Matched Worker",
          class: "flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                label: "Open Profile",
                to: `/dashboard/workers/${_ctx.gig.matched_worker_id}`,
                variant: "soft",
                ui: { rounded: "rounded-full" },
                size: "xs",
                class: "mt-2"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  label: "Open Profile",
                  to: `/dashboard/workers/${_ctx.gig.matched_worker_id}`,
                  variant: "soft",
                  ui: { rounded: "rounded-full" },
                  size: "xs",
                  class: "mt-2"
                }, null, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.gig.assigned_worker_id) {
        _push(ssrRenderComponent(_component_ListItem, {
          label: "Assigned Worker",
          class: "flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                label: "Open Profile",
                to: `/dashboard/workers/${_ctx.gig.matched_worker_id}`,
                variant: "soft",
                ui: { rounded: "rounded-full" },
                size: "xs",
                class: "mt-2"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  label: "Open Profile",
                  to: `/dashboard/workers/${_ctx.gig.matched_worker_id}`,
                  variant: "soft",
                  ui: { rounded: "rounded-full" },
                  size: "xs",
                  class: "mt-2"
                }, null, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Start Date",
        value: new Date(_ctx.gig.start_time).toLocaleDateString("en-US"),
        class: "flex-1"
      }, null, _parent));
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Start Time",
        value: new Date(_ctx.gig.start_time).toLocaleTimeString("en-US"),
        class: "flex-1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "End Time",
        value: new Date(_ctx.gig.end_time).toLocaleTimeString("en-US"),
        class: "flex-1"
      }, null, _parent));
      _push(`</div><div class="flex">`);
      if (_ctx.gig.clock_in_time) {
        _push(ssrRenderComponent(_component_ListItem, {
          label: "Clock In Time",
          value: new Date(_ctx.gig.clock_in_time).toLocaleTimeString("en-US"),
          class: "flex-1"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.gig.clock_out_time) {
        _push(ssrRenderComponent(_component_ListItem, {
          label: "Clock Out Time",
          value: new Date(_ctx.gig.clock_out_time).toLocaleTimeString("en-US"),
          class: "flex-1"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Required Specialties",
        value: _ctx.gig.required_specialties.join(", ")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Posted By",
        value: _ctx.gig.business_name
      }, null, _parent));
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Posted On",
        value: new Date(_ctx.gig.created_at).toDateString(),
        class: "flex-1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Posted At",
        value: new Date(_ctx.gig.created_at).toLocaleTimeString("en-US"),
        class: "flex-1"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Location",
        value: _ctx.gig.location_name
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Description",
        value: _ctx.gig.description
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Extra Instructions",
        value: _ctx.gig.extra_instructions
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GigCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main, { __name: "GigCard" });

export { __nuxt_component_11 as _ };
//# sourceMappingURL=GigCard-sH6p1mms.mjs.map
