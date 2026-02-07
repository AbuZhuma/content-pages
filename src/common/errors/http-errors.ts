import {
  BadRequestException,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  UnauthorizedException,
  InternalServerErrorException,
} from "@nestjs/common";

export const HttpErrors = {
  badRequest(message: string, details?: unknown) {
    throw new BadRequestException({
      message,
      details,
    });
  },

  notFound(entity: string, details?: unknown) {
    throw new NotFoundException({
      message: `${entity} not found`,
      details,
    });
  },

  conflict(message: string, details?: unknown) {
    throw new ConflictException({
      message,
      details,
    });
  },

  forbidden(message = "Forbidden") {
    throw new ForbiddenException(message);
  },

  unauthorized(message = "Unauthorized") {
    throw new UnauthorizedException(message);
  },

  internal(message = "Internal server error", details?: unknown) {
    throw new InternalServerErrorException({
      message,
      details,
    });
  },
};
