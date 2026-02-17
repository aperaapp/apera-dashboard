import { _ as __nuxt_component_12 } from './ListItem-Dn8NVO1F.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PayoutCard",
  __ssrInlineRender: true,
  props: {
    payout: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListItem = __nuxt_component_12;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full overflow-y-auto" }, _attrs))}><div class="mx-auto p-4 grid place-items-center"><p class="text-3xl font-black">$${ssrInterpolate(_ctx.payout.wk_fee + _ctx.payout.bs_fee)}</p><p>Profit</p></div><div class="w-full space-y">`);
      _push(ssrRenderComponent(_component_ListItem, {
        label: "ID",
        value: _ctx.payout.id
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Date",
        value: new Date(_ctx.payout.created_at).toDateString()
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Business",
        value: _ctx.payout.business_name
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Business Payment",
        value: _ctx.payout.bs_amount
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Business Fee",
        value: _ctx.payout.bs_fee
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Worker",
        value: _ctx.payout.worker_name
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Worker Payment",
        value: _ctx.payout.wk_amount
      }, null, _parent));
      _push(ssrRenderComponent(_component_ListItem, {
        label: "Worker Fee",
        value: _ctx.payout.wk_fee
      }, null, _parent));
      _push(`<div class="flex gap-2 items-center justify-center p-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "Go to Worker",
        to: `/dashboard/workers/${_ctx.payout.worker_id}`,
        variant: "soft",
        icon: "i-solar-user-hands-outline"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "Go to Business",
        to: `/dashboard/business/${_ctx.payout.business_id}`,
        variant: "soft",
        icon: "i-solar-shop-linear"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "Go to Gig",
        to: `/dashboard/gigs?id=${_ctx.payout.gig_id}`,
        variant: "soft",
        icon: "i-solar-inbox-unread-linear"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PayoutCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = Object.assign(_sfc_main, { __name: "PayoutCard" });

export { __nuxt_component_11 as _ };
//# sourceMappingURL=PayoutCard-DhdZ0nCY.mjs.map
