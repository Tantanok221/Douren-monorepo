import { publicProcedure, router } from "./TRPC";
import { fetchArtist } from "./api";
const appRouter = router({
  getArtist: publicProcedure.query(fetchArtist),
});

export type AppRouter = typeof appRouter;

