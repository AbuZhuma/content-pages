import { Injectable, PipeTransform } from "@nestjs/common";
import type { ZodTypeAny } from "zod";
import { ZodError } from "zod";
import { throwZodError } from "../errors/zod-error";

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodTypeAny) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (e) {
      if (e instanceof ZodError) {
        throwZodError(e);   
      }
      throw e;
    }
  }
}
