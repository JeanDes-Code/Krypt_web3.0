import React, { useContext } from 'react'

import { TransactionContext } from './../context/TransactionContext'

import dummyData from '../utils/dummyData'

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext)

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">
                        Dernières transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">
                        Connectez votre compte pour voir les dernières
                        transactions
                    </h3>
                )}
                {/* Lastest Transactions /*}
                {/*Connect you Account to see the lastest transactions */}
            </div>
        </div>
    )
}

export default Transactions
