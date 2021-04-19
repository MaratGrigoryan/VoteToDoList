import { PUT_METHOD } from '../Constants/defines';

class Connection {
  static async get(url) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
        console.error(e)
    }
  }

  static async put(url, data) {
    try {
      const response = await fetch(url, {
        method: PUT_METHOD,
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const data = await response.json();
        return JSON.parse(data);
      }
    } catch (e) {
        console.error(e)
    }
  }
}

export default Connection;
