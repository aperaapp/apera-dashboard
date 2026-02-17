import { ref, computed } from 'vue';
import { R as createSharedComposable, C as useDebounceFn, T as useEventListener, Q as toValue, S as useActiveElement } from './server.mjs';

function logicAnd(...args) {
  return computed(() => args.every((i) => toValue(i)));
}
function logicNot(v) {
  return computed(() => !toValue(v));
}
const _useShortcuts = () => {
  const macOS = computed(() => false);
  const metaSymbol = ref(" ");
  const activeElement = useActiveElement();
  const usingInput = computed(() => {
    var _a, _b, _c;
    const tagName = (_a = activeElement.value) == null ? void 0 : _a.tagName;
    const contentEditable = (_b = activeElement.value) == null ? void 0 : _b.contentEditable;
    const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
    if (usingInput2) {
      return ((_c = activeElement.value) == null ? void 0 : _c.name) || true;
    }
    return false;
  });
  return {
    macOS,
    metaSymbol,
    activeElement,
    usingInput
  };
};
const useShortcuts = createSharedComposable(_useShortcuts);
const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
const defineShortcuts = (config, options = {}) => {
  const { macOS, usingInput } = useShortcuts();
  let shortcuts = [];
  const chainedInputs = ref([]);
  const clearChainedInput = () => {
    chainedInputs.value.splice(0, chainedInputs.value.length);
  };
  const debouncedClearChainedInput = useDebounceFn(clearChainedInput, options.chainDelay ?? 800);
  const onKeyDown = (e) => {
    if (!e.key) {
      return;
    }
    const alphabeticalKey = /^[a-z]$/i.test(e.key);
    let chainedKey;
    chainedInputs.value.push(e.key);
    if (chainedInputs.value.length >= 2) {
      chainedKey = chainedInputs.value.slice(-2).join("-");
      for (const shortcut of shortcuts.filter((s) => s.chained)) {
        if (shortcut.key !== chainedKey) {
          continue;
        }
        if (shortcut.condition.value) {
          e.preventDefault();
          shortcut.handler();
        }
        clearChainedInput();
        return;
      }
    }
    for (const shortcut of shortcuts.filter((s) => !s.chained)) {
      if (e.key.toLowerCase() !== shortcut.key) {
        continue;
      }
      if (e.metaKey !== shortcut.metaKey) {
        continue;
      }
      if (e.ctrlKey !== shortcut.ctrlKey) {
        continue;
      }
      if (alphabeticalKey && e.shiftKey !== shortcut.shiftKey) {
        continue;
      }
      if (shortcut.condition.value) {
        e.preventDefault();
        shortcut.handler();
      }
      clearChainedInput();
      return;
    }
    debouncedClearChainedInput();
  };
  shortcuts = Object.entries(config).map(([key, shortcutConfig]) => {
    var _a, _b;
    if (!shortcutConfig) {
      return null;
    }
    let shortcut;
    if (key.includes("-") && key !== "-" && !((_a = key.match(chainedShortcutRegex)) == null ? void 0 : _a.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    if (key.includes("_") && key !== "_" && !((_b = key.match(combinedShortcutRegex)) == null ? void 0 : _b.length)) {
      console.trace(`[Shortcut] Invalid key: "${key}"`);
    }
    const chained = key.includes("-") && key !== "-";
    if (chained) {
      shortcut = {
        key: key.toLowerCase(),
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      };
    } else {
      const keySplit = key.toLowerCase().split("_").map((k) => k);
      shortcut = {
        key: keySplit.filter((k) => !["meta", "ctrl", "shift", "alt"].includes(k)).join("_"),
        metaKey: keySplit.includes("meta"),
        ctrlKey: keySplit.includes("ctrl"),
        shiftKey: keySplit.includes("shift"),
        altKey: keySplit.includes("alt")
      };
    }
    shortcut.chained = chained;
    if (!macOS.value && shortcut.metaKey && !shortcut.ctrlKey) {
      shortcut.metaKey = false;
      shortcut.ctrlKey = true;
    }
    if (typeof shortcutConfig === "function") {
      shortcut.handler = shortcutConfig;
    } else if (typeof shortcutConfig === "object") {
      shortcut = { ...shortcut, handler: shortcutConfig.handler };
    }
    if (!shortcut.handler) {
      console.trace("[Shortcut] Invalid value");
      return null;
    }
    const conditions = [];
    if (!shortcutConfig.usingInput) {
      conditions.push(logicNot(usingInput));
    } else if (typeof shortcutConfig.usingInput === "string") {
      conditions.push(computed(() => usingInput.value === shortcutConfig.usingInput));
    }
    shortcut.condition = logicAnd(...conditions, ...shortcutConfig.whenever || []);
    return shortcut;
  }).filter(Boolean);
  useEventListener("keydown", onKeyDown);
};

export { defineShortcuts as d, useShortcuts as u };
//# sourceMappingURL=defineShortcuts-Dh20htKv.mjs.map
