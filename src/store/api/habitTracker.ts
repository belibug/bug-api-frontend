import axios from "axios";
import { isHabitTracker } from "../../interfaces/index";

// todo : use environment variables for setting up baseURL

class HabitTrackerApi {
  HabitTrackerURI;
  constructor() {
    this.HabitTrackerURI = axios.create({
      baseURL: "https://bapi.belibug.com/habittracker",
      // baseURL: "http://localhost:9000",
      auth: {
        username: "bug",
        password: "notforeveryoneP@ssw0rd",
      },
    });
  }

  async getEntries(limit: number): Promise<isHabitTracker[] | undefined> {
    try {
      console.log("Getting notes");
      const res = await this.HabitTrackerURI.get(`/read?limit=${limit}`);
      return res.data as isHabitTracker[];
    } catch (e) {
      console.error("failed to fetch : /read : ", e);
    }
  }

  async addEntry(note: isHabitTracker) {
    try {
      const res = await this.HabitTrackerURI.post(`/create`, note);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new HabitTrackerApi();
