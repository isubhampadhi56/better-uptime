import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
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

  @CreateDateColumn({ name: "createdAt" })
  createdAt!: Date

  @ManyToOne(() => Region, (region) => region.ticks)
  @JoinColumn({ name: "regionId" })
  region?: Relation<Region>

  @ManyToOne(() => Website, (website) => website.ticks)
  @JoinColumn({ name: "websiteId" })
  website?: Relation<Website>

  @Column({type: "varchar"})
  regionId!: string

  @Column({type: "varchar"})
  websiteId!: string
}
