import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm"
import { WebsiteTick } from "./websiteTick"
import type { Relation } from "typeorm"
@Entity()
export class Website {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "varchar",nullable:false})
  url!: string

  @CreateDateColumn({ name: "time_added" })
  timeAdded!: Date

  @OneToMany(() => WebsiteTick, (tick) => tick.website)
  ticks?: Relation<WebsiteTick[]>
}
