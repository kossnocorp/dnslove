export namespace DNS {
  export type Record = RecordMX | RecordTXT | RecordCNAME | RecordA | RecordCAA;

  export interface RecordBase<Type extends string> {
    type: Type;
    subdomain: string;
    ttl: number;
  }

  export interface RecordValueFields {
    value: string;
  }

  export interface RecordMX extends RecordBase<"MX">, RecordValueFields {
    priority: number;
  }

  export interface RecordTXT extends RecordBase<"TXT">, RecordValueFields {}

  export interface RecordCNAME extends RecordBase<"CNAME">, RecordValueFields {}

  export interface RecordA extends RecordBase<"A">, RecordValueFields {}

  export interface RecordCAA extends RecordBase<"CAA">, RecordValueFields {}
}
