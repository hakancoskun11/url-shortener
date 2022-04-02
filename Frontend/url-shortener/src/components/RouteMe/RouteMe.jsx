import React from "react";
import { useParams } from "react-router-dom";

import {AxiosGet} from  "../../utilities/Axios"

const RouteMe = () => {

    const {code} = useParams();
    
    React.useEffect(() => {
        AxiosGet(`/show/${code}`).then(
            res => {
                window.location = res.data.url;
            }
        )

    });
    return <div>{code}</div>
}

export default RouteMe;