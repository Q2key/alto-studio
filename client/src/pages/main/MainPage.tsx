import React, { useEffect, useState } from "react";
import { SubscriptionClient } from "../../api";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";

export const MainPage: React.FC = ({}) => {
    const [subscriptions, setSubscriptions] = useState<ISubscriptionDto[]>([]);
    useEffect(() => {
        SubscriptionClient.loadSubscriptions()
        .then((data) => {
            setSubscriptions(data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]);

    
    return (
        <div>
            <ul>
                {subscriptions.map((el, i) => {
                    return <li key={i}>{JSON.stringify(el)}</li>
                })}
            </ul>
        </div>
    )
}