import { type DNS } from "@dl/dns/types.js";
import { Record } from "./Record.jsx";

export interface GroupProps {
  name: string;
  records: DNS.Record[];
}

export function Group(props: GroupProps) {
  return (
    <div class="space-y-2">
      <div class="text-neutral-500 font-medium">{props.name}</div>

      <div class="space-y-2">
        {props.records.map((record) => (
          <Record record={record} />
        ))}
      </div>
    </div>
  );
}
