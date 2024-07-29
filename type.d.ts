type task = {
  id: string;
  title: string;
  status: "Not Started" | "In Progress" | "Done";
  Due: string;
  assign: string[];
  type: "Monthly" | "Daily" | "Yearly";
  amount: number;
};
