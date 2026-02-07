CREATE TYPE "public"."page_category" AS ENUM('FOOTER');--> statement-breakpoint
CREATE TABLE "pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar NOT NULL,
	"category" "page_category" NOT NULL,
	"meta" jsonb NOT NULL,
	"content" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	CONSTRAINT "pages_slug_unique" UNIQUE("slug")
);
