import { Course } from "./course";

export interface User {
    courses: string[];
    _id: string,
    email: string,
    username: string,
    password: string,
    created_at: string;
    updatedAt: string;
    __v: number;
}
export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    _id: string;
    courses: Course[];
  }
  
  export interface ProfileDetails {
    username: string;
    email: string;
    _id: string;
    courses: Course[];
  }