import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      odo: 2001,
      frameNumber: 'EFY111222',
      firmware: '1.2.1',
      warranty: 1.5,
      batteryCharge: 99.2,
      batteryType: 'BA184751',
      batteryHealth: 99,
      batteryFirmware: '2.08',
      batteryWarranty: 1.5,
      motorType: 'Bafang M420',
      motorSerialNumber: 'BAFA8466578489',
      motorFirmware: '2.034',
      motorWarranty: 2,
    }),
  };
};
