import MercadoPagoConfig, { Payment } from "mercadopago";

(async () => {
  const mercadopago = new MercadoPagoConfig({
    accessToken: "your-access-token",
  });

  const payment = new Payment(mercadopago);

  const paymentCreated = await payment.create({
    body: {
      payer: {
        email: "your-email",
        first_name: "your-first-name",
        last_name: "your-last-name",
        phone: {
          area_code: "your area code",
          number: "your phone number",
        },
      },
      payment_method_id: "pix",
      additional_info: {
        items: [
          {
            id: "id-of-product",
            title: "title-of-product",
            description: "description-of-product",
            quantity: 1, //quantity of products purchased
            unit_price: 10, //price of product
          },
        ],
      },
      coupon_code: "code-of-coupon",
      coupon_amount: 10, //amount of coupon
    },
  });

  //get QR code
  const qrcodeBase64 = paymentCreated.point_of_interaction?.transaction_data
    ?.qr_code_base64 as string;
  const qrcodeBuffer = Buffer.from(qrcodeBase64, "base64");
})();
