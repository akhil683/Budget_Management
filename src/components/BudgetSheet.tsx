"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BudgetSheet() {
  const [date, setDate] = useState<Date>();
  const onClickHandler = () => {};
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-3xl">New Budget</SheetTitle>
        <SheetDescription>
          Create your new budget here. Click save changes when you're done
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input id="title" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="status" className="text-right">
            Status
          </Label>
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Current Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Not Started</SelectItem>
              <SelectItem value="light">In Progress</SelectItem>
              <SelectItem value="system">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="dueDate" className="text-right">
            Due Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="dueDate" className="text-right">
            Type
          </Label>
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Budget Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Daily</SelectItem>
              <SelectItem value="dark">Weekly</SelectItem>
              <SelectItem value="system">Monthly</SelectItem>
              <SelectItem value="system">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="amount" className="text-right">
            Amount
          </Label>
          <Input id="amount" value="500" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit" onClick={onClickHandler}>
            Save changes
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
