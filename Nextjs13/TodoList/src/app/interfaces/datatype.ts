export interface DataType {
  key: React.Key;
  name: string;
  description: string;
  status: "PENDING" | "DONE";
  responsive?: Array<string>;
}
