"use client";

import React from 'react'
import { Button } from "./ui/button";
import placeOrder from '@/actions/placeOrder';

function PurchaseButton() {

    

    return (
    <Button onClick={() => placeOrder()} variant="outline" className="w-fit mt-3">
              Purchase
              </Button>
  )
}

export default PurchaseButton