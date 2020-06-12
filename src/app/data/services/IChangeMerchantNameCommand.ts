export interface IChangeMerchantNameCommand {
  id: string;
  name: string;
  address: string;
}
export interface IAddMerchantCommand {
  name: string;
  address: string;
}

export interface IRemoveMerchantCommand {
  id: string;
}