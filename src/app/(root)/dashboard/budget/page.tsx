import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BudgetPage = () => {
  return (
    <section className="text-gray-900 w-full bg-red-200">
      <div>
        <Table>
          <TableCaption>A list of your budgets !</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead className="w-24">Status</TableHead>
              <TableHead className="w-32">Date</TableHead>
              <TableHead className="w-28">Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Mutual Funds</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>24 July, 2024</TableCell>
              <TableCell>Monthly</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default BudgetPage;
