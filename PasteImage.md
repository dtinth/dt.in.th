---
public: true
title: Paste image
---

# Paste image

:::lead
Paste an image on this page to open it in a new tab. From there, you can then drag and drop it into another application.
:::

<script setup>
  const onPaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let index in items) {
      const item = items[index];
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        window.open(URL.createObjectURL(blob), '_blank');
      }
    }
  };
  Vue.onMounted(() => {
    document.addEventListener('paste', onPaste);
  });
  Vue.onUnmounted(() => {
    document.removeEventListener('paste', onPaste);
  });
</script>
