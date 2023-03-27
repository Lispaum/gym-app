import { Prisma, CheckIn } from '@prisma/client'

export interface CheckInsRepository {
  // findById(id: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findByUserOnDate(userId: string, date: Date): Promise<CheckIn | null>
}
