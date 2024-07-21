import axios from 'axios';
const URL = process.env.REACT_APP_BE_API;

export const handleReviewApprove = async (reviewID, token) => {
    const url = `${URL}/api/management/reviews/${reviewID}`;
    const configObject = {
        "url": url,
        "method": "put",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    };

    return await axios.request(configObject)
        .then(res => {
            console.log("Approved review.");
            return true;
        })
        .catch(e => {
            console.log("Failed to approve review.");
            return false;
        });
};

export const handleReviewDelete = async (reviewID, token) => {
    const url = `${URL}/api/management/reviews/${reviewID}`;
    const configObject = {
        "url": url,
        "method": "delete",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    };

    return await axios.request(configObject)
        .then(res => {
            console.log("Approved deleted.");
            return true;
        })
        .catch(e => {
            console.log("Failed to delete review.");
            return false;
        });
}