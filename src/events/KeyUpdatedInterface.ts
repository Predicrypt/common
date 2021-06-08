import { SubjectEnum } from "./SubjectsEnum";

export interface KeysUpdatedInterface {
  subject: SubjectEnum.KeysUpdated;
  data: {
    apiKey: string;
    secretKey: string;
  };
}
