

const ProductsList = [
    {

    }
]


export type AccountType = {
    operator: string, 
    service: string, 
    abreviation: string, 
    balance?: number, 
    phone_number: number
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