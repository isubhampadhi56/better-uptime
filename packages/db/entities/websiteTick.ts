import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import type { Relation } from "typeorm"
import { WebsiteStatus } from "../types/website"
import { Website } from "./website"
import { Region } from "./region"

@Entity()
export class WebsiteTick {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "integer" })
  response_time_ms?: number

  @Column({type: "varchar"})
  status?: WebsiteStatus

  @ManyToOne(() => Region, (region) => region.ticks)
  @JoinColumn({ name: "region_id" })
  region?: Relation<Region>

  @ManyToOne(() => Website, (website) => website.ticks)
  @JoinColumn({ name: "website_id" })
  website?: Relation<Website>

  @Column({type: "varchar"})
  region_id!: string

  @Column({type: "varchar"})
  website_id!: string
}
