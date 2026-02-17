import { b as useRoute, e as useRouter } from './server.mjs';
import { ref, watch } from 'vue';
import { d as defineShortcuts } from './defineShortcuts-Dh20htKv.mjs';
import { c as createSharedComposable } from './index-bOJEI7id.mjs';

const _useDashboard = () => {
  const route = useRoute();
  const router = useRouter();
  const isHelpSlideoverOpen = ref(false);
  const isNotificationsSlideoverOpen = ref(false);
  defineShortcuts({
    "g-h": () => router.push("/"),
    "g-i": () => router.push("/inbox"),
    "g-u": () => router.push("/users"),
    "g-s": () => router.push("/settings"),
    "?": () => isHelpSlideoverOpen.value = true,
    "n": () => isNotificationsSlideoverOpen.value = true
  });
  watch(() => route.fullPath, () => {
    isHelpSlideoverOpen.value = false;
    isNotificationsSlideoverOpen.value = false;
  });
  return {
    isHelpSlideoverOpen,
    isNotificationsSlideoverOpen
  };
};
const useDashboard = createSharedComposable(_useDashboard);

export { useDashboard as u };
//# sourceMappingURL=useDashboard-CHyEyBSu.mjs.map
