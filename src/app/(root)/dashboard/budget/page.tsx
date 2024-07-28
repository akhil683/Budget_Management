import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Budgets from "@/constants/budgetData";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BudgetSheet } from "@/components/BudgetSheet";

const BudgetPage = () => {
  return (
    <section className="text-gray-900 w-full m-8">
      <div>
        <h1 className="font-semibold text-4xl ">Neighbour Buget</h1>
        <p className="text-sm text-gray-700 my-2">
          Neighbour's budget for 3rd year parties
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>New</Button>
        </SheetTrigger>
        <BudgetSheet />
      </Sheet>
      <div className="my-8">
        <DataTable columns={columns} data={Budgets} />
      </div>
    </section>
  );
};

export default BudgetPage;
