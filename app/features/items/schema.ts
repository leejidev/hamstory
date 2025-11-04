import {
  bigint,
  boolean,
  decimal,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { ITEM_TYPES } from "./constants";

export const itemTypes = pgEnum(
  "item_type",
  ITEM_TYPES.map(type => type.value) as [string, ...string[]]
);
export const items = pgTable("items", {
  item_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  description: text().notNull(),
  category: itemTypes().notNull(),
  width_mm: integer().notNull(),
  depth_mm: integer().notNull(),
  height_mm: integer().notNull(),
  weight_g: integer(),
  image_url: text().notNull(),
  purchase_url: text().notNull(),
  purchase_price: decimal({ mode: "string" }).notNull(),
  is_active: boolean().notNull().default(true),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
