import { Button } from "@/components/ui";
import { Trash2 } from "lucide-react";
import { DatePicker } from "./date-picker";
import { ClientInfoModal } from "./modals/client-info-modal";
const ClientInfo = () => {
  return (
    <div className="mt-10 flex flex-row items-start justify-between">
      <div>
        <p className="text-sm text-gray-500">Billed To</p>
        <p>ali smap</p>
        <ClientInfoModal />
        <Button
          variant={"link"}
          className="-mt-2 flex flex-row gap-1 p-0 font-normal"
        >
          <Trash2 className="text-primary h-4 w-4" />
          Remove client
        </Button>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="text-sm text-gray-500">Date of issue</p>
          <div className="flex flex-row items-center gap-1">
            <p>2024-07-01</p>
            <DatePicker />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Due Date</p>
          <div className="flex flex-row items-center gap-1">
            <p>2024-07-01</p>
            <DatePicker />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Invoice Number</p>
        <p>0000273</p>
      </div>

      <div>
        <p className="text-sm text-gray-500">Amount Due (MAD)</p>
        <p className="text-xl">1,2238 DHS</p>
      </div>
    </div>
  );
};

export default ClientInfo;
