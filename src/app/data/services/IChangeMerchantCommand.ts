export interface IChangeMerchantCommand {
  id: string;
  name: string;
  address: string;
  ordering: number;
}
export interface IAddMerchantCommand {
  name: string;
  address: string;
  ordering: number;
}

export interface IRemoveMerchantCommand {
  id: string;
}