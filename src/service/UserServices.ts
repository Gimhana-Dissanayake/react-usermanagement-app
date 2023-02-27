import axios from "axios";
import { environment } from "../environments/env";
import User from "../models/User";

class UserService {
  private host = environment.apiUrl;

  public getUsers(): Promise<User[]> {
    return axios.get(`${this.host}/user/list`, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiYXNpdGgiLCJpc3MiOiJHZXQgQXJyYXlzLCBMTEMiLCJleHAiOjE2Nzc5NjA1MTAsImlhdCI6MTY3NzUyODUxMCwiYXV0aG9yaXRpZXMiOlsidXNlcjpyZWFkIiwidXNlcjpjcmVhdGUiLCJ1c2VyOnVwZGF0ZSJdfQ.cKniuUFOn5RgPqgHilcZ598hGlvWvUlydve2d_6v8NuIa1tKpKMDqyArfm3U1IPke6U_mFpll0_YyupHQoVMyQ",
      },
    });
  }
}

const userService = new UserService();

export default userService;
