export type LoginHookProps = { user: string; password: string };
export type LoginFirebaseProps = LoginHookProps;
export type GetLoginQueryProps = {
  user: string | undefined;
  password: string | undefined;
  sendLogin: boolean;
  setLoginFail: (e: boolean) => void;
};
export interface UserDb {
  user_name: string;
  name: string;
  last_name: string;
}
