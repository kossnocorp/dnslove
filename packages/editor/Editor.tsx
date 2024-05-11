import { Group } from "./Group.jsx";
import { Record } from "./Record.jsx";

export interface EditorProps {}

export function Editor(props: EditorProps) {
  return (
    <div class="space-y-1">
      <div class="flex space-x-4 justify-between">
        <div class="flex space-x-2">
          <div class="text-neutral-500">Sort by:</div>
          <div>Type</div>
          <div>Domain</div>
          <div>Group</div>
        </div>

        <div>
          <input type="checkbox" />
        </div>
      </div>

      <div class="space-y-4">
        <Group
          name="Vercel"
          records={[
            {
              type: "CNAME",
              subdomain: "*",
              ttl: 60,
              value: "cname.vercel-dns.com.",
            },
            {
              type: "A",
              subdomain: "",
              ttl: 60,
              value: "76.76.21.21",
            },
            {
              type: "CAA",
              subdomain: "",
              ttl: 60,
              value: '0 issue "letsencrypt.org"',
            },
          ]}
        />

        <Group
          name="Resend"
          records={[
            {
              type: "TXT",
              subdomain: "_dmarc",
              ttl: 60,
              value: "v=DMARC1; p=none;",
            },
            {
              type: "TXT",
              subdomain: "resend._domainkey",
              ttl: 60,
              value:
                "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDYoGmPj8vh+2WhaKK2Ju8B1ZaT1tioxMu0TG/T+2UnJSkbEsTo63V+m2vXPF21kBA36DyppTIlrD6iZ6GsWj3bND/2W3LlLc7n04ehWFwjmJ17ljnDrP80ZAcmzVJsOilJOmDH2Xzt1nivMwxKagDtlmSgJyKczR5U5xmXNk9TgQIDAQAB",
            },
            {
              type: "TXT",
              subdomain: "send",
              ttl: 60,
              value: "v=spf1 include:amazonses.com ~all",
            },
          ]}
        />
      </div>
    </div>
  );
}
