import { randomUUID } from "node:crypto";
import { RocketMembersRepository } from "../rocket-members-repository";
import { PrismaService } from './../../database/prisma.service';

export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor( private prisma: PrismaService) {}
  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketseatTeamMember.create({
      data: {
       id: randomUUID(),
       name,
       function: memberFunction
      }
    })
  }

}