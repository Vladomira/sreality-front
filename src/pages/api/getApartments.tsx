import axios from "axios";
export const baseURL =
    "https://www.sreality.cz/api/en/v2/estates?category_main_cb=4&category_type_cb=1";
// "https://www.sreality.cz/api/en/v2/estates?category_main_cb=4&category_type_cb=1&page=2&per_page=20&tms=1673886502176";

export const getItems = async (page: string, per_page: string) => {
    const data = await axios.get(
        `${baseURL}&page=${page}&per_page=${per_page}&tms=1673886502176`
    );
    return data;
};
