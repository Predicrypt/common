import { SubjectEnum } from "./SubjectsEnum";

export interface UserRegisteredEventInterface {
  subject: SubjectEnum.UserRegistered;
  data: {
    userId: string;
    email: string;
  };
}
