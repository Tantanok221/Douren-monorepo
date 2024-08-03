import { publicProcedure, router } from "./TRPC";
import { fetchArtist } from "./api";
import express from 'express';
const appRouter = router({
  getArtist: publicProcedure.query(fetchArtist),
});

export type AppRouter = typeof appRouter;

