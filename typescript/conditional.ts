//a type is dependent on another type
type DShikh = {
  w1: string;
  w2: string;
};
type CheckTypeProp<T, K> = K extends keyof T ? true : false;

type res = CheckTypeProp<DShikh, "w3">;

type IBandu = "MOKIA" | "SOKINA" | "DONIK";

type CheckTypeProp2<T, K>= T extends K ? never : T

type res2 = CheckTypeProp2<IBandu, "MOKIA">