import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Student,
  StudentProps,
} from '@/domain/forum/enterprise/entities/student'

import { faker } from '@faker-js/faker'

export function makeStudent(
  overwrite: Partial<StudentProps> = {},
  id?: UniqueEntityID,
) {
  const question = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...overwrite,
    },
    id,
  )

  return question
}
