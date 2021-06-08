import { SubjectEnum } from "./SubjectsEnum";

export interface KeysUpdatedEventInterface {
  subject: SubjectEnum.KeysUpdated;
  data: {
    userId: string;
    apiKey: string;
    secretKey: string;
  };
}
