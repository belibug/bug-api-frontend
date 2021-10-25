export interface isNote {
  id?: string;
  title: string;
  body: string;
  status?: string;
  timestamp?: string;
}
export interface isTimeTracker {
  id?: string;
  name: string;
  category: string;
  duration: number;
  comment?: string;
  timestamp?: string;
}
export interface isLastTime {
  id?: string;
  name: string;
  category: string;
  tags?: string;
  timestamp?: string;
  comment?: string;
}
export interface isHabitTracker {
  id?: string;
  name: string;
  type: "good" | "bad";
  timestamp?: string;
  comment?: string;
}
