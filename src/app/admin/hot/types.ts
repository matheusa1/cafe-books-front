import { schema } from './schema'
import { z } from 'zod'

export type Tschema = z.infer<typeof schema>
