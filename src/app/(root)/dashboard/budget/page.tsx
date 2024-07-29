import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Budgets from "@/constants/budgetData";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BudgetSheet } from "@/components/BudgetSheet";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const BudgetPage = () => {
  return (
    <section className="text-gray-900 w-full m-16">
      <div>
        <h1 className="font-semibold text-4xl flex items-center gap-6 group">
          Neighbour Buget - 2024{" "}
          <Dialog>
            <DialogTrigger>
              <FaRegEdit className="text-2xl text-gray-400 group-hover:block cursor-pointer hidden" />
            </DialogTrigger>
            <DialogContentComp />
          </Dialog>
        </h1>
        <p className="text-sm text-gray-700 my-2">
          Neighbour's budget for this year's birthday parties
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

const DialogContentComp = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Budget</DialogTitle>
        <DialogDescription>
          Make changes to your budget here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value="Neighbour Budget - 2024"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input
            id="username"
            value="Neighbour's budget for this year's birthday parties"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <DialogTrigger>
          <Button type="submit">Save changes</Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  );
};
