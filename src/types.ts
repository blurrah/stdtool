import type { StandardSchemaV1 } from "@standard-schema/spec";

export interface Tool<
  Params extends StandardSchemaV1 | undefined = undefined | StandardSchemaV1
> {
  name: string;
  description: string;
  parameters: Params;
  execute: (parameters: Params) => Promise<unknown>;
}
