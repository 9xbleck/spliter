import { mutation } from "./_generated/server";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this user
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (existingUser) {
      // If name, email, or image changed, update it
      const updates = {};
      if (existingUser.name !== identity.name) updates.name = identity.name;
      if (existingUser.email !== identity.email) updates.email = identity.email;
      if (existingUser.imageUrl !== identity.pictureUrl)
        updates.imageUrl = identity.pictureUrl;

      if (Object.keys(updates).length > 0) {
        await ctx.db.patch(existingUser._id, updates);
      }

      return existingUser._id;
    }

    // Otherwise, insert a new user
    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonymous",
      email: identity.email ?? null, // ✅ email now stored
      tokenIdentifier: identity.tokenIdentifier,
      imageUrl: identity.pictureUrl ?? null,
    });
  },
});
