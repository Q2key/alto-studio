import React, { useEffect, useState } from 'react';
import { SubscriptionClient } from '../../api';
import { ISubscriptionDto } from '../../dto/subscription/ISubscriptionDto';
import { PageContainer } from '../../components/PageContainer/PageContainer';

export const SubscriptionsPage: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<ISubscriptionDto[]>([]);
    
    useEffect(() => {
        SubscriptionClient
        .loadSubscriptions()
        .then((data) => {
            setSubscriptions(data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]);
    
    return (
        <PageContainer title='Подписки'>
            <ul>
                {subscriptions.map((el, i) => {
                    return <li key={i}>{JSON.stringify(el)}</li>
                })}
            </ul>
        </PageContainer>
    )
}