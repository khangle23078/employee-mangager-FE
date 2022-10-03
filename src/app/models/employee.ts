import { department } from "./department";
import { role } from "./role";

export interface employee {
   id?: number,
   username?: string,
   fullname: string,
   birthday: string,
   email: string,
   pass?: string,
   role: role,
   department: department,
   degree: string,
   specialize: string
}