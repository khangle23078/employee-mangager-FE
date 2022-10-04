import { department } from "./department";
import { role } from "./role";

export interface employee {
   id?: number,
   fullname: string,
   birthday: string,
   email: string,
   role: role,
   department: department,
   degree: string,
   specialize: string
}

