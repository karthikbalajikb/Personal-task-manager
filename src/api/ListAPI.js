import axios from "axios";

const protocol = window.location.protocol;
const hostname = window.location.hostname;
const BASEURL = `${protocol}//${hostname}:3456`;

class ListAPI {
  fetchAllLists() {
    return axios.get(`${BASEURL}/lists`).then(res => res.data);
  }

  fetchAllBoards() {
    return axios.get(`${BASEURL}/boards`).then(res => res.data);
  }
}
export default ListAPI;
