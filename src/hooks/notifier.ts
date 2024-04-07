import { INotification } from "@/interfaces/INotification";
import { store } from "@/store";
import { NOTIFY } from "@/store/type-mutations";

type Notifier = {
  notify: (title: string, text: string) => void;
};

export default (): Notifier => {
  const notify = (title: string, text: string): void => {
    store.commit(NOTIFY, {
      title,
      text,
    } as INotification);
  };

  return {
    notify,
  };
};
