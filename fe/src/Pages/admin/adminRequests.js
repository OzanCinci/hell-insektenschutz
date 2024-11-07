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
            //console.log("Approved review.");
            return true;
        })
        .catch(e => {
            //console.log("Failed to approve review.");
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
            //console.log("Approved deleted.");
            return true;
        })
        .catch(e => {
            //console.log("Failed to delete review.");
            return false;
        });
};

export const handleOrderUpdate = async (id, cargoInfo, orderStatus, token) => {
    const url = `${URL}/api/management/orders/${id}/${orderStatus}`;
    const configObject = {
        "url": url,
        "method": "put",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data": {
            "cargoCode": cargoInfo
        }
    };

    return await axios.request(configObject)
        .then(res => {
            //console.log("Order status updated.");
            return true;
        })
        .catch(e => {
            //console.log("Failed to update order status");
            return false;
        });
};

export const handleOrderInvoiceRequest = async (id, token) => {
    const url = `${URL}/api/management/orders/${id}/invoice`;
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    return await axios.request(configObject)
        .then(res => {
            return true;
        })
        .catch(e => {
            return false;
        });
};


export const handleLoadContent = async (code, token) => {
    const url = `${URL}/api/orders/${code}`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    };

    return await axios.request(configObject)
        .then(res => {
            //console.log("Loaded order");
            return {
                status: true,
                data: res.data
            };
        })
        .catch(e => {
            //console.log("Failed to lad order");
            return {
                status: false
            };
        });
};

export const handleManagerSearch = async (token) => {
    const url = `${URL}/api/management/users?roles=ADMIN&roles=MANAGER`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    };

    return await axios.request(configObject)
        .then(res => {
            //console.log("Loaded admins");
            return {
                status: true,
                data: res.data
            };
        })
        .catch(e => {
            //console.log("Failed to load admins");
            return {
                status: false
            };
        });
};

export const handleRoleChange = async (id, newRole, token) => {
    const url = `${URL}/api/management/users/change-role/${id}/${newRole}`;
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
            //console.log("Changed role");
            return {
                status: true,
                data: res.data
            };
        })
        .catch(e => {
            //console.log("Failed to change role");
            return {
                status: false
            };
        });
};

export const handleUserSearchByEmail = async (q,token) => {
    const url = `${URL}/api/management/users?email=${q}`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    };

    return await axios.request(configObject)
        .then(res => {
            //console.log("Loaded user by email");
            return {
                status: true,
                data: res.data
            };
        })
        .catch(e => {
            //console.log("Failed to load user by email");
            return {
                status: false
            };
        });
}


export const handleAdminDiscountChange = async (token, id, body) => {
    const url = `${URL}/api/management/discounts/${id}`;
    const configObject = {
        "url": url,
        "method": "put",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        "data": body
    };

    return await axios.request(configObject)
        .then(res => res.data)
        .catch(e => false);
}