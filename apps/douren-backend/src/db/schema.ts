import { pgTable, text, uuid, integer } from 'drizzle-orm/pg-core';

export const eventTable = pgTable('Event', {
  id: integer('id').notNull().primaryKey(),
  name: text('name').notNull(),
});

export const ff42Table = pgTable('FF42', {
  boothName: text('Booth_name'),
  tag: text('Tag'),
  dm: text('DM'),
  photo: text('Photo'),
  uuid: uuid('uuid').notNull().defaultRandom().primaryKey(),
  twitterLink: text('Twitter_link'),
  twitterName: text('Twitter_name'),
  facebookLink: text('Facebook_link'),
  facebookName: text('Facebook_name'),
  instagramLink: text('Instagram_link'),
  instagramName: text('Instagram_name'),
  youtubeLink: text('Youtube_link'),
  youtubeName: text('Youtube_name'),
  twitchLink: text('Twitch_link'),
  twitchName: text('Twitch_name'),
  pixivLink: text('Pixiv_link'),
  pixivName: text('Pixiv_name'),
  plurkLink: text('Plurk_link'),
  plurkName: text('Plurk_name'),
  bahaLink: text('Baha_link'),
  bahaName: text('Baha_name'),
  day01Location: text('DAY01_location'),
  day02Location: text('DAY02_location'),
  day03Location: text('DAY03_location'),
  storeLink: text('Store_link'),
  author: text('Author'),
  officialLink: text('Official_link'),
});

export const eventDMTable = pgTable('Event_DM', {
  artistId: integer('artist_id').notNull().references(() => authorMainTable.uuid),
  boothName: text('Booth_name'),
  dm: text('DM'),
  uuid: integer('uuid').notNull().primaryKey(),
  eventId: integer('event_id').references(() => eventTable.id),
  locationDay01: text('Location_Day01'),
  locationDay02: text('Location_Day02'),
  locationDay03: text('Location_Day03'),
});

export const ownerTable = pgTable('Owner', {
  id: integer('id').notNull().primaryKey(),
  name: text('name').notNull(),
  title: text('title'),
  description: text('description'),
  githubLink: text('github_link'),
  githubName: text('github_name'),
  twitterLink: text('twitter_link'),
  twitterName: text('twitter_name'),
  discordName: text('discord_name'),
});

export const authorProductTable = pgTable('Author_Product', {
  id: integer('id').notNull().primaryKey(),
  thumbnail: text('Thumbnail').notNull(),
  title: text('Title'),
  preview: text('Preview'),
  artistId: integer('artist_id').notNull().references(() => authorMainTable.uuid),
  tag: text('Tag'),
});

export const authorMainTable = pgTable('Author_Main', {
  uuid: integer('uuid').notNull().primaryKey(),
  author: text('Author').notNull(),
  twitterLink: text('Twitter_link'),
  facebookLink: text('Facebook_link'),
  instagramLink: text('Instagram_link'),
  plurkLink: text('Plurk_link'),
  pixivLink: text('Pixiv_link'),
  bahaLink: text('Baha_link'),
  youtubeLink: text('Youtube_link'),
  twitchLink: text('Twitch_link'),
  officialLink: text('Official_link'),
  storeLink: text('Store_link'),
  myacgLink: text('Myacg_link'),
  photo: text('Photo'),
  introduction: text('Introduction'),
  tags: text('Tags'),
  boothName: text('Booth_name'),
});

export const tagTable = pgTable('Tag', {
  tag: text('tag').notNull().primaryKey(),
  count: integer('count'),
  index: integer('index').notNull(),
});

