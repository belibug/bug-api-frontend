import axios from "axios";
import { isLastTime } from "../../interfaces/index";

// todo : use environment variables for setting up baseURL

class LastTimeApi {
  LastTimeURI;
  constructor() {
    this.LastTimeURI = axios.create({
      baseURL: "https://bapi.belibug.com/lasttime",
      // baseURL: "http://localhost:9000",
      auth: {
        username: "bug",
        password: "notforeveryoneP@ssw0rd",
      },
    });
  }

  async getEntries(limit: number): Promise<isLastTime[] | undefined> {
    try {
      console.log("Getting notes");
      const res = await this.LastTimeURI.get(`/read?limit=${limit}`);
      return res.data as isLastTime[];
    } catch (e) {
      console.error("failed to fetch : /read : ", e);
    }
  }

  async addEntry(note: isLastTime) {
    try {
      const res = await this.LastTimeURI.post(`/create`, note);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new LastTimeApi();
