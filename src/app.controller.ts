import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from "node:crypto"
import { CreateTeamMemberBody } from './dtos/create-team-member';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body

    await this.rocketMembersRepository.create(name, memberFunction)

    return {
      
    }
  }
}
