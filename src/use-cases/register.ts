import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: any) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const thereisEmailConflict = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (thereisEmailConflict) {
      throw new Error('E-mail already exists')
    }

    // SOLI (D)

    // const prismaUsersRepository = new PrismaUsersRepository()

    const password_hash = await hash(password, 3)

    await this.usersRepository.create({ name, email, password_hash })
  }
}
