const ApiService = require('../apiService');
const allureAxiosInstance = require('../axiosInstances/allureAxiosInstance');

const allureAxios = new ApiService(allureAxiosInstance);

class AllureRequests {
  static async allureSend(name, path, fileName) {
    await allureAxios.sendFile(`api/allure/upload`, name, path, fileName)
  }

  static async createProject(project, platform, description) {
    await allureAxios.postRequest(`api/allure/project`, {
      project,
      platform,
      description,
      type: 'allure'
    })
  }
}

module.exports = AllureRequests;
