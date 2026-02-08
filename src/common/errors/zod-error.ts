import type { ZodError } from 'zod';
import { BadRequestException } from '@nestjs/common';

export function throwZodError(error: ZodError) {
  throw new BadRequestException({
    message: 'Validation error',
    errors: error.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
    })),
  });
}
