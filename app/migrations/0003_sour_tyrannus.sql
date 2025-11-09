ALTER TABLE "items" ADD COLUMN "stats" jsonb DEFAULT '{"views":0,"reviews":0,"upvotes":0}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "shared_layouts" ADD COLUMN "stats" jsonb DEFAULT '{"views":0,"reviews":0,"upvotes":0}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "shared_layouts" DROP COLUMN "likes";