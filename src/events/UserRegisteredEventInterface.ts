import { SubjectEnum } from "./SubjectEnum";

export interface UserRegisteredEventInterface {
  subject: SubjectEnum.UserRegistered;
  data: {
    userId: string;
    email: string;
  };
}
