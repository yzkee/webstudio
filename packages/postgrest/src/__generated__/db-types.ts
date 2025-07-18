export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Asset: {
        Row: {
          id: string;
          name: string;
          projectId: string;
        };
        Insert: {
          id: string;
          name: string;
          projectId: string;
        };
        Update: {
          id?: string;
          name?: string;
          projectId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Asset_name_fkey";
            columns: ["name"];
            isOneToOne: false;
            referencedRelation: "File";
            referencedColumns: ["name"];
          },
        ];
      };
      AuthorizationToken: {
        Row: {
          canClone: boolean;
          canCopy: boolean;
          canPublish: boolean;
          createdAt: string;
          name: string;
          projectId: string;
          relation: Database["public"]["Enums"]["AuthorizationRelation"];
          token: string;
        };
        Insert: {
          canClone?: boolean;
          canCopy?: boolean;
          canPublish?: boolean;
          createdAt?: string;
          name?: string;
          projectId: string;
          relation?: Database["public"]["Enums"]["AuthorizationRelation"];
          token: string;
        };
        Update: {
          canClone?: boolean;
          canCopy?: boolean;
          canPublish?: boolean;
          createdAt?: string;
          name?: string;
          projectId?: string;
          relation?: Database["public"]["Enums"]["AuthorizationRelation"];
          token?: string;
        };
        Relationships: [
          {
            foreignKeyName: "AuthorizationToken_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "AuthorizationToken_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      Build: {
        Row: {
          breakpoints: string;
          createdAt: string;
          dataSources: string;
          deployment: string | null;
          id: string;
          instances: string;
          isCleaned: boolean | null;
          lastTransactionId: string | null;
          marketplaceProduct: string;
          pages: string;
          projectId: string;
          props: string;
          publishStatus: Database["public"]["Enums"]["PublishStatus"];
          resources: string;
          styles: string;
          styleSources: string;
          styleSourceSelections: string;
          updatedAt: string;
          version: number;
        };
        Insert: {
          breakpoints?: string;
          createdAt?: string;
          dataSources?: string;
          deployment?: string | null;
          id: string;
          instances?: string;
          isCleaned?: boolean | null;
          lastTransactionId?: string | null;
          marketplaceProduct?: string;
          pages: string;
          projectId: string;
          props?: string;
          publishStatus?: Database["public"]["Enums"]["PublishStatus"];
          resources?: string;
          styles?: string;
          styleSources?: string;
          styleSourceSelections?: string;
          updatedAt?: string;
          version?: number;
        };
        Update: {
          breakpoints?: string;
          createdAt?: string;
          dataSources?: string;
          deployment?: string | null;
          id?: string;
          instances?: string;
          isCleaned?: boolean | null;
          lastTransactionId?: string | null;
          marketplaceProduct?: string;
          pages?: string;
          projectId?: string;
          props?: string;
          publishStatus?: Database["public"]["Enums"]["PublishStatus"];
          resources?: string;
          styles?: string;
          styleSources?: string;
          styleSourceSelections?: string;
          updatedAt?: string;
          version?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      ClientReferences: {
        Row: {
          createdAt: string;
          reference: string;
          service: string;
          userId: string;
        };
        Insert: {
          createdAt?: string;
          reference?: string;
          service: string;
          userId: string;
        };
        Update: {
          createdAt?: string;
          reference?: string;
          service?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ClientReferences_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      Domain: {
        Row: {
          createdAt: string;
          domain: string;
          error: string | null;
          id: string;
          status: Database["public"]["Enums"]["DomainStatus"];
          txtRecord: string | null;
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          domain: string;
          error?: string | null;
          id: string;
          status?: Database["public"]["Enums"]["DomainStatus"];
          txtRecord?: string | null;
          updatedAt?: string;
        };
        Update: {
          createdAt?: string;
          domain?: string;
          error?: string | null;
          id?: string;
          status?: Database["public"]["Enums"]["DomainStatus"];
          txtRecord?: string | null;
          updatedAt?: string;
        };
        Relationships: [];
      };
      domainsVirtual: {
        Row: {
          cname: string;
          createdAt: string;
          domain: string;
          domainId: string;
          domainTxtRecord: string | null;
          error: string | null;
          expectedTxtRecord: string;
          id: string;
          projectId: string;
          status: Database["public"]["Enums"]["DomainStatus"];
          updatedAt: string;
          verified: boolean;
        };
        Insert: {
          cname: string;
          createdAt: string;
          domain: string;
          domainId: string;
          domainTxtRecord?: string | null;
          error?: string | null;
          expectedTxtRecord: string;
          id: string;
          projectId: string;
          status?: Database["public"]["Enums"]["DomainStatus"];
          updatedAt: string;
          verified?: boolean;
        };
        Update: {
          cname?: string;
          createdAt?: string;
          domain?: string;
          domainId?: string;
          domainTxtRecord?: string | null;
          error?: string | null;
          expectedTxtRecord?: string;
          id?: string;
          projectId?: string;
          status?: Database["public"]["Enums"]["DomainStatus"];
          updatedAt?: string;
          verified?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "domainsVirtual_domainId_fkey";
            columns: ["domainId"];
            isOneToOne: false;
            referencedRelation: "Domain";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "domainsVirtual_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "domainsVirtual_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      File: {
        Row: {
          createdAt: string;
          description: string | null;
          format: string;
          isDeleted: boolean;
          meta: string;
          name: string;
          size: number;
          status: Database["public"]["Enums"]["UploadStatus"];
          updatedAt: string;
          uploaderProjectId: string | null;
        };
        Insert: {
          createdAt?: string;
          description?: string | null;
          format: string;
          isDeleted?: boolean;
          meta?: string;
          name: string;
          size: number;
          status?: Database["public"]["Enums"]["UploadStatus"];
          updatedAt?: string;
          uploaderProjectId?: string | null;
        };
        Update: {
          createdAt?: string;
          description?: string | null;
          format?: string;
          isDeleted?: boolean;
          meta?: string;
          name?: string;
          size?: number;
          status?: Database["public"]["Enums"]["UploadStatus"];
          updatedAt?: string;
          uploaderProjectId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "File_uploaderProjectId_fkey";
            columns: ["uploaderProjectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "File_uploaderProjectId_fkey";
            columns: ["uploaderProjectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      latestBuildVirtual: {
        Row: {
          buildId: string;
          createdAt: string;
          domain: string;
          domainsVirtualId: string;
          projectId: string;
          publishStatus: Database["public"]["Enums"]["PublishStatus"];
        };
        Insert: {
          buildId: string;
          createdAt: string;
          domain: string;
          domainsVirtualId: string;
          projectId: string;
          publishStatus: Database["public"]["Enums"]["PublishStatus"];
        };
        Update: {
          buildId?: string;
          createdAt?: string;
          domain?: string;
          domainsVirtualId?: string;
          projectId?: string;
          publishStatus?: Database["public"]["Enums"]["PublishStatus"];
        };
        Relationships: [
          {
            foreignKeyName: "latestBuildVirtual_buildId_fkey";
            columns: ["buildId"];
            isOneToOne: true;
            referencedRelation: "Build";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "latestBuildVirtual_buildId_fkey";
            columns: ["buildId"];
            isOneToOne: true;
            referencedRelation: "LatestStaticBuildPerProject";
            referencedColumns: ["buildId"];
          },
          {
            foreignKeyName: "latestBuildVirtual_buildId_fkey";
            columns: ["buildId"];
            isOneToOne: true;
            referencedRelation: "published_builds";
            referencedColumns: ["buildId"];
          },
          {
            foreignKeyName: "latestBuildVirtual_domainsVirtualId_fkey";
            columns: ["domainsVirtualId"];
            isOneToOne: true;
            referencedRelation: "domainsVirtual";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "latestBuildVirtual_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: true;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "latestBuildVirtual_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: true;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      Product: {
        Row: {
          createdAt: string;
          description: string | null;
          features: string[] | null;
          id: string;
          images: string[] | null;
          meta: Json;
          name: string;
        };
        Insert: {
          createdAt?: string;
          description?: string | null;
          features?: string[] | null;
          id: string;
          images?: string[] | null;
          meta: Json;
          name: string;
        };
        Update: {
          createdAt?: string;
          description?: string | null;
          features?: string[] | null;
          id?: string;
          images?: string[] | null;
          meta?: Json;
          name?: string;
        };
        Relationships: [];
      };
      Project: {
        Row: {
          createdAt: string;
          domain: string;
          id: string;
          isDeleted: boolean;
          marketplaceApprovalStatus: Database["public"]["Enums"]["MarketplaceApprovalStatus"];
          previewImageAssetId: string | null;
          title: string;
          userId: string | null;
        };
        Insert: {
          createdAt?: string;
          domain: string;
          id: string;
          isDeleted?: boolean;
          marketplaceApprovalStatus?: Database["public"]["Enums"]["MarketplaceApprovalStatus"];
          previewImageAssetId?: string | null;
          title: string;
          userId?: string | null;
        };
        Update: {
          createdAt?: string;
          domain?: string;
          id?: string;
          isDeleted?: boolean;
          marketplaceApprovalStatus?: Database["public"]["Enums"]["MarketplaceApprovalStatus"];
          previewImageAssetId?: string | null;
          title?: string;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Project_previewImageAssetId_id_fkey";
            columns: ["previewImageAssetId", "id"];
            isOneToOne: false;
            referencedRelation: "Asset";
            referencedColumns: ["id", "projectId"];
          },
          {
            foreignKeyName: "Project_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      ProjectDomain: {
        Row: {
          cname: string;
          createdAt: string;
          domainId: string;
          projectId: string;
          txtRecord: string;
        };
        Insert: {
          cname: string;
          createdAt?: string;
          domainId: string;
          projectId: string;
          txtRecord: string;
        };
        Update: {
          cname?: string;
          createdAt?: string;
          domainId?: string;
          projectId?: string;
          txtRecord?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ProjectDomain_domainId_fkey";
            columns: ["domainId"];
            isOneToOne: false;
            referencedRelation: "Domain";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ProjectDomain_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ProjectDomain_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      Team: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
        Relationships: [];
      };
      TransactionLog: {
        Row: {
          createdAt: string;
          customerEmail: string | null;
          customerId: string | null;
          eventCreated: number | null;
          eventData: Json | null;
          eventId: string;
          eventType: string | null;
          paymentIntent: string | null;
          productId: string | null;
          status: string | null;
          subscriptionId: string | null;
          userId: string | null;
        };
        Insert: {
          createdAt?: string;
          customerEmail?: string | null;
          customerId?: string | null;
          eventCreated?: number | null;
          eventData?: Json | null;
          eventId: string;
          eventType?: string | null;
          paymentIntent?: string | null;
          productId?: string | null;
          status?: string | null;
          subscriptionId?: string | null;
          userId?: string | null;
        };
        Update: {
          createdAt?: string;
          customerEmail?: string | null;
          customerId?: string | null;
          eventCreated?: number | null;
          eventData?: Json | null;
          eventId?: string;
          eventType?: string | null;
          paymentIntent?: string | null;
          productId?: string | null;
          status?: string | null;
          subscriptionId?: string | null;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "TransactionLog_productId_fkey";
            columns: ["productId"];
            isOneToOne: false;
            referencedRelation: "Product";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "TransactionLog_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      User: {
        Row: {
          createdAt: string;
          email: string | null;
          id: string;
          image: string | null;
          provider: string | null;
          teamId: string | null;
          username: string | null;
        };
        Insert: {
          createdAt?: string;
          email?: string | null;
          id: string;
          image?: string | null;
          provider?: string | null;
          teamId?: string | null;
          username?: string | null;
        };
        Update: {
          createdAt?: string;
          email?: string | null;
          id?: string;
          image?: string | null;
          provider?: string | null;
          teamId?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "User_teamId_fkey";
            columns: ["teamId"];
            isOneToOne: false;
            referencedRelation: "Team";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      ApprovedMarketplaceProduct: {
        Row: {
          authorizationToken: string | null;
          marketplaceProduct: string | null;
          projectId: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      DashboardProject: {
        Row: {
          createdAt: string | null;
          domain: string | null;
          id: string | null;
          isDeleted: boolean | null;
          isPublished: boolean | null;
          marketplaceApprovalStatus:
            | Database["public"]["Enums"]["MarketplaceApprovalStatus"]
            | null;
          previewImageAssetId: string | null;
          title: string | null;
          userId: string | null;
        };
        Insert: {
          createdAt?: string | null;
          domain?: string | null;
          id?: string | null;
          isDeleted?: boolean | null;
          isPublished?: never;
          marketplaceApprovalStatus?:
            | Database["public"]["Enums"]["MarketplaceApprovalStatus"]
            | null;
          previewImageAssetId?: string | null;
          title?: string | null;
          userId?: string | null;
        };
        Update: {
          createdAt?: string | null;
          domain?: string | null;
          id?: string | null;
          isDeleted?: boolean | null;
          isPublished?: never;
          marketplaceApprovalStatus?:
            | Database["public"]["Enums"]["MarketplaceApprovalStatus"]
            | null;
          previewImageAssetId?: string | null;
          title?: string | null;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Project_previewImageAssetId_id_fkey";
            columns: ["previewImageAssetId", "id"];
            isOneToOne: false;
            referencedRelation: "Asset";
            referencedColumns: ["id", "projectId"];
          },
          {
            foreignKeyName: "Project_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      LatestStaticBuildPerProject: {
        Row: {
          buildId: string | null;
          projectId: string | null;
          publishStatus: Database["public"]["Enums"]["PublishStatus"] | null;
          updatedAt: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      published_builds: {
        Row: {
          buildId: string | null;
          createdAt: string | null;
          domains: string | null;
          projectId: string | null;
        };
        Insert: {
          buildId?: string | null;
          createdAt?: string | null;
          domains?: never;
          projectId?: string | null;
        };
        Update: {
          buildId?: string | null;
          createdAt?: string | null;
          domains?: never;
          projectId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "DashboardProject";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Build_projectId_fkey";
            columns: ["projectId"];
            isOneToOne: false;
            referencedRelation: "Project";
            referencedColumns: ["id"];
          },
        ];
      };
      user_publish_count: {
        Row: {
          count: number | null;
          user_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Project_userId_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          },
        ];
      };
      UserProduct: {
        Row: {
          customerEmail: string | null;
          customerId: string | null;
          productId: string | null;
          subscriptionId: string | null;
          userId: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      clone_project: {
        Args: {
          project_id: string;
          user_id: string;
          title: string;
          domain: string;
        };
        Returns: {
          createdAt: string;
          domain: string;
          id: string;
          isDeleted: boolean;
          marketplaceApprovalStatus: Database["public"]["Enums"]["MarketplaceApprovalStatus"];
          previewImageAssetId: string | null;
          title: string;
          userId: string | null;
        };
      };
      create_production_build: {
        Args: { project_id: string; deployment: string };
        Returns: string;
      };
      database_cleanup: {
        Args: { from_date?: string; to_date?: string };
        Returns: undefined;
      };
      domainsVirtual: {
        Args: { "": Database["public"]["Tables"]["Project"]["Row"] };
        Returns: {
          cname: string;
          createdAt: string;
          domain: string;
          domainId: string;
          domainTxtRecord: string | null;
          error: string | null;
          expectedTxtRecord: string;
          id: string;
          projectId: string;
          status: Database["public"]["Enums"]["DomainStatus"];
          updatedAt: string;
          verified: boolean;
        }[];
      };
      latestBuildVirtual: {
        Args:
          | { "": Database["public"]["Tables"]["Project"]["Row"] }
          | { "": Database["public"]["Tables"]["domainsVirtual"]["Row"] };
        Returns: {
          buildId: string;
          createdAt: string;
          domain: string;
          domainsVirtualId: string;
          projectId: string;
          publishStatus: Database["public"]["Enums"]["PublishStatus"];
        }[];
      };
      latestProjectDomainBuildVirtual: {
        Args: { "": Database["public"]["Tables"]["Project"]["Row"] };
        Returns: {
          buildId: string;
          createdAt: string;
          domain: string;
          domainsVirtualId: string;
          projectId: string;
          publishStatus: Database["public"]["Enums"]["PublishStatus"];
        }[];
      };
      restore_development_build: {
        Args: { project_id: string; from_build_id: string };
        Returns: string;
      };
    };
    Enums: {
      AuthorizationRelation:
        | "viewers"
        | "editors"
        | "builders"
        | "administrators";
      DomainStatus: "INITIALIZING" | "ACTIVE" | "ERROR" | "PENDING";
      MarketplaceApprovalStatus:
        | "UNLISTED"
        | "PENDING"
        | "APPROVED"
        | "REJECTED";
      PublishStatus: "PENDING" | "PUBLISHED" | "FAILED";
      UploadStatus: "UPLOADING" | "UPLOADED";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      AuthorizationRelation: [
        "viewers",
        "editors",
        "builders",
        "administrators",
      ],
      DomainStatus: ["INITIALIZING", "ACTIVE", "ERROR", "PENDING"],
      MarketplaceApprovalStatus: [
        "UNLISTED",
        "PENDING",
        "APPROVED",
        "REJECTED",
      ],
      PublishStatus: ["PENDING", "PUBLISHED", "FAILED"],
      UploadStatus: ["UPLOADING", "UPLOADED"],
    },
  },
} as const;
