import React from 'react';

import BackofficeModule from './_components/BackofficeModule';

const BackOfficePage = () => {
    return (
        <div className="mx-auto max-w-7xl mb-[5rem]">
            {/* <Breadcrumb pageName="Bienvenu sur Immo" /> */}
            {/* <ReturnHeader
                headerName=' '
                returnBtnLabel='Retour'
                returnLink='/dashboard'
            /> */}
            <div>
                <BackofficeModule />
            </div>
        </div>
    )
}

export default BackOfficePage