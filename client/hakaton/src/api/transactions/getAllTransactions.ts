export interface Transaction {
    comment: string
    price: number
    category: string
    date: string
}

export const getAllTransactions: () => Promise<Transaction[]> = async () => {
    console.log(process.env.SERVER_URL);

    const res = await fetch(`http://192.168.1.83:3001/transactions`);
    const ans = await res.json();

    return ans
}