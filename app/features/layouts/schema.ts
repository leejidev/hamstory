import {
  bigint,
  boolean,
  decimal,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { items } from "../items/schema";
import { profiles } from "../users/schema";

export const layouts = pgTable("layouts", {
  layout_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id),
  name: text().notNull(),
  layout_width_mm: integer().notNull(),
  layout_depth_mm: integer().notNull(),
  layout_height_mm: integer().notNull(),
  is_shared: boolean().notNull().default(false),
  share_slug: text(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const sharedLayouts = pgTable("shared_layouts", {
  shared_layout_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  layout_id: bigint({ mode: "number" })
    .notNull()
    .references(() => layouts.layout_id),
  profile_id: uuid()
    .notNull()
    .references(() => profiles.profile_id),
  description: text(),
  likes: integer().notNull().default(0),
  comments_enabled: boolean().notNull().default(true),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const layoutItems = pgTable("layout_items", {
  layout_item_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  layout_id: bigint({ mode: "number" })
    .notNull()
    .references(() => layouts.layout_id),
  item_id: bigint({ mode: "number" })
    .notNull()
    .references(() => items.item_id),
  x_position_mm: integer().notNull(),
  y_position_mm: integer().notNull(),
  z_position_mm: integer().notNull(),
  rotation_degree: integer().notNull(),
  z_index: integer().notNull(),
  instance_label: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
