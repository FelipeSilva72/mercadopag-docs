import MercadoPagoConfig, { PaymentRefund } from "mercadopago";

(async () => {
  const mercadopago = new MercadoPagoConfig({
    accessToken: "your-access-token",
  });

  const paymentRefund = new PaymentRefund(mercadopago);

  await paymentRefund.create({
    payment_id: "id-of-payment",
    body: {
      amount: 10, //amount of payment
    },
  });
})();
