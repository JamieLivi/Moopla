export type RootStackParamList = {
  List: undefined;
  Details: {id: string};
};

export type Item = {
  id: string;
  type: string;
  beds: number;
  bathrooms: number;
  livingrooms: number;
  price: string;
  address: string;
  images: Array<any>;
};
