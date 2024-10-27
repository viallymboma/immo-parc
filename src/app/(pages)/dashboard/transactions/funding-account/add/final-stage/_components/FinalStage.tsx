"use client";
import React from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import {
  allAccounts,
  AllAccountsType,
} from '@/components/data/Productsdata';

const FinalStageModule = () => {
  
  const searchParams = useSearchParams (); 

  const [amount, setAmount] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [operator, setOperator] = React.useState<AllAccountsType>({});

  console.log(amount, mobileNumber, operator, "kkkkkkkkkkkkkkkkkkkkk")

  React.useEffect(() => {
    const writtenSearchParam = new URLSearchParams(searchParams);
    if (writtenSearchParam) {
      const searchEleAmount = writtenSearchParam.get("amount");
      const searchEleMobileNumber = writtenSearchParam.get("number");
      const searchOperator = writtenSearchParam.get("operator");
      const findOperator = allAccounts.find((account: AllAccountsType) => {
        return account?.id === parseInt(searchOperator!)
      } ); 
      setAmount(searchEleAmount!);
      setMobileNumber(searchEleMobileNumber!); 
      setOperator(findOperator as AllAccountsType); 
      
    }
  }, []);

  // Function to copy the URL to clipboard
  const copyToClipboard = async (element: string) => {
    try {
        await navigator.clipboard.writeText(element);
        alert("URL copied to clipboard!");
    } catch (error) {
        console.error("Failed to copy URL:", error);
        alert("Failed to copy URL");
    }
  };

  return (
    <div>
        <div>
          <div>
            <Image src={ operator?.image } alt='imag' />
          </div>
          <div>
            { operator?.operator }
          </div>
        </div>
    </div>
  )
}

export default FinalStageModule



// const filterRoutes = (e: any) => {
//   // Update URL query parameters (optional)
//   const writtenSearchParam = new URLSearchParams(searchParams);
//   writtenSearchParam.set("search", e.target.value);
//   router.push(`${pathName}?${writtenSearchParam.toString()}`);
// };