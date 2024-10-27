

const ProductsList = [
    {

    }
]


export type AccountType = {
    id?: string | number, 
    operator: string, 
    service: string, 
    abreviation: string, 
    balance?: number, 
    phone_number: number
}

export type AccountTypeM = {
    id: string | number, 
    name: string, 
    service: string, 
    abreviation: string, 
}


export const my_accounts: AccountType [] = [
    {
        operator: "Orange", 
        service: "Orange Money", 
        abreviation: "OM", 
        balance: 50000, 
        phone_number: 237695500474
    }, 
    {
        operator: "MTN", 
        service: "Mobile Money", 
        abreviation: "MoMo", 
        balance: 60000, 
        phone_number: 237675500474
    }
]


export type SuggestedAmounts = {
    id: string | number, 
    amount: number, 
}

export const suggestedAmounts: SuggestedAmounts [] = [
    {
        id: 1, 
        amount: 5000, 
    }, 
    {
        id: 2, 
        amount: 20000, 
    }, 
    {
        id: 3, 
        amount: 58000, 
    }, 
    {
        id: 4, 
        amount: 168000, 
    }, 
    {
        id: 5, 
        amount: 398000, 
    }, 
]

export const accounts: AccountTypeM [] = [
    {
        id: 1,
        name: "Orange", 
        service: "Orange Money", 
        abreviation: "OM", 
    }, 
    {
        id: 2,
        name: "MTN", 
        service: "Mobile Money", 
        abreviation: "MoMo", 
    }
]