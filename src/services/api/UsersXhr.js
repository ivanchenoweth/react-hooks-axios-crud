import API from './index';

class UsersXhr {

  addUserXhr = async (user) => {
     return await API.post(`artists`, user);
  }

  updateUserXhr = async (user) => {
    let id = user.id;
    let ret = await API.put(`artists/${id}`,user)
    return ret;
  }

  getAllUsersXhr = async event => {
    return await API.get('artists');
  };

  deleteUser = async (id) => {
    return await API.delete(`artists/${id}`)
  };

}

export default new UsersXhr();
