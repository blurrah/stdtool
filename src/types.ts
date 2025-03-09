import type { z } from "zod";

type Parameters = z.ZodTypeAny | undefined;

export type InferParameters<Params extends Parameters> =
  Params extends z.ZodTypeAny ? z.infer<Params> : never;

export interface Tool<Params extends Parameters = Parameters> {
  name: string;
  description: string;
  parameters: Params;
  execute: (parameters: InferParameters<Params>) => Promise<unknown>;
}
