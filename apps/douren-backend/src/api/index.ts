
import {db} from "../db"

export async function fetchArtist(){
  const data = await db.query.authorMainTable.findMany()
  return data
}