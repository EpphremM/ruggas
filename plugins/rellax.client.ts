import Rellax, { type RellaxInstance, type RellaxOptions } from "rellax";

export default defineNuxtPlugin((nuxtApp) => {
  let rellax: Ref<RellaxInstance | null> = ref(null);

  const initRellax = (className: string, options?: RellaxOptions) => {
    if (rellax.value != null) {
      rellax.value.destroy();
    }
    rellax.value = new Rellax(className, options);
  };

  const destroyRellax = () => {
    if (rellax.value != null) {
      rellax.value.destroy();
      rellax.value = null;
    }
  };

  return {
    provide: {
      rellax,
      initRellax,
      destroyRellax,
    },
  };
});
