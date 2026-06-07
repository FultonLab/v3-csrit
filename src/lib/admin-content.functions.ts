import { createServerFn } from "@tanstack/react-start";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { InitiativeMedia, StoredOpportunity, StoredPartner } from "@/lib/initiative-store";

const SUPERADMIN_EMAIL = "babar.by@gmail.com";

async function requireSuperadmin(userId: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (error || data.user?.email?.toLowerCase() !== SUPERADMIN_EMAIL) {
    throw new Error("Unauthorized admin action");
  }
  return supabaseAdmin;
}

export const upsertPartner = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => data as StoredPartner)
  .handler(async ({ data, context }) => {
    const supabaseAdmin = await requireSuperadmin(context.userId);
    const { error } = await supabaseAdmin.from("partners" as never).upsert(data as never);
    if (error) throw error;
    return { ok: true };
  });

export const deletePartner = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => data as string)
  .handler(async ({ data, context }) => {
    const supabaseAdmin = await requireSuperadmin(context.userId);
    const { error } = await supabaseAdmin
      .from("partners" as never)
      .delete()
      .eq("id", data);
    if (error) throw error;
    return { ok: true };
  });

export const upsertOpportunity = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => data as StoredOpportunity)
  .handler(async ({ data, context }) => {
    const supabaseAdmin = await requireSuperadmin(context.userId);
    const { error } = await supabaseAdmin.from("opportunities" as never).upsert(data as never);
    if (error) throw error;
    return { ok: true };
  });

export const deleteOpportunity = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => data as string)
  .handler(async ({ data, context }) => {
    const supabaseAdmin = await requireSuperadmin(context.userId);
    const { error } = await supabaseAdmin
      .from("opportunities" as never)
      .delete()
      .eq("id", data);
    if (error) throw error;
    return { ok: true };
  });

export const upsertInitiativeMedia = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => data as InitiativeMedia)
  .handler(async ({ data, context }) => {
    const supabaseAdmin = await requireSuperadmin(context.userId);
    const { error } = await supabaseAdmin
      .from("initiative_media" as never)
      .upsert(data as never, { onConflict: "opportunity_id" } as never);
    if (error) throw error;
    return { ok: true };
  });