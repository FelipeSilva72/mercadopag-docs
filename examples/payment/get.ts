import MercadoPagoConfig, { Payment } from "mercadopago";

(async () => {
  const mercadopago = new MercadoPagoConfig({
    accessToken: "your-access-token",
  });

  const payment = new Payment(mercadopago);

  const paymentData = await payment.get({
    id: "id-of-product",
  });

  //payment ID
  const paymentId = paymentData.id;

  //payment Price
  const paymentPrice = paymentData.transaction_amount;

  //payment Status (cancelled | pending | approved)
  const paymentStatus = paymentData.status;
})();
