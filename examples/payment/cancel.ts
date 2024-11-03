import MercadoPagoConfig, { Payment } from "mercadopago";

(async () => {
  const mercadopago = new MercadoPagoConfig({
    accessToken: "your-access-token",
  });

  const payment = new Payment(mercadopago);

  await payment.cancel({
    id: "id-of-payment",
  });
})();
