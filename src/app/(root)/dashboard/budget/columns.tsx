"use client";

import { ColumnDef } from "@tanstack/react-table";

export type task = {
  id: string;
  title: string;
  status: "Not Started" | "In Progress" | "Done";
  Due: string;
  type: "Monthly" | "Daily" | "Yearly";
  amount: number;
};

export const columns: ColumnDef<task>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "Due",
    header: "Due",
  },
  {
    accessorKey: "Type",
    header: "type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
