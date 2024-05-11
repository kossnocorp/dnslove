import { type DNS } from "@dl/dns/types.js";

export interface RecordProps {
  record: DNS.Record;
}

export function Record(props: RecordProps) {
  return (
    <div class="space-x-2 flex items-center">
      <input
        class="rounded-lg bg-neutral-900 p-2 w-20 text-center"
        value={props.record.type}
      />

      <input
        class="rounded-lg bg-neutral-900 p-2 text-right"
        value={props.record.subdomain}
      />

      <div class="text-neutral-600">.example.com</div>

      <input class="rounded-lg bg-neutral-900 p-2" value={props.record.value} />
    </div>
  );
}
