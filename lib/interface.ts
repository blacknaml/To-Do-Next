export interface Todo {
  id: number;
  user_id: string;
  task: string;
  is_complete: boolean;
  inserted_at: Date;
}

export interface Profile {
  user_id: string;
  firstname: string;
  lastname: string;
  created_at: Date;
}
