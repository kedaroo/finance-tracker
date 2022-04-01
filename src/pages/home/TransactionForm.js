import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid }) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ uid, name, amount })
    }

    const clearFormFields = () => {
        setName('')
        setAmount('')
    }

    useEffect(() => {
        if (response.success) {
            clearFormFields()
        }
    }, [response.success])

    return (
        <>
            <h3>add a transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>transaction name:</span>
                    <input 
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />
                </label>
                <label>
                    <span>amount ($):</span>
                    <input 
                        type='number'
                        onChange={e => setAmount(e.target.value)}
                        value={amount}
                        required
                    />
                </label>
                <button>add transaction</button>
            </form>
        </>
    )
}