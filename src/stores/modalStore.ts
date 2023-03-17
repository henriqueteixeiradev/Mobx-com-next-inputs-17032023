import { makeAutoObservable } from "mobx";

export const modalStore = makeAutoObservable(
  {
    isOpen: false,
    setOpen(isOpen: boolean) {
      this.isOpen = isOpen;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  {},
  { autoBind: true }
);
