import { RellaxInstance, type RellaxOptions } from "rellax";
import { Ref } from "vue";
declare module "#app" {
  interface NuxtApp {
    $initRellax: (className: string, options: RellaxOptions) => void;
    $destroyRellax: () => void;
    $rellax: Ref<RellaxInstance | null>;
  }
}
