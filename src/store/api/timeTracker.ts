import axios from "axios";
import { isTimeTracker } from "../../interfaces/index";

// todo : use environment variables for setting up baseURL

class TimeTrackerApi {
  TimeTrackerURI;
  constructor() {
    this.TimeTrackerURI = axios.create({
      baseURL: "https://bapi.belibug.com/timetracker",
      // baseURL: "http://localhost:9000",
      auth: {
        username: "bug",
        password: "notforeveryoneP@ssw0rd",
      },
    });
  }

  async getEntires(limit: number): Promise<isTimeTracker[] | undefined> {
    try {
      console.log("Getting notes");
      const res = await this.TimeTrackerURI.get(`/read?limit=${limit}`);
      return res.data as isTimeTracker[];
    } catch (e) {
      console.error("failed to fetch : /read : ", e);
    }
  }

  async addEntry(note: isTimeTracker) {
    try {
      const res = await this.TimeTrackerURI.post(`/create`, note);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new TimeTrackerApi();
