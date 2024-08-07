import create from "zustand";
import { persist } from "zustand/middleware";

type ClientInfo = {
  fullName: string;
  dateOfIssue: Date | null;
  dueDate: Date | null;
};

type ClientInfoState = {
  clientInfo: ClientInfo;
  setClientInfo: (info: Partial<ClientInfo>) => void;
  removeClientInfo: () => void;
};

const useClientInfoStore = create<ClientInfoState>()(
  persist(
    (set) => ({
      clientInfo: { fullName: "" } as ClientInfo,
      setClientInfo: (newInfo: Partial<ClientInfo>) =>
        set((state) => ({
          clientInfo: { ...state.clientInfo, ...newInfo },
        })),
      removeClientInfo: () =>
        set(() => ({
          clientInfo: {
            fullName: "",
            dateOfIssue: null,
            dueDate: null,
          },
        })),
    }),
    {
      name: "client-info-store",
    }
  )
);

export default useClientInfoStore;
