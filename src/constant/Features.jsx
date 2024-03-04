import React from 'react'
import {GiPayMoney, GiPiggyBank, GiBanknote} from 'react-icons/gi'
import {AiOutlineSafety} from 'react-icons/ai'


const featureList = [
    {
      name: 'Seamless and Swift Loans',
      description:
      'Experience the ease of financial support at your fingertips with tailor-made loans just for you',
        icon: GiBanknote,
    },
    {
      name: 'Low Interest Loans',
      description:
        'Experience affordable interest loans without compromising on financial service.',
      icon: GiPayMoney,
    },
    {
      name: 'Smarter Savings',
      description:
        'Discover practical tips and tricks to boost your savings and achieve financial goals.',
      icon: GiPiggyBank,
    },
    {
        name: 'Secured and Save Data',
        description:
          'SecuredLoans takes security extremely seriously and ensure we protect our user data using industry standard encryption.',
        icon: AiOutlineSafety,
      },
  ]
export const Features = () => {

  return (
        <div className="mx-auto mt-10 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-2xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featureList.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-extrabold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 mb-10 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
  )
}
