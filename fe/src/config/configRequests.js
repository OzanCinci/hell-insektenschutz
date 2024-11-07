import axios from "axios";

const URL = process.env.REACT_APP_BE_API;
export const handleLoadDiscountConfig = async () => {
    const url = `${URL}/api/common/discount-config`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
        },
    };

    return await axios.request(configObject)
        .then(res => res.data)
        .catch(e => false);
};