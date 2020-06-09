export interface IChangeMerchantNameCommand {
  merchantId: string;
  newName: string;
}
export interface IAddMerchantCommand {
  name: string;
  address: string;
}
