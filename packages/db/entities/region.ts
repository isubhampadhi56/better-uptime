import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { WebsiteTick } from "./websiteTick"
import type { Relation } from "typeorm"
@Entity()
export class Region {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type:"varchar"})
  name!: string

  @OneToMany(() => WebsiteTick, (tick) => tick.region)
  ticks?: Relation<WebsiteTick[]>
}
