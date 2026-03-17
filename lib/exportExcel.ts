import * as XLSX from "xlsx";
import { Order } from "../types/order";

export function exportExcel(orders: Order[]) {
  const rows = orders.map((o) => ({
    Date: o.date,
    OrderID: o.order_id,
    Name: o.name,
    Address: o.address,
    Phone: o.phone,
    Phone2: o.phone2,
    Products: o.products.join(", "),
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

  XLSX.writeFile(workbook, "orders.xlsx");
}
