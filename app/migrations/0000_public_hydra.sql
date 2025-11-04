CREATE TYPE "public"."item_type" AS ENUM('cage', 'hideout', 'wheel', 'bedding', 'bathroom', 'feeder', 'water_fountain', 'deck', 'stairs', 'fence', 'decorative');--> statement-breakpoint
CREATE TABLE "items" (
	"item_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "items_item_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"description" text NOT NULL,
	"category" "item_type" NOT NULL,
	"width_mm" integer NOT NULL,
	"depth_mm" integer NOT NULL,
	"height_mm" integer NOT NULL,
	"weight_g" integer,
	"image_url" text NOT NULL,
	"purchase_url" text NOT NULL,
	"purchase_price" numeric NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "layout_items" (
	"layout_item_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "layout_items_layout_item_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"layout_id" bigint NOT NULL,
	"item_id" bigint NOT NULL,
	"x_position_mm" integer NOT NULL,
	"y_position_mm" integer NOT NULL,
	"z_position_mm" integer NOT NULL,
	"rotation_degree" integer NOT NULL,
	"z_index" integer NOT NULL,
	"instance_label" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "layouts" (
	"layout_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "layouts_layout_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"name" text NOT NULL,
	"layout_width_mm" integer NOT NULL,
	"layout_depth_mm" integer NOT NULL,
	"layout_height_mm" integer NOT NULL,
	"is_shared" boolean DEFAULT false NOT NULL,
	"share_slug" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "shared_layouts" (
	"shared_layout_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "shared_layouts_shared_layout_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"layout_id" bigint NOT NULL,
	"profile_id" uuid NOT NULL,
	"description" text,
	"likes" integer DEFAULT 0 NOT NULL,
	"comments_enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "follows" (
	"follower_id" uuid,
	"following_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"avatar" text,
	"name" text NOT NULL,
	"username" text NOT NULL,
	"headline" text,
	"bio" text,
	"stats" jsonb,
	"views" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "layout_items" ADD CONSTRAINT "layout_items_layout_id_layouts_layout_id_fk" FOREIGN KEY ("layout_id") REFERENCES "public"."layouts"("layout_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "layout_items" ADD CONSTRAINT "layout_items_item_id_items_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("item_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "layouts" ADD CONSTRAINT "layouts_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shared_layouts" ADD CONSTRAINT "shared_layouts_layout_id_layouts_layout_id_fk" FOREIGN KEY ("layout_id") REFERENCES "public"."layouts"("layout_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shared_layouts" ADD CONSTRAINT "shared_layouts_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_profiles_profile_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_id_profiles_profile_id_fk" FOREIGN KEY ("following_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_users_id_fk" FOREIGN KEY ("profile_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;