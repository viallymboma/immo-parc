"use client"
import React from 'react';

const layout = ({ children }: { children: any }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>Montant disponible: 50, 0000 FCFA</div>
      { children }
    </div>
  )
}

export default layout