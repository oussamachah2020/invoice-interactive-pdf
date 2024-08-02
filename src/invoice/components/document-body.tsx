import { useState, ChangeEvent } from "react";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { Reorder } from "framer-motion";
import { LogsIcon, PlusIcon, TrashIcon } from "lucide-react";

interface Invoice {
  invoice: string;
  paymentStatus: string;
  paymentMethod: string;
  totalAmount: string;
}

const initialInvoices: Invoice[] = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

const DocumentBody = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [tempValues, setTempValues] = useState<Partial<Invoice>>({});

  const handleDoubleClick = (
    index: number,
    field: keyof Invoice,
    value: string
  ) => {
    setEditingRow(index);
    setTempValues({ ...tempValues, [field]: value });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Invoice
  ) => {
    setTempValues({ ...tempValues, [field]: e.target.value });
  };

  const handleBlur = (index: number) => {
    const updatedInvoices = [...invoices];
    updatedInvoices[index] = { ...updatedInvoices[index], ...tempValues };
    setInvoices(updatedInvoices);
    setEditingRow(null);
    setTempValues({});
  };

  return (
    <div className="mt-10">
      <Reorder.Group axis="y" onReorder={setInvoices} values={invoices}>
        <Table className="w-full">
          <TableHeader className="flex w-full justify-start text-left">
            <TableRow className="flex w-full pt-5">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead className="w-[100px] text-left">Description</TableHead>
              <TableHead className="flex-1 text-left">Rate</TableHead>
              <TableHead className="flex-1 text-left">Qty</TableHead>
              <TableHead className="w-[100px] text-right">Line Total</TableHead>
              <TableHead className="w-[100px] text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <Reorder.Item key={invoice.invoice} value={invoice}>
                <TableRow className="flex w-full">
                  <TableCell className="w-[50px]">
                    <LogsIcon className="h-5 w-5 cursor-move" />
                  </TableCell>
                  <TableCell className="w-[100px] text-left font-medium">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={tempValues.invoice ?? invoice.invoice}
                        onChange={(e) => handleChange(e, "invoice")}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(index, "invoice", invoice.invoice)
                        }
                      >
                        {invoice.invoice}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="flex-1 text-left">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={
                          tempValues.paymentStatus ?? invoice.paymentStatus
                        }
                        onChange={(e) => handleChange(e, "paymentStatus")}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(
                            index,
                            "paymentStatus",
                            invoice.paymentStatus
                          )
                        }
                      >
                        {invoice.paymentStatus}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="flex-1 text-left">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={
                          tempValues.paymentMethod ?? invoice.paymentMethod
                        }
                        onChange={(e) => handleChange(e, "paymentMethod")}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(
                            index,
                            "paymentMethod",
                            invoice.paymentMethod
                          )
                        }
                      >
                        {invoice.paymentMethod}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="w-[100px] text-right">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={tempValues.totalAmount ?? invoice.totalAmount}
                        onChange={(e) => handleChange(e, "totalAmount")}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(
                            index,
                            "totalAmount",
                            invoice.totalAmount
                          )
                        }
                      >
                        {invoice.totalAmount}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="flex w-[100px] justify-end text-left">
                    <TrashIcon className="h-4 w-4 cursor-pointer" />
                  </TableCell>
                </TableRow>
              </Reorder.Item>
            ))}
          </TableBody>
        </Table>
      </Reorder.Group>
      <Button
        variant="outline"
        className="mt-2 flex w-full justify-center gap-1 border-2 border-dashed p-3"
        onClick={() => {
          // Add logic to add a new record
        }}
      >
        <PlusIcon className="h-4 w-4" />
        <span>Add Record</span>
      </Button>
    </div>
  );
};

export default DocumentBody;
