"use client";
import React from 'react';

import {
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import { accounts } from '@/components/data/Productsdata';
import InputField from '@/components/FormElements/InputElement/InputField';
import SelectField
  from '@/components/FormElements/InputElement/SelectInputField';
import { PhoneSvgIcon } from '@/components/svgs/SvgIcons';

type SignupFormType = {
    operator: string, 
    service?: string, 
    abreviation?: string, 
    balance?: number, 
    phone_number: number
}


const AddFinancialAccount = () => {
    const {
        register, 
        handleSubmit, 
        reset, 
        setValue,
        formState: {errors, isValid }, 
    } = useForm <SignupFormType> (); 

    const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    // handling
    }
    return (
        <div>
            <div>
                <h1>Ajouter un Compte</h1>
            </div>
            <form onSubmit={handleSubmit (onSubmit)}>
                <InputField 
                    label='Numéro de téléphone'
                    register={
                        register('phone_number', { 
                            required: true, 
                            // pattern: /^(6(9|7|6|5|2|8)[0-9]{7}|2[0-9]{8})/
                            pattern: /^6(9|7|6|5|2|8)[0-9]{7}$/,
                        })
                    }
                    svg={ <PhoneSvgIcon /> }
                    type='number'
                    placeholder='Entrez le numéro de téléphone'
                    // error={ errors?.phone_number }
                    // errorMessage='Fixing message'
                />
                <p>
                    {
                        errors?.phone_number && "Errreur"
                    }
                </p>

                {
                    accounts?.length > 0 && (
                        <div className="w-full">
                            <h1>
                                Operateur
                            </h1>
                            <SelectField
                                name="operator"
                                options={accounts}
                                register={register('operator', { 
                                    required: true, 
                                })}
                            />
                            <p className="mt-1 text-sm text-red-400">
                                {
                                    errors?.operator && 
                                        <>
                                            Selectinnez un operateur
                                        </>
                                }
                            </p>
                        </div> 
                    )
                }
                <div className="mb-4.5">
                    <button
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                    >
                        Créer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddFinancialAccount