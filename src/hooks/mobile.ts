import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

type Mobile = {
  isMobile: () => boolean;
};

export default (): Mobile => {
  const isMobile = (): boolean => {
    const { width } = useWindowSize();
    return computed(() => width.value < 768).value;
  };

  return {
    isMobile,
  };
};
