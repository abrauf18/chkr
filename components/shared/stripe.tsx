"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ConnectStripeAccount } from "@/actions/payment/payment-action";
import { useRouter } from "next/navigation";
import Loader from "./loader";

export default function stripe() {
  const { push } = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const result = await ConnectStripeAccount();
      if (result?.accountLink) {
        push(result?.accountLink?.url);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={true}>
      <DialogContent className="bg-white md:max-w-[35%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
        <DialogHeader className="flex flex-col gap-3 items-center justify-center">
          <DialogTitle>Connect with Stripe</DialogTitle>
          <DialogDescription>
            Connect with Stripe today and unlock a world of secure transactions
            & Manage your payments very easily.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center" onClick={handleClick}>
          <Button
            className="text-white rounded-3xl bg-[#645AFF] mt-3 w-3/4"
            disabled={loading}
          >
            {loading ? (
              <Loader size={6} />
            ) : (
              <p className="whitespace-nowrap text-xs">
                Connect with <span className="font-bold text-sm">Stripe</span>
              </p>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

