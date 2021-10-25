import axios from "axios";
import { isNote } from "../../interfaces/index";

// todo : use environment variables for setting up baseURL

class NotesApi {
  NotesURI;
  constructor() {
    this.NotesURI = axios.create({
      baseURL: "https://bapi.belibug.com/notes",
      // baseURL: "http://localhost:9000",
      auth: {
        username: "bug",
        password: "notforeveryoneP@ssw0rd",
      },
    });
  }

  async getNotes(limit: number): Promise<isNote[] | undefined> {
    try {
      console.log("Getting notes");
      const res = await this.NotesURI.get(`/read?limit=${limit}`);
      return res.data as isNote[];
    } catch (e) {
      console.error("failed to fetch : /read : ", e);
    }
  }

  async getPing() {
    try {
      const res = await this.NotesURI.get(`/`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
  async addNote(note: isNote) {
    try {
      const res = await this.NotesURI.post(`/create`, note);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new NotesApi();
