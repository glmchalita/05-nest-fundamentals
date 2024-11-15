import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { Injectable } from '@nestjs/common'
import { PrismaAnswerAttachmentMapper } from '../mappers/prisma-answer-attachment-mapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async deleteManyByAnswerId(answerId: string): Promise<void> {
    await this.prisma.attachment.deleteMany({
      where: { id: answerId },
    })
  }

  async findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]> {
    const questionAttachments = await this.prisma.attachment.findMany({
      where: { answerId },
    })

    return questionAttachments.map(PrismaAnswerAttachmentMapper.toDomain)
  }
}
