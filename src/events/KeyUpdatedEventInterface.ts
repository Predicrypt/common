import { SubjectEnum } from "./SubjectsEnum";

export interface KeysUpdatedEventInterface {
  subject: SubjectEnum.KeysUpdated;
  data: {
    apiKey: string;
    secretKey: string;
  };
}
