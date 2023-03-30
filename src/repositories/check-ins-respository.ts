import { Prisma, CheckIn } from '@prisma/client'

export interface CheckInsRepository {
  // findById(id: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  findByUserOnDate(userId: string, date: Date): Promise<CheckIn | null>
}
