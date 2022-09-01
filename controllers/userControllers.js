import { User } from '../models/User.js'
import { v4 as uuid } from 'uuid'

export const getUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

export const createUser = async (req, res) => {
    const { name, email, birthdate, phone } = req.body

    try {
        const user = new User({ _id: uuid(), name, email, birthdate, phone })
        await user.save()
        return res.status(200).json({ msg: 'User successfully created!' })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: 'An error occurred', error })
    }
}

export const updateUser = async (req, res) => {
    const { _id, name, email, birthdate, phone } = req.body

    try {
        await User.findByIdAndUpdate( _id, { name, email, birthdate, phone })
        return res.status(200).json({ msg: 'User successfully updated!' })
    } catch (error) {
        return res.status(400).json({ msg: 'An error occurred', error })
    }
}

export const deleteUser = async (req, res) => {
    const { _id } = req.params

    try {
        await User.findByIdAndDelete(_id)
        return res.status(200).json({ msg: 'User successfully deleted!' })
    } catch (error) {
        return res.status(400).json({ msg: 'An error occurred', error })
    }
}