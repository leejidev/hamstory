export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      follows: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
        }
        Relationships: []
      }
      items: {
        Row: {
          category: Database["public"]["Enums"]["item_type"]
          created_at: string
          depth_mm: number
          description: string
          height_mm: number
          image_url: string
          is_active: boolean
          item_id: number
          name: string
          purchase_price: number
          purchase_url: string
          stats: Json
          updated_at: string
          weight_g: number | null
          width_mm: number
        }
        Insert: {
          category: Database["public"]["Enums"]["item_type"]
          created_at?: string
          depth_mm: number
          description: string
          height_mm: number
          image_url: string
          is_active?: boolean
          item_id?: never
          name: string
          purchase_price: number
          purchase_url: string
          stats?: Json
          updated_at?: string
          weight_g?: number | null
          width_mm: number
        }
        Update: {
          category?: Database["public"]["Enums"]["item_type"]
          created_at?: string
          depth_mm?: number
          description?: string
          height_mm?: number
          image_url?: string
          is_active?: boolean
          item_id?: never
          name?: string
          purchase_price?: number
          purchase_url?: string
          stats?: Json
          updated_at?: string
          weight_g?: number | null
          width_mm?: number
        }
        Relationships: []
      }
      layout_items: {
        Row: {
          created_at: string
          instance_label: string
          item_id: number
          layout_id: number
          layout_item_id: number
          rotation_degree: number
          updated_at: string
          x_position_mm: number
          y_position_mm: number
          z_index: number
          z_position_mm: number
        }
        Insert: {
          created_at?: string
          instance_label: string
          item_id: number
          layout_id: number
          layout_item_id?: never
          rotation_degree: number
          updated_at?: string
          x_position_mm: number
          y_position_mm: number
          z_index: number
          z_position_mm: number
        }
        Update: {
          created_at?: string
          instance_label?: string
          item_id?: number
          layout_id?: number
          layout_item_id?: never
          rotation_degree?: number
          updated_at?: string
          x_position_mm?: number
          y_position_mm?: number
          z_index?: number
          z_position_mm?: number
        }
        Relationships: [
          {
            foreignKeyName: "layout_items_item_id_items_item_id_fk"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["item_id"]
          },
          {
            foreignKeyName: "layout_items_layout_id_layouts_layout_id_fk"
            columns: ["layout_id"]
            isOneToOne: false
            referencedRelation: "layouts"
            referencedColumns: ["layout_id"]
          },
        ]
      }
      layouts: {
        Row: {
          created_at: string
          is_shared: boolean
          layout_depth_mm: number
          layout_height_mm: number
          layout_id: number
          layout_width_mm: number
          name: string
          profile_id: string
          share_slug: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          is_shared?: boolean
          layout_depth_mm: number
          layout_height_mm: number
          layout_id?: never
          layout_width_mm: number
          name: string
          profile_id: string
          share_slug?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          is_shared?: boolean
          layout_depth_mm?: number
          layout_height_mm?: number
          layout_id?: never
          layout_width_mm?: number
          name?: string
          profile_id?: string
          share_slug?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "layouts_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      message_room_members: {
        Row: {
          created_at: string
          message_room_id: number
          profile_id: string
        }
        Insert: {
          created_at?: string
          message_room_id: number
          profile_id: string
        }
        Update: {
          created_at?: string
          message_room_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_room_members_message_room_id_message_rooms_message_room"
            columns: ["message_room_id"]
            isOneToOne: false
            referencedRelation: "message_rooms"
            referencedColumns: ["message_room_id"]
          },
          {
            foreignKeyName: "message_room_members_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      message_rooms: {
        Row: {
          created_at: string
          message_room_id: number
        }
        Insert: {
          created_at?: string
          message_room_id?: never
        }
        Update: {
          created_at?: string
          message_room_id?: never
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string
          message_id: number
          message_room_id: number | null
          sender_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          message_id?: never
          message_room_id?: number | null
          sender_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          message_id?: never
          message_room_id?: number | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_message_room_id_message_rooms_message_room_id_fk"
            columns: ["message_room_id"]
            isOneToOne: false
            referencedRelation: "message_rooms"
            referencedColumns: ["message_room_id"]
          },
          {
            foreignKeyName: "messages_sender_id_profiles_profile_id_fk"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          layout_id: number | null
          notification_id: number
          source_id: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Insert: {
          created_at?: string
          layout_id?: number | null
          notification_id?: never
          source_id?: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Update: {
          created_at?: string
          layout_id?: number | null
          notification_id?: never
          source_id?: string | null
          target_id?: string
          type?: Database["public"]["Enums"]["notification_type"]
        }
        Relationships: [
          {
            foreignKeyName: "notifications_layout_id_layouts_layout_id_fk"
            columns: ["layout_id"]
            isOneToOne: false
            referencedRelation: "layouts"
            referencedColumns: ["layout_id"]
          },
          {
            foreignKeyName: "notifications_source_id_profiles_profile_id_fk"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "notifications_target_id_profiles_profile_id_fk"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string
          headline: string | null
          name: string
          profile_id: string
          role: Database["public"]["Enums"]["role"]
          stats: Json | null
          updated_at: string
          username: string
          views: Json | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          headline?: string | null
          name: string
          profile_id: string
          role?: Database["public"]["Enums"]["role"]
          stats?: Json | null
          updated_at?: string
          username: string
          views?: Json | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          headline?: string | null
          name?: string
          profile_id?: string
          role?: Database["public"]["Enums"]["role"]
          stats?: Json | null
          updated_at?: string
          username?: string
          views?: Json | null
        }
        Relationships: []
      }
      shared_layouts: {
        Row: {
          comments_enabled: boolean
          created_at: string
          description: string | null
          layout_id: number
          profile_id: string
          shared_layout_id: number
          stats: Json
          updated_at: string
        }
        Insert: {
          comments_enabled?: boolean
          created_at?: string
          description?: string | null
          layout_id: number
          profile_id: string
          shared_layout_id?: never
          stats?: Json
          updated_at?: string
        }
        Update: {
          comments_enabled?: boolean
          created_at?: string
          description?: string | null
          layout_id?: number
          profile_id?: string
          shared_layout_id?: never
          stats?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shared_layouts_layout_id_layouts_layout_id_fk"
            columns: ["layout_id"]
            isOneToOne: false
            referencedRelation: "layouts"
            referencedColumns: ["layout_id"]
          },
          {
            foreignKeyName: "shared_layouts_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      item_type:
        | "cage"
        | "hideout"
        | "wheel"
        | "bedding"
        | "bathroom"
        | "feeder"
        | "water_fountain"
        | "deck"
        | "stairs"
        | "fence"
        | "decorative"
      job_type: "full-time" | "part-time" | "freelance" | "internship"
      location: "remote" | "in-person" | "hybrid"
      notification_type: "follow" | "review" | "reply" | "mention"
      role: "user" | "admin"
      salary_range:
        | "$0 - $50,000"
        | "$50,000 - $70,000"
        | "$70,000 - $100,000"
        | "$100,000 - $120,000"
        | "$120,000 - $150,000"
        | "$150,000 - $250,000"
        | "$250,000+"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      item_type: [
        "cage",
        "hideout",
        "wheel",
        "bedding",
        "bathroom",
        "feeder",
        "water_fountain",
        "deck",
        "stairs",
        "fence",
        "decorative",
      ],
      job_type: ["full-time", "part-time", "freelance", "internship"],
      location: ["remote", "in-person", "hybrid"],
      notification_type: ["follow", "review", "reply", "mention"],
      role: ["user", "admin"],
      salary_range: [
        "$0 - $50,000",
        "$50,000 - $70,000",
        "$70,000 - $100,000",
        "$100,000 - $120,000",
        "$120,000 - $150,000",
        "$150,000 - $250,000",
        "$250,000+",
      ],
    },
  },
} as const
