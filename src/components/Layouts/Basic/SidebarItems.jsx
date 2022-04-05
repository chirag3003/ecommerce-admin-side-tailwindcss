import React from 'react'
import {Disclosure} from '@headlessui/react'
import {
    ChevronUpIcon,
} from '@heroicons/react/outline'
import sidebarConfig from "@config/sidebar"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function SidebarItems() {
    return (
        <>
            {sidebarConfig.map((item,index) => {
                if (item.list) {

                    return (
                        <Disclosure key={item.name}>
                            {({open}) => (
                                <>
                                    <Disclosure.Button className={classNames(
                                        false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center w-full px-2 py-2 text-base font-medium rounded-md'
                                    )}>
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                'mr-4 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span>{item.name}</span>
                                        <ChevronUpIcon
                                            className={`${!open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500 ml-auto`}
                                        />
                                    </Disclosure.Button>
                                    {item.list.map((item, index) => (
                                        <a key={index} href={item.href}>
                                            <Disclosure.Panel className={classNames(
                                                false ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'group flex items-center     px-6 py-2 text-base font-medium rounded-md'
                                            )}>

                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Disclosure.Panel>
                                        </a>

                                    ))}
                                </>
                            )}
                        </Disclosure>)
                }
                return (
                    <a
                        key={index}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                    >
                        <item.icon
                            className={classNames(
                                item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        {item.name}
                    </a>
                )
            })}
        </>
    )
}

export default SidebarItems