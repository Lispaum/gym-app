import { Gym, Prisma } from '@prisma/client'
import { GymsRepository } from '../gyms-repository'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) return null

    return gym
  }

  async create(data: Prisma.GymCreateInput) {
    const gym = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.items.push(gym)
    return gym
  }
}