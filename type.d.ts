type task = {
  id: string;
  title: string;
  status: "Not Started" | "In Progress" | "Done";
  Due: string;
  type: "Monthly" | "Daily" | "Yearly";
  amount: number;
};
