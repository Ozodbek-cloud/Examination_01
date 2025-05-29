import JOI from 'joi'

export const AdminregisterSchema = JOI.object({
    firstname: JOI.string().min(3).max(20).required(),
    lastname: JOI.string().required(),
    password: JOI.string().min(8).max(20).required(),
    address: JOI.string(),
    email: JOI.string().email().required(),
    birthDate: JOI.string().required(),
    img: JOI.string()
})

export const AdminloginSchema = JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().min(8).max(20).required()
})
