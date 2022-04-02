import React from 'react';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import {  UsersIcon, CashIcon,ClipboardListIcon } from '@heroicons/react/outline'
import StatCard from "./StatCard";
import Divider from "@/Divider";

const stats = [
    { id: 1, name: 'Total Revenue', stat: '71,897', icon: CashIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Total Orders', stat: '58.16%', icon: UsersIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Total Revenue (Today)', stat: '24.57%', icon: CashIcon, change: '3.2%', changeType: 'decrease' },
    { id: 3, name: 'Total Orders (Today)', stat: '24.57%', icon: ClipboardListIcon  , change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Home() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <dl className="stats mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <StatCard key={item.id} item={item} />
                ))}
            </dl>
            <Divider/>

        </div>
    );
}

export default Home;