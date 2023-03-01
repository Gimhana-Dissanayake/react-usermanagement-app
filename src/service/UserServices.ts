import axios, { AxiosResponse } from "axios";
import { AddNewUserDTO } from "../dtos/AddNewUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { environment } from "../environments/env";
import User from "../models/User";

class UserService {
  private host = environment.apiUrl;

  public getUsers(): Promise<{ data: User[] }> {
    return axios.get(`${this.host}/user/list`);
  }

  public updateUser(
    updateUserDTO: UpdateUserDTO
  ): Promise<AxiosResponse<User, any>> {
    return axios.post(`${this.host}/user/update`, null, {
      params: updateUserDTO,
    });
  }

  public addUser(user: AddNewUserDTO): Promise<AxiosResponse<User, any>> {
    return axios.post(`${this.host}/user/add`, null, { params: user });
  }

  // public updateUser(user: any): Promise<any> {
  //   return axios.post(`${this.host}/user/update`, null, {
  //     params: { currentUsername: user.currentUsername },
  //   });
  // }
}

const userService = new UserService();

export default userService;
