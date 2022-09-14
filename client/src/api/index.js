import axios from "axios";

const url =
  "curl -XGET 'https://api.newscatcherapi.com/v2/search?q=health' -H 'x-api-key: cKET2NnNCk7FMI1w-iYmeIBX9FNYgIOcYybAsWp9ffY'";

export const fetchNews = () => axios.get(url);
