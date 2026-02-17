import { effectScope, computed, getCurrentScope, onScopeDispose, ref, watchEffect, unref, shallowRef, nextTick, getCurrentInstance, readonly, watch, toRaw } from 'vue';

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!scope) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke2) => {
  return invoke2();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?\d+\.?\d*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
const defaultWindow = void 0;
const defaultNavigator = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue2(k, delta) {
    let v = toValue(breakpoints[toValue(k)]);
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow, strategy = "min-width" } = options;
  function match(query) {
    if (!window2)
      return false;
    return window2.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(() => `(min-width: ${getValue2(k)})`, options);
  };
  const smallerOrEqual = (k) => {
    return useMediaQuery(() => `(max-width: ${getValue2(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  function current() {
    const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
    return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
  }
  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k) {
      return useMediaQuery(() => `(min-width: ${getValue2(k, 0.1)})`, options);
    },
    smaller(k) {
      return useMediaQuery(() => `(max-width: ${getValue2(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(() => `(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue2(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue2(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue2(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue2(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`);
    },
    current,
    active() {
      const bps = current();
      return computed(() => bps.value.length === 0 ? "" : bps.value.at(-1));
    }
  });
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  const permissionStatus = shallowRef();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = shallowRef();
  const update = () => {
    var _a, _b;
    state.value = (_b = (_a = permissionStatus.value) == null ? void 0 : _a.state) != null ? _b : "prompt";
  };
  useEventListener(permissionStatus, "change", update);
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus.value) {
      try {
        permissionStatus.value = await navigator.permissions.query(desc);
      } catch (e) {
        permissionStatus.value = void 0;
      } finally {
        update();
      }
    }
    if (controls)
      return toRaw(permissionStatus.value);
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = (void 0).createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    (void 0).body.appendChild(ta);
    ta.select();
    (void 0).execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = void 0) == null ? void 0 : _a.call(void 0)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      if (storage instanceof Storage)
        useEventListener(window2, "storage", update);
      else
        useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(key);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
const DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
function DEFAULT_FORMATTER(date) {
  return date.toISOString().slice(0, 10);
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
  var _a;
  const {
    max,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
    units = DEFAULT_UNITS,
    showSecond = false,
    rounding = "round"
  } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now - +from;
  const absDiff = Math.abs(diff);
  function getValue2(diff2, unit) {
    return roundFn(Math.abs(diff2) / unit.value);
  }
  function format(diff2, unit) {
    const val = getValue2(diff2, unit);
    const past = diff2 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond)
    return messages.justNow;
  if (typeof max === "number" && absDiff > max)
    return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    const unitMax = (_a = units.find((i) => i.name === max)) == null ? void 0 : _a.max;
    if (unitMax && absDiff > unitMax)
      return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    const val = getValue2(diff, unit);
    if (val <= 0 && units[idx - 1])
      return format(diff, units[idx - 1]);
    if (absDiff < unit.max)
      return format(diff, unit);
  }
  return messages.invalid;
}

export { useBreakpoints as a, breakpointsTailwind as b, createSharedComposable as c, useStorage as d, formatTimeAgo as f, useClipboard as u };
//# sourceMappingURL=index-bOJEI7id.mjs.map
