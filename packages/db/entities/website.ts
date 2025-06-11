import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm"
import { WebsiteTick } from "./websiteTick"
import type { Relation } from "typeorm"
import { User } from "./user"
@Entity()
export class Website {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type: "varchar",nullable:false})
  url!: string

  @Column({type: "varchar",nullable:false})
  userId!: string

  @CreateDateColumn({ name: "createdAt" })
  createdAt!: Date

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt!: Date
  
  @OneToMany(() => WebsiteTick, (tick) => tick.website)
  ticks?: Relation<WebsiteTick[]>
  
  @ManyToOne(() => User, (user) => user.website)
  @JoinColumn({ name: "userId" })
  user?: Relation<User>
}
