(function () {
  const memoryStore = new Map();

  function canUseLocalStorage() {
    try {
      const key = "__grandma_helper_storage_test__";
      window.localStorage.setItem(key, "1");
      window.localStorage.removeItem(key);
      return true;
    } catch (_) {
      return false;
    }
  }

  const hasLocalStorage = canUseLocalStorage();

  function readRaw(key) {
    if (!hasLocalStorage) return memoryStore.get(key) || null;
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return memoryStore.get(key) || null;
    }
  }

  function writeRaw(key, value) {
    memoryStore.set(key, value);
    if (!hasLocalStorage) return;
    try {
      window.localStorage.setItem(key, value);
    } catch (_) {}
  }

  function remove(key) {
    memoryStore.delete(key);
    if (!hasLocalStorage) return;
    try {
      window.localStorage.removeItem(key);
    } catch (_) {}
  }

  function getString(key, fallback = "") {
    const value = readRaw(key);
    return value === null || value === undefined ? fallback : value;
  }

  function setString(key, value) {
    writeRaw(key, String(value));
  }

  function getJSON(key, fallback) {
    const value = readRaw(key);
    if (!value) return fallback;
    try {
      return JSON.parse(value);
    } catch (_) {
      return fallback;
    }
  }

  function setJSON(key, value) {
    writeRaw(key, JSON.stringify(value));
  }

  function getAll(keys) {
    return keys.reduce((acc, key) => {
      acc[key] = readRaw(key);
      return acc;
    }, {});
  }

  window.appStorage = {
    available: hasLocalStorage,
    getString,
    setString,
    getJSON,
    setJSON,
    remove,
    getAll
  };
})();
