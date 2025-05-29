import JOI from 'joi'

export const registerSchema = JOI.object({
    username: JOI.string().min(3).max(20).required(),
    branch_id: JOI.string().required(),
    password: JOI.string().min(8).max(20).required(),
    email: JOI.string().email().required(),
    repeat_password:JOI.any().valid(JOI.ref('password')),
    birthDate: JOI.string().required(),
    gender: JOI.string().required()
})

export const loginSchema = JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().min(8).max(20).required()
})
