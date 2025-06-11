import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Website } from "./website"
import type { Relation } from "typeorm"
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({type:"varchar",unique:true})
  username!: string
  
  @Column({type:"varchar"})
  password!: string

  @CreateDateColumn({ name: "createdAt" })
  createdAt!: Date

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt!: Date 
  
  @OneToMany(() => Website, (website) => website.user)
  website?: Relation<Website[]>
}
